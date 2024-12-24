import { ApplicationResponseProps } from "@/types/application.types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformApplications = (
  applications: ApplicationResponseProps[]
) => {
  return applications.map((application) => ({
    id: application.applicationId,
    companyName: application.internship.companyName,
    title: application.internship.internshipTitle,
    status: "applied",
    salaryRange: application.internship.salaryRange,
  }));
};
