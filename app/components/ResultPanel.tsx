"use client";

type Props = {
  wound: number;
  ischemia: number | null;
  infection: number;
  stage: number | null;
  risk: string | null;
};

const STAGE_STYLES: Record<number, { badge: string; text: string }> = {
  1: { badge: "bg-emerald-100 text-emerald-800", text: "text-emerald-700" },
  2: { badge: "bg-amber-100 text-amber-800", text: "text-amber-700" },
  3: { badge: "bg-orange-100 text-orange-800", text: "text-orange-700" },
  4: { badge: "bg-red-100 text-red-800", text: "text-red-700" },
};

export default function ResultPanel({
  wound,
  ischemia,
  infection,
  stage,
  risk,
}: Props) {
  const styles = stage ? STAGE_STYLES[stage] : null;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
      <h3 className="font-semibold text-slate-800 mb-3">Results</h3>

      <dl className="grid grid-cols-3 gap-2 text-center text-sm mb-4">
        <div className="bg-slate-50 rounded-lg py-2">
          <dt className="text-slate-500">Wound</dt>
          <dd className="font-semibold text-slate-800">{wound}</dd>
        </div>
        <div className="bg-slate-50 rounded-lg py-2">
          <dt className="text-slate-500">Ischemia</dt>
          <dd className="font-semibold text-slate-800">{ischemia ?? "—"}</dd>
        </div>
        <div className="bg-slate-50 rounded-lg py-2">
          <dt className="text-slate-500">Infection</dt>
          <dd className="font-semibold text-slate-800">{infection}</dd>
        </div>
      </dl>

      {stage && styles ? (
        <div className={`rounded-lg p-4 ${styles.badge}`}>
          <p className="text-lg font-bold">WIfI Stage {stage}</p>
          <p className={`text-sm font-medium ${styles.text}`}>{risk}</p>
        </div>
      ) : (
        <p className="text-slate-500 text-sm">
          Enter an ischemia value to compute the stage.
        </p>
      )}
    </div>
  );
}
