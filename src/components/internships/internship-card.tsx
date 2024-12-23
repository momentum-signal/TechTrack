import { routes } from "@/lib/routes";
import { InternshipProps } from "@/types/internship.types";
import { Mail } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

interface InternshipCardProps {
  data: InternshipProps;
}
const InternshipCard = ({ data }: InternshipCardProps) => {
  return (
    <Link href={routes.INTERNSHIP(data.id)}>
      <div>
        <div className="group mx-2 mt-5 grid  max-w-full grid-cols-12 space-x-8 overflow-hidden rounded-xl border py-8 shadow-sm transition hover:shadow-md sm:mx-auto">
          <div className="order-2 col-span-1 -ml-14 text-left sm:-order-1 sm:ml-4">
            <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
              <Image
                width={500}
                height={500}
                src={data.companyLogoUrl}
                alt=""
                className="h-full w-full object-cover text-gray-700"
              />
            </div>
          </div>
          <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
            <h3 className="text-sm opacity-50">{data.companyName}</h3>
            <h2 className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
              {data.internshipTitle}
            </h2>
            <p className="overflow-hidden pr-7 text-sm">
              {data.internshipDescription}
            </p>

            <div className="mt-3 flex flex-col space-y-3 text-sm font-medium sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <p>
                Salary:
                <span className="ml-2 mr-3 rounded-full text-gray-900 bg-blue-100 px-2 py-0.5">
                  {data.salaryRange} MYR
                </span>
              </p>
            </div>

            <div className="relative mt-1 flex items-center gap-x-2">
              <Mail size={20} />
              <p className="text-sm/10 font-medium">
                {data.contactInformation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InternshipCard;
