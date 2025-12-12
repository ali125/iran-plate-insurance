export type Vehicle = {
  plate: string;
  brand: string;
  model: string;
  type: string;
  manufactureJalali: { year: number; monthName: string };
  owner: { fullName: string; nationalId: string };
};

export type HistoryRecord = { plate: string; owner: string; price: number };
