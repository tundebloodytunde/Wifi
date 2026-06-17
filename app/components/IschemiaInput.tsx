"use client";

import { useState } from "react";

type Props = {
  onGradeChange: (grade: number | null) => void;
};

export default function IschemiaInput({ onGradeChange }: Props) {
  const [method, setMethod] = useState<string>("abi");
  const [value, setValue] = useState<string>("");

  const handleChange = (val: string) => {
    setValue(val);
    const num = val ? Number(val) : null;

    if (num === null) {
      onGradeChange(null);
      return;
    }

    // Temporary mapping — real mapping is in wificalc.ts
    let grade = null;

    if (method === "toe") {
      if (num > 60) grade = 0;
      else if (num > 40) grade = 1;
      else if (num > 30) grade = 2;
      else grade = 3;
    }

    if (method === "ankle") {
      if (num > 100) grade = 0;
      else if (num > 70) grade = 1;
      else if (num > 50) grade = 2;
      else grade = 3;
    }

    if (method === "abi") {
      if (num > 0.8) grade = 0;
      else if (num > 0.6) grade = 1;
      else if (num > 0.4) grade = 2;
      else grade = 3;
    }

    if (method === "tcpo2") {
      if (num > 60) grade = 0;
      else if (num > 40) grade = 1;
      else if (num > 30) grade = 2;
      else grade = 3;
    }

    onGradeChange(grade);
  };

  return (
    <div>
      <h3 className="font-semibold mb-2">Ischemia (I)</h3>

      <select
        className="border p-2 rounded w-full mb-2"
        value={method}
        onChange={(e) => {
          setMethod(e.target.value);
          setValue("");
          onGradeChange(null);
        }}
      >
        <option value="abi">ABI</option>
        <option value="ankle">Ankle Pressure</option>
        <option value="toe">Toe Pressure</option>
        <option value="tcpo2">TcPO₂</option>
      </select>

      <input
        type="number"
        className="border p-2 rounded w-full"
        placeholder="Enter value"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
