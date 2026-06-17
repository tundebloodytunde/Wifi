"use client";

type Props = {
  value: number;
  onChange: (v: number) => void;
};

export default function InfectionSelector({ value, onChange }: Props) {
  return (
    <div>
      <h3 className="font-semibold mb-2">Foot Infection (fI)</h3>
      <select
        className="border p-2 rounded w-full"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value={0}>0 — No infection</option>
        <option value={1}>1 — Mild</option>
        <option value={2}>2 — Moderate</option>
        <option value={3}>3 — Severe</option>
      </select>
    </div>
  );
}
