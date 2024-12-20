export interface InternshipProps {
  id: string;
  companyName: string;
  companyLogoUrl: string;
  internshipTitle: string;
  internshipDescription: string;
  salaryRange: string;
  location?: string;
  contactInformation?: string;
  notes?: string;
  createdDate: Date;
}
