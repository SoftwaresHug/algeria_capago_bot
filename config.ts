// Auto-generated configuration for Capago France Algeria AutoBot

export const config = {
  botName: "Capago France Algeria",
  country: "Algeria",
  provider: "Capago",
  destination: "France",
  loginUrl: "https://fr-dz.capago.eu/en/login",
  centers: [
  "Algiers",
  "Oran",
  "Annaba",
  "Constantine"
],
  visaCategories: [
  "Short Stay (Tourism/Family/Business/Study/Medical/Transit)",
  "Long Stay (Student/Work/Family/General)"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
