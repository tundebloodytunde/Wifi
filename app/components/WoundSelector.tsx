"use client";

type Props = {
  value: number;
  onChange: (v: number) => void;
};

export default function WoundSelector({ value, onChange }: Props) {
  return (
    <div>
      <label htmlFor="wound-grade" className="font-semibold mb-2 block text-slate-700">
        Wound Grade (W)
      </label>
      <select
        id="wound-grade"
        className="border border-slate-300 p-2 rounded-lg w-full bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
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
