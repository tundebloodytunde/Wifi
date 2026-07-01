"use client";

import { useState } from "react";
import WoundSelector from "./components/WoundSelector";
import InfectionSelector from "./components/InfectionSelector";
import IschemiaInput from "./components/IschemiaInput";
import ResultPanel from "./components/ResultPanel";
import RecommendationsPanel from "./components/RecommendationsPanel";
import { computeWIfIStage, riskFromStage } from "../lib/wificalc";

export default function Page() {
  const [wound, setWound] = useState(0);
  const [infection, setInfection] = useState(0);
  const [ischemia, setIschemia] = useState<number | null>(null);

  const stage =
    ischemia !== null ? computeWIfIStage(wound, ischemia, infection) : null;

  const risk = stage ? riskFromStage(stage) : null;

  return (
    <main className="min-h-screen">
      <header className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
        <div className="max-w-xl mx-auto px-6 py-8">
          <h1 className="text-2xl font-bold">WIfI Calculator</h1>
          <p className="text-sky-50/90 text-sm mt-1">
            Wound, Ischemia, foot Infection amputation risk staging
          </p>
        </div>
      </header>

      <div className="max-w-xl mx-auto p-6 -mt-4 space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 space-y-5">
          <WoundSelector value={wound} onChange={setWound} />
          <IschemiaInput onGradeChange={setIschemia} />
          <InfectionSelector value={infection} onChange={setInfection} />
        </div>

        <ResultPanel
          wound={wound}
          ischemia={ischemia}
          infection={infection}
          stage={stage}
          risk={risk}
        />

        {stage !== null && ischemia !== null && (
          <RecommendationsPanel
            wound={wound}
            ischemia={ischemia}
            infection={infection}
            stage={stage}
          />
        )}
      </div>
    </main>
  );
}
