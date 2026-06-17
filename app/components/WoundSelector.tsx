"use client";

type Props = {
  value: number;
  onChange: (v: number) => void;
};

export default function WoundSelector({ value, onChange }: Props) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Wound Grade (W)</h3>
      <select
        className="border p-2 rounded w-full"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value={0}>0 — No ulcer / no gangrene</option>
        <option value={1}>1 — Small/shallow ulcer</option>
        <option value={2}>2 — Deep ulcer ± exposed structures</option>
        <option value={3}>3 — Extensive ulcer/gangrene</option>
      </select>
    </div>
  );
}
