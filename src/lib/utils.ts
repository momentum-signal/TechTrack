import {
  GetApplicationResponseProps,
  TransformedApplicationProps,
} from "@/types/application.types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const transformApplications = (
  applications: GetApplicationResponseProps[]
): TransformedApplicationProps[] => {
  return applications.map((application) => ({
    id: application.applicationId,
    companyName: application.internship.companyName,
    title: application.internship.internshipTitle,
    status: application.applicationStatus,
    salaryRange: application.internship.salaryRange,
  }));
};
