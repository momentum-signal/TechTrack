import InternshipCard from "@/components/internships/internship-card";

import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="mx-auto my-3 max-w-[800px]">
      <div className="space-x-2">
        <Button variant="secondary">Recent job</Button>
        <Button variant="secondary">Recent job</Button>
        <Button variant="secondary">Recent job</Button>
        <Button variant="secondary">Recent job</Button>
        <Button variant="secondary">Recent job</Button>
        <Button variant="secondary">Recent job</Button>
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
  );
};

export default page;
