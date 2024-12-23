import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformApplications = (applications: any[]) => {
  return applications.map((application) => ({
    companyName: application.internship.companyName,
    title: application.internship.internshipTitle,
    status: "applied",
    salaryRange: application.internship.salaryRange,
  }));
};
