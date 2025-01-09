import React from "react";
import Image from "next/image";
import { cny_image, jing_image, sk_image } from "@/assets/assets";

const people = [
  {
    id: 1,
    name: "Cheah Pui Yan",
    role: "Project Manager / Backend Developer",
    imageUrl: cny_image,
  },

  {
    id: 2,
    name: "Saiket Das",
    role: "Full-Stack Developer",
    imageUrl: sk_image,
  },
  {
    id: 3,
    name: "Kuan Nim joe",
    role: "Backend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Chia Jia Jing",
    role: "Backend Developer",
    imageUrl: jing_image,
  },
  {
    id: 5,
    name: "Saufi Husna binti Mohd Yusri",
    role: "Backend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // More people...
];

const TeamMembers = () => {
  return (
    <section className="py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-manrope text-5xl text-center font-bold">
            Our team
          </h2>
        </div>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          {people.map((person) => (
            <div
              className="block group md:col-span-2 lg:col-span-1 "
              key={person.id}
            >
              <div className="relative mb-6">
                <Image
                  width={64}
                  height={64}
                  src={person.imageUrl}
                  alt="Antonio image"
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border-2 border-solid border-transparent group-hover:border-indigo-500"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-500">
                {person.name}
              </h4>
              <span className="text-gray-700 dark:text-gray-400 text-center block transition-all duration-500 group-hover:text-gray-900 dark:group-hover:group-hover:text-gray-200">
                {person.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
