import InternshipCard from "@/components/internships/internship-card";

import { Button } from "@/components/ui/button";

const Internships = () => {
  const filters = [
    "All",
    "Frontend",
    "Backend",
    "Full Stack",
    "UI/UX",
    "Data Science",
    "Marketing",
  ];

  return (
    <main className="px-40 py-5">
      <div className="mx-auto my-3 max-w-[800px]">
        <div className="flex flex-wrap gap-3 py-3">
          {filters.map((filter: string) => (
            <Button key={filter} variant="secondary">
              {filter}
            </Button>
          ))}
        </div>
        <div className="mt-0">
          <InternshipCard />
          <InternshipCard />
          <InternshipCard />
          <InternshipCard />
          <InternshipCard />
          <InternshipCard />
        </div>
      </div>
    </main>
  );
};

export default Internships;
