import InternshipCard from "@/components/internships/internship-card";

import { Button } from "@/components/ui/button";
import { getInternships } from "@/services/InternshipService";
import { InternshipProps } from "@/types/internship.types";

const Internships = async () => {
  const filters = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
    "UI/UX",
    "Data Science",
    "Marketing",
    "Machine Learning",
  ];

  const { data: internships } = await getInternships();

  return (
    <main className="px-40 py-5">
      <div className="mx-auto my-3 max-w-[800px]">
        <div className="flex flex-wrap justify-between gap-3 gap-y-3">
          {filters.map((filter: string) => (
            <Button key={filter} variant="secondary" className="h-8">
              {filter}
            </Button>
          ))}
        </div>
        <div className="mt-0">
          {internships.map((internship: InternshipProps) => (
            <InternshipCard key={internship.id} data={internship} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Internships;
