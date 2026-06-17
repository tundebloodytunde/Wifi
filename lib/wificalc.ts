export function ischemiaFromPerfusion({
  abi,
  ankle,
  toe,
  tcpo2,
}: {
  abi: number | null;
  ankle: number | null;
  toe: number | null;
  tcpo2: number | null;
}): number | null {
  if (toe !== null) {
    if (toe > 60) return 0;
    if (toe > 40) return 1;
    if (toe > 30) return 2;
    return 3;
  }

  if (ankle !== null) {
    if (ankle > 100) return 0;
    if (ankle > 70) return 1;
    if (ankle > 50) return 2;
    return 3;
  }

  if (abi !== null) {
    if (abi > 0.8) return 0;
    if (abi > 0.6) return 1;
    if (abi > 0.4) return 2;
    return 3;
  }

  if (tcpo2 !== null) {
    if (tcpo2 > 60) return 0;
    if (tcpo2 > 40) return 1;
    if (tcpo2 > 30) return 2;
    return 3;
  }

  return null;
}

export function computeWIfIStage(w: number, i: number, f: number): number {
  const sum = w + i + f;
  if (sum <= 2) return 1;
  if (sum <= 4) return 2;
  if (sum <= 6) return 3;
  return 4;
}

export function riskFromStage(stage: number): string {
  if (stage === 1) return "Low 1‑year amputation risk";
  if (stage === 2) return "Moderate risk";
  if (stage === 3) return "High risk";
  return "Very high risk";
}
