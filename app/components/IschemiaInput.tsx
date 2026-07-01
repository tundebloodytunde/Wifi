"use client";

import { useState } from "react";
import { ischemiaFromPerfusion } from "../../lib/wificalc";

type Method = "abi" | "ankle" | "toe" | "tcpo2";

const METHOD_LIMITS: Record<Method, { min: number; max: number; label: string }> = {
  abi: { min: 0, max: 1.4, label: "ABI" },
  ankle: { min: 0, max: 300, label: "Ankle Pressure (mmHg)" },
  toe: { min: 0, max: 200, label: "Toe Pressure (mmHg)" },
  tcpo2: { min: 0, max: 100, label: "TcPO₂ (mmHg)" },
};

export default function IschemiaInput({
  onGradeChange,
}: {
  onGradeChange: (grade: number | null) => void;
}) {
  const [method, setMethod] = useState<Method>("abi");
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const limits = METHOD_LIMITS[method];

  const handleChange = (val: string) => {
    setValue(val);

    if (!val) {
      setError(null);
      onGradeChange(null);
      return;
    }

    const num = Number(val);

    if (Number.isNaN(num) || num < limits.min || num > limits.max) {
      setError(`Enter a value between ${limits.min} and ${limits.max}`);
      onGradeChange(null);
      return;
    }

    setError(null);

    const params = {
      abi: null as number | null,
      ankle: null as number | null,
      toe: null as number | null,
      tcpo2: null as number | null,
    };
    params[method] = num;

    onGradeChange(ischemiaFromPerfusion(params));
  };

  return (
    <div>
      <label htmlFor="ischemia-method" className="font-semibold mb-2 block">
        Ischemia (I)
      </label>

      <select
        id="ischemia-method"
        className="border p-2 rounded w-full mb-2"
        value={method}
        onChange={(e) => {
          setMethod(e.target.value as Method);
          setValue("");
          setError(null);
          onGradeChange(null);
        }}
      >
        <option value="abi">ABI</option>
        <option value="ankle">Ankle Pressure</option>
        <option value="toe">Toe Pressure</option>
        <option value="tcpo2">TcPO₂</option>
      </select>

      <label htmlFor="ischemia-value" className="sr-only">
        {limits.label}
      </label>
      <input
        id="ischemia-value"
        type="number"
        min={limits.min}
        max={limits.max}
        step="any"
        className="border p-2 rounded w-full"
        placeholder={`Enter ${limits.label}`}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        aria-invalid={error !== null}
        aria-describedby={error ? "ischemia-error" : undefined}
      />
      {error && (
        <p id="ischemia-error" className="text-sm text-red-600 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
