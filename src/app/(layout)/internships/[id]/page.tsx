import { getInternshipById } from "@/services/InternshipService";
import InternshipDetails from "@/components/internships/internship-details";

interface InternshipDetailProps {
  params: {
    id: string;
  };
}

const InternshipDetailsPage = async ({
  params: { id },
}: InternshipDetailProps) => {
  const { data: internship } = await getInternshipById(id);

  return (
    <div className="pt-6">
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid  lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <InternshipDetails key={internship?.id} internship={internship} />
      </div>
    </div>
  );
};

export default InternshipDetailsPage;
