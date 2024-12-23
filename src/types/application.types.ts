import { InternshipProps } from "./internship.types";

export interface CreateApplicationProps {
  userEmail: string;
  internshipId: string;
}

export interface ApplicationResponseProps {
  applicationId: string;
  userEmail: string;
  internship: InternshipProps;
}

export type TransformedApplicationProps = {
  companyName: string;
  title: string;
  status: string;
  salaryRange: string;
};
