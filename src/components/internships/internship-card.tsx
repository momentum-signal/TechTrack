import Image from "next/image";
import Link from "next/link";
import React from "react";

const InternshipCard = () => {
  return (
    <Link href={"/"}>
      <div>
        <div className="group mx-2 mt-5 grid  max-w-full grid-cols-12 space-x-8 overflow-hidden rounded-xl border py-8 shadow-sm transition hover:shadow-md sm:mx-auto">
          <div className="order-2 col-span-1 -ml-14 text-left sm:-order-1 sm:ml-4">
            <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
              <Image
                width={500}
                height={500}
                src="https://images.unsplash.com/photo-1663124178667-28b3776d7c15?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-full w-full object-cover text-gray-700"
              />
            </div>
          </div>
          <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
            <h3 className="text-sm">Invision</h3>
            <h2 className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
              Sr. Frontend Engineer
            </h2>
            <p className="overflow-hidden pr-7 text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna .
            </p>

            <div className="mt-3 flex flex-col space-y-3 text-sm font-medium sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <div>
                Experience:
                <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5">
                  2 Years
                </span>
              </div>
              <div className="">
                Salary:
                <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                  180-250k
                </span>
              </div>
            </div>

            <div className="relative mt-3 flex items-center gap-x-4">
              <Image
                width={500}
                height={500}
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
                className="size-10 rounded-full bg-gray-50"
              />
              <div className="text-sm/6">
                <p className="font-semibold">Michael Foster</p>
                <p className="text-primary">Co-Founder / CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InternshipCard;
