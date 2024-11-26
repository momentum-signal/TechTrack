export const routes = {
  internships: "/internships",
  internship: (jobId: string) => `/internships/${jobId}`,
  dashboard: "/dashboard",
} as const;
