import React from "react";
import { farsiToAsciiDigits } from "../utils/plate";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function PlateInput({ value, onChange }: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const converted = farsiToAsciiDigits(e.target.value);
    const filtered = converted.replace(/[^0-9\u0600-\u06FF-]/g, "");
    onChange(filtered);
  }

  return (
    <div style={{ direction: "rtl" }}>
      <label style={{ display: "block", marginBottom: 6 }}>شماره پلاک</label>
      <input
        dir="rtl"
        inputMode="text"
        placeholder="مثال: ۱۲الف۳۴۵-۶۷"
        value={value}
        onChange={handleChange}
        style={{
          padding: "8px 12px",
          width: 260,
          fontSize: 16,
          fontFamily: "Vazirmatn, sans-serif",
        }}
      />
    </div>
  );
}
