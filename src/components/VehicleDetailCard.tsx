import React from "react";
import type { Vehicle } from "../@types/index.type";
import { formatIranPlate, toPersianDigits } from "../utils/plate";
import {
  calculateInsurancePrice,
  formatNumberWithCommas,
} from "../utils/insurance";

type Props = {
  vehicle: Vehicle;
};

const VehicleDetailCard: React.FC<Props> = ({ vehicle }) => {
  return (
    <div
      style={{
        marginTop: 16,
        border: "1px solid #ddd",
        padding: 12,
        borderRadius: 8,
      }}
    >
      <h3>مشخصات خودرو</h3>

      <div>پلاک: {formatIranPlate(vehicle.plate)}</div>
      <div>
        برند: {vehicle.brand} — مدل: {vehicle.model} ({vehicle.type})
      </div>

      <div>
        تاریخ ساخت:
        {toPersianDigits(vehicle.manufactureJalali.year.toString())}{" "}
        {vehicle.manufactureJalali.monthName}
      </div>

      <div>
        مالک: {vehicle.owner.fullName} — {vehicle.owner.nationalId}
      </div>

      <div style={{ marginTop: 10 }}>
        <strong>قیمت تخمینی بیمه سالانه:</strong>
        <div style={{ fontSize: 20, marginTop: 4 }}>
          {formatNumberWithCommas(
            calculateInsurancePrice(1_000_000, vehicle.manufactureJalali.year)
          )}{" "}
          ریال
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailCard;
