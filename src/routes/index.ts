export const routes = {
  HOME: "/",
  INTERNSHIPS: "/internships",
  INTERNSHIP: (internshipId: string) => `/internships/${internshipId}`,
  ABOUT: "/about",

  // Dashbaord
  DASHBOARD: "/dashboard",
  APPLICATION: "/dashboard/applications",
  PROFILE: "/dashboard/profile",

  // Authentication
  LOGIN: "/login",
  REGISTER: "/register",
} as const;
