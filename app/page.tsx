"use client";

import { useState } from "react";
import WoundSelector from "./components/WoundSelector";
import InfectionSelector from "./components/InfectionSelector";
import IschemiaInput from "./components/IschemiaInput";
import ResultPanel from "./components/ResultPanel";
import { computeWIfIStage, riskFromStage } from "../lib/wificalc";

export default function Page() {
  const [wound, setWound] = useState(0);
  const [infection, setInfection] = useState(0);
  const [ischemia, setIschemia] = useState<number | null>(null);

  const stage =
    ischemia !== null ? computeWIfIStage(wound, ischemia, infection) : null;

  const risk = stage ? riskFromStage(stage) : null;

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">WIfI Calculator</h1>

      <WoundSelector value={wound} onChange={setWound} />
      <IschemiaInput onGradeChange={setIschemia} />
      <InfectionSelector value={infection} onChange={setInfection} />

      <ResultPanel
        wound={wound}
        ischemia={ischemia}
        infection={infection}
        stage={stage}
        risk={risk}
      />
    </main>
  );
}
