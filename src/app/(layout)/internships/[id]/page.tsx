import { Button } from "@/components/ui/button";
import { getInternshipById } from "@/services/InternshipService";
import { Mail } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import React from "react";

interface ItemDetailProps {
  params: {
    id: string;
  };
}

const InternshipDetails = async ({ params: { id } }: ItemDetailProps) => {
  const { data: internship } = await getInternshipById(id);
  const { data: session } = useSession();

  console.log("Session:", session);
  console.log("Session image:", session?.user?.image);

  const onSubmit = (data) => {
    const postData = {
      userEmail: session?.user?.email,
      internshipId: internship.id,
    };

    formData.append("data", JSON.stringify(postData));
    for (let image of imageFiles) {
      formData.append("itemImages", image);
    }
    handleCreateItem(formData);
  };

  return (
    <div className="pt-6">
      <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid  lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        {/* Internship info */}
        <div className="col-span-1 text-left sm:-order-1">
          <div className="flex items-center">
            <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
              <Image
                width={500}
                height={500}
                src={internship.companyLogoUrl}
                alt={internship?.companyName}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="col-span-11 flex flex-col pr-8 text-left pl-4">
              <h3 className="text-sm opacity-50">{internship.companyName}</h3>
              <h2 className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
                {internship.internshipTitle}
              </h2>
            </div>
          </div>

          <div className="py-10 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h2 className="mb-3 overflow-hidden pr-7 text-md font-semibold">
                Description
              </h2>
              <div className="space-y-6">
                <p className="text-base opacity-75">
                  {internship.internshipDescription}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-sm font-medium ">Notes</h2>

              <div className="mt-2 space-y-6">
                <p className="text-sm opacity-75">{internship.notes}</p>
              </div>
            </div>

            <div className="mt-4 lg:row-span-3">
              <h2>Salary</h2>
              <p className="text-3xl tracking-tight ">
                {internship.salaryRange}
              </p>
            </div>

            <div className="mt-4">
              <h2>Location</h2>
              <p className="text-xl tracking-tight">{internship.location}</p>
            </div>

            <div className="mt-2 flex items-center gap-x-2">
              <Mail size={20} />
              <p className="text-sm/10 font-medium">
                {internship.contactInformation}
              </p>
            </div>
            <Button className="w-full mt-6">Apply Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
