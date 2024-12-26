import { InternshipProps } from "./internship.types";

export interface CreateApplicationProps {
  userEmail: string;
  internshipId: string;
}

export enum ApplicationStatusEnum {
  APPLIED = "applied",
  AWAITING = "awaiting",
  INTERVIEW = "interview",
  SELECTED = "selected",
  REJECTED = "rejected",
}

export interface GetApplicationResponseProps {
  applicationId: string;
  userEmail: string;
  internship: InternshipProps;
  applicationStatus: ApplicationStatusEnum;
}

export type TransformedApplicationProps = {
  id: string;
  companyName: string;
  title: string;
  status: string;
  salaryRange: string;
};
