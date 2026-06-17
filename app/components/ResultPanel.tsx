"use client";

type Props = {
  wound: number;
  ischemia: number | null;
  infection: number;
  stage: number | null;
  risk: string | null;
};

export default function ResultPanel({
  wound,
  ischemia,
  infection,
  stage,
  risk,
}: Props) {
  return (
    <div className="border rounded p-4 mt-4 bg-gray-50">
      <h3 className="font-semibold mb-2">Results</h3>

      <p>Wound Grade: {wound}</p>
      <p>Ischemia Grade: {ischemia ?? "—"}</p>
      <p>Infection Grade: {infection}</p>

      <hr className="my-3" />

      {stage ? (
        <>
          <p className="text-lg font-bold">WIfI Stage: {stage}</p>
          <p className="text-sm text-gray-700">{risk}</p>
        </>
      ) : (
        <p className="text-gray-500">Enter ischemia value to compute stage.</p>
      )}
    </div>
  );
}
