export const routes = {
  HOME: "/",
  INTERNSHIPS: "/internships",
  INTERNSHIP: (internshipId: string) => `/internships/${internshipId}`,
  ABOUT: "/about",
  DASHBOARD: "/dashboard",

  // Authentication
  LOGIN: "/login",
  REGISTER: "/register",
} as const;
