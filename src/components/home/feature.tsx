import { Cloud, Fingerprint, Lock, Server } from "lucide-react";
import React from "react";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque.",
    icon: Cloud,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: Lock,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: Server,
  },
  {
    name: "Advanced security",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis.",
    icon: Fingerprint,
  },
];

const Feature = () => {
  return (
    <section className="pt-20 sm:pt-32">
      {/* Add padding-top to offset sticky navbar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base/7 font-semibold text-indigo-600">
            Deploy faster
          </h2> */}
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-primary sm:text-5xl lg:text-balance">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none md:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900 dark:text-primary">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Feature;
