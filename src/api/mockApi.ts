import type { Vehicle } from "../@types/index.type";

const MOCK_DB: Record<string, Vehicle> = {
  "12الف345-67": {
    plate: "12الف345-67",
    brand: "بوگاتی",
    model: "المنت",
    type: "سواری",
    manufactureJalali: { year: 1399, monthName: "مهر" },
    owner: { fullName: "علی رضایی", nationalId: "0012345678" },
  },
  "98ب124-55": {
    plate: "98ب124-55",
    brand: "پراید",
    model: "131",
    type: "سواری",
    manufactureJalali: { year: 1385, monthName: "اسفند" },
    owner: { fullName: "سارا محمدی", nationalId: "0098765432" },
  },
};

export async function fetchVehicleByPlate(
  normalizedPlate: string
): Promise<Vehicle | null> {
  await new Promise((r) => setTimeout(r, 700)); // simulate network
  const found = MOCK_DB[normalizedPlate] ?? null;
  return found;
}
