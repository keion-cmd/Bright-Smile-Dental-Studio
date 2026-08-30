// Canonical insurance/coverage provider list — single source of truth for both
// the InsuranceMarquee display and the InsuranceCombobox form field. Replace the
// placeholder names with the providers the client actually accepts.
export interface InsuranceProvider {
  id: string;
  name: string;
}

export const insuranceProviders: InsuranceProvider[] = [
  { id: "maxicare", name: "Maxicare" },
  { id: "intellicare", name: "Intellicare" },
  { id: "medicard", name: "Medicard" },
  { id: "cocolife-healthcare", name: "Cocolife Healthcare" },
  { id: "philhealth", name: "PhilHealth" },
  { id: "other", name: "Other / Not Listed" },
];

export const INSURANCE_PROVIDER_NAMES = insuranceProviders.map((p) => p.name) as [string, ...string[]];
