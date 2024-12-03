"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { routes } from "@/lib/routes";

const Hero = () => {
  return (
    <section>
      <div className="relative isolate px-3 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-10 sm:py-24 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm">
              Empowering Tomorrow&apos;s Professionals, Today.{" "}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tightsm:text-7xl">
              Kickstart Your Career with the Perfect Internship
            </h1>
            <p className="mt-8 text-pretty text-lg font-mediumsm:text-xl/8">
              Find internships that match your skills and passion, and gain
              hands-on experience to shape your future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button>
                <Link
                  href={routes.LOGIN}
                  className="rounded-md px-3.5 py-2.5 text-sm font-semiboldshadow-sm"
                >
                  Get started
                </Link>
              </Button>
              <Link
                href={routes.INTERNSHIPS}
                className="text-sm/6 font-semibold"
              >
                Find internships <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
