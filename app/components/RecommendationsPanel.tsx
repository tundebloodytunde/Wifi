"use client";

import {
  infectionGuidance,
  overallGuidance,
  revascularizationGuidance,
  woundGuidance,
} from "../../lib/wificalc";

type Props = {
  wound: number;
  ischemia: number;
  infection: number;
  stage: number;
};

export default function RecommendationsPanel({
  wound,
  ischemia,
  infection,
  stage,
}: Props) {
  const items = [
    { label: "Overall", text: overallGuidance(stage) },
    { label: "Revascularization", text: revascularizationGuidance(ischemia) },
    { label: "Infection", text: infectionGuidance(infection) },
    { label: "Wound care", text: woundGuidance(wound) },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
      <h3 className="font-semibold text-slate-800 mb-3">
        Clinical Considerations
      </h3>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label} className="text-sm">
            <span className="font-semibold text-slate-700">
              {item.label}:
            </span>{" "}
            <span className="text-slate-600">{item.text}</span>
          </li>
        ))}
      </ul>

      <p className="text-xs text-slate-400 mt-4 border-t border-slate-100 pt-3">
        General educational guidance based on WIfI classification principles.
        Not a substitute for the official SVS WIfI consensus documentation or
        clinical judgment.
      </p>
    </div>
  );
}
