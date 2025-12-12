import type { HistoryRecord } from "../@types/index.type";

export default function History({
  records,
  onRemove,
}: {
  records: HistoryRecord[];
  onRemove: (i: number) => void;
}) {
  return (
    <div style={{ direction: "rtl", marginTop: 12 }}>
      <h4>تاریخچه</h4>
      {records.length === 0 ? (
        <div>تاریخی موجود نیست</div>
      ) : (
        <ul>
          {records.map((r, i) => (
            <li key={i} style={{ marginBottom: 8 }}>
              <strong>{r.plate}</strong> — {r.owner} —{" "}
              {r.price.toLocaleString()} ریال
              <button style={{ marginRight: 8 }} onClick={() => onRemove(i)}>
                حذف
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
