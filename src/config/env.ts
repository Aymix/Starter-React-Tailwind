export const env = {
  appName: import.meta.env.VITE_APP_NAME ?? "App",
  apiUrl: import.meta.env.VITE_API_URL ?? "",
  useMocks: import.meta.env.VITE_USE_MOCKS === "true",
} as const;
