import moment from "jalali-moment";

export function calculateInsurancePrice(
  base: number,
  manufactureYearJalali: number,
  currentYearJalali?: number
): number {
  moment.locale("fa");
  const now = currentYearJalali ?? moment().year();

  const age = Math.max(0, (now ?? 0) - manufactureYearJalali);
  const factor = Math.pow(1.12, age);
  const price = Math.round(base * factor);
  return price;
}

export function formatNumberWithCommas(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
