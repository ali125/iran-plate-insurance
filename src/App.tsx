import React, { useState, useEffect, useCallback } from "react";
import PlateInput from "./components/PlateInput";
import History from "./components/History";
import { normalizePlateInput } from "./utils/plate";
import { fetchVehicleByPlate } from "./api/mockApi";
import { calculateInsurancePrice } from "./utils/insurance";
import VehicleDetailCard from "./components/VehicleDetailCard";
import historyStorage from "./utils/history";

export default function App() {
  const [plate, setPlate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [vehicle, setVehicle] = useState<any | null>(null);
  const [history, setHistory] = useState(historyStorage.loadHistory());

  useEffect(() => {
    historyStorage.saveHistory(history);
  }, [history]);

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();
      setError(null);
      setVehicle(null);

      const normalized = normalizePlateInput(plate);
      console.log(plate, normalized);
      if (!normalized) {
        setError("پلاک وارد نشده");
        return;
      }

      setLoading(true);
      try {
        const v = await fetchVehicleByPlate(normalized);

        if (!v) {
          setError("خودرویی با این پلاک یافت نشد.");
        } else {
          setVehicle(v);

          const price = calculateInsurancePrice(
            1_000_000,
            v.manufactureJalali.year
          );

          const record = {
            plate: v.plate,
            owner: v.owner.fullName,
            price,
          };

          setHistory((prev) => [record, ...prev]);
        }
      } catch (err: any) {
        console.log(err);
        setError("خطا در ارتباط با سرور");
      } finally {
        setLoading(false);
      }
    },
    [plate]
  );

  const handleRemoveHistory = useCallback((index: number) => {
    setHistory((prev) => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <div>
      <h2>استعلام خودرو و بیمه سالانه</h2>

      <form onSubmit={handleSubmit}>
        <PlateInput value={plate} onChange={setPlate} />

        <div style={{ marginTop: 12 }}>
          <button type="submit" disabled={loading}>
            {loading ? "در حال بارگذاری..." : "استعلام"}
          </button>
        </div>
      </form>

      {error && <div style={{ marginTop: 12, color: "crimson" }}>{error}</div>}

      {vehicle && <VehicleDetailCard vehicle={vehicle} />}

      <History records={history} onRemove={handleRemoveHistory} />
    </div>
  );
}
