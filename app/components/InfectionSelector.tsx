"use client";

type Props = {
  value: number;
  onChange: (v: number) => void;
};

export default function InfectionSelector({ value, onChange }: Props) {
  return (
    <div>
      <label htmlFor="infection-grade" className="font-semibold mb-2 block text-slate-700">
        Foot Infection (fI)
      </label>
      <select
        id="infection-grade"
        className="border border-slate-300 p-2 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
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
