import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const applicationSchema = z.object({
  id: z.string(),
  companyName: z.string(),
  title: z.string(),
  status: z.string(),
  salaryRange: z.string(),
});

export type Application = z.infer<typeof applicationSchema>;
