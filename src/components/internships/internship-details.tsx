"use client";

import React from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { InternshipProps } from "@/types/internship.types";
import { signIn, useSession } from "next-auth/react";
import Loading from "@/app/loading";
import { toast } from "@/hooks/use-toast";
import { useCreateApplication } from "@/hooks/application.hook";

const InternshipDetails = ({ internship }: { internship: InternshipProps }) => {
  const {
    id,
    companyName,
    companyLogoUrl,
    internshipTitle,
    internshipDescription,
    salaryRange,
    location,
    notes,
    contactInformation,
  } = internship || {};
  const { data: session, status } = useSession();
  const { mutate: handleCreateApplication } = useCreateApplication();

  if (status === "loading") {
    return <Loading />;
  }

  const handleApply = () => {
    if (status == "unauthenticated") {
      signIn(undefined, { callbackUrl: window.location.href });
      return null;
    }
    const applicationData = {
      internshipId: id,
      userEmail: session?.user?.email,
    };
    // toast({
    //   title: `${applicationData.internshipId}`,
    //   description: `${applicationData.userEmail}`,
    // });
    console.log(applicationData);
    handleCreateApplication(applicationData);
  };

  return (
    <div>
      {/* Internship info */}
      <div className="col-span-1 text-left sm:-order-1">
        <div className="flex items-center">
          <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
            <Image
              width={500}
              height={500}
              src={companyLogoUrl}
              alt={companyName}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="col-span-11 flex flex-col pr-8 text-left pl-4">
            <h3 className="text-sm opacity-50">{companyName}</h3>
            <h2 className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
              {internshipTitle}
            </h2>
          </div>
        </div>

        <div className="py-10 lg:pb-16 lg:pr-8 lg:pt-6">
          <div>
            <h2 className="mb-3 overflow-hidden pr-7 text-md font-semibold">
              Description
            </h2>
            <div className="space-y-6">
              <p className="text-base opacity-75">{internshipDescription}</p>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-sm font-medium ">Notes</h2>

            <div className="mt-2 space-y-6">
              <p className="text-sm opacity-75">{notes}</p>
            </div>
          </div>

          <div className="mt-4 lg:row-span-3">
            <h2>Salary</h2>
            <p className="text-3xl tracking-tight ">{salaryRange} MYR</p>
          </div>

          <div className="mt-4">
            <h2>Location</h2>
            <p className="text-xl tracking-tight">{location}</p>
          </div>

          <div className="mt-2 flex items-center gap-x-2">
            <Mail size={20} />
            <p className="text-sm/10 font-medium">{contactInformation}</p>
          </div>
          <Button className="w-full mt-6" onClick={handleApply}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InternshipDetails;
