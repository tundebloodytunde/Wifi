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

export function revascularizationGuidance(ischemia: number): string {
  if (ischemia === 0) {
    return "Perfusion appears adequate — revascularization is unlikely to be needed for healing.";
  }
  if (ischemia === 1) {
    return "Mild ischemia — vascular evaluation is reasonable, especially for larger or non-healing wounds.";
  }
  if (ischemia === 2) {
    return "Moderate ischemia — revascularization is likely to improve healing potential; refer for vascular evaluation.";
  }
  return "Severe ischemia — revascularization is usually required for limb salvage; refer urgently to vascular surgery.";
}

export function infectionGuidance(infection: number): string {
  if (infection === 0) {
    return "No signs of infection — continue routine wound care.";
  }
  if (infection === 1) {
    return "Mild infection — outpatient oral antibiotics with close monitoring.";
  }
  if (infection === 2) {
    return "Moderate infection — consider surgical debridement, wound cultures, and antibiotics; hospitalization may be warranted.";
  }
  return "Severe infection — emergent surgical debridement/drainage, hospitalization, and evaluation for sepsis.";
}

export function woundGuidance(wound: number): string {
  if (wound === 0) {
    return "No open wound — focus on prevention, offloading, and routine foot checks.";
  }
  if (wound === 1) {
    return "Small/shallow wound — standard local wound care, offloading, and monitoring.";
  }
  if (wound === 2) {
    return "Deeper wound — consider surgical debridement and multidisciplinary wound care.";
  }
  return "Extensive tissue loss/gangrene — surgical debridement or partial amputation is often part of limb salvage.";
}

export function overallGuidance(stage: number): string {
  if (stage === 1) {
    return "Routine surveillance and risk-factor optimization; conservative management is typically appropriate.";
  }
  if (stage === 2) {
    return "Outpatient vascular and wound care referral recommended, with close follow-up.";
  }
  if (stage === 3) {
    return "Timely referral to a vascular specialist / limb preservation team for revascularization and wound management.";
  }
  return "Urgent multidisciplinary evaluation (vascular surgery, infectious disease, podiatry). Revascularization and aggressive infection control are priorities — amputation risk is high without prompt intervention.";
}
