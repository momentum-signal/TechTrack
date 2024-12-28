import React from "react";
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Leslie Alexander",
    role: "Leader",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },

  {
    id: 2,
    name: "Leslie Alexander",
    role: "Full-Stack Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1522071740424-8b337d0dfa93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Leslie Alexander",
    role: "Backend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    role: "Backend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 5,
    name: "Leslie Alexander",
    role: "Backend Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
