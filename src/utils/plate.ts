export const FARSI_DIGITS = "۰۱۲۳۴۵۶۷۸۹";
export const ASCII_DIGITS = "0123456789";

export const toPersianDigits = (str: string) => {
  const farsi = "۰۱۲۳۴۵۶۷۸۹";
  return str.replace(/\d/g, (d) => farsi[Number(d)]);
};

export function farsiToAsciiDigits(input: string): string {
  return input.replace(/[$\u06F0-\u06F9]/g, (ch) => {
    const idx = FARSI_DIGITS.indexOf(ch);
    return idx >= 0 ? ASCII_DIGITS[idx] : ch;
  });
}

export function formatIranPlate(normalized: string): string {
  const cleaned = normalized.replace(/\s+/g, "");
  if (cleaned.includes("-")) return cleaned;

  if (cleaned.length >= 9) {
    const left = cleaned.slice(0, cleaned.length - 2);
    const right = cleaned.slice(cleaned.length - 2);
    return `${left}-${right}`;
  }
  return cleaned;
}

export function normalizePlateInput(raw: string): string {
  let s = farsiToAsciiDigits(raw);
  s = s.replace(/[^0-9\u0600-\u06FF-]/g, "");

  s = s.replace(/-+/g, "-");

  s = s.trim();

  return s;
}
