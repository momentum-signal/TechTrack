"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { getApplicationsByEmail } from "@/services/ApplicationService";
import { transformApplications } from "@/lib/utils";
import Loading from "@/app/loading";
import { TransformedApplicationProps } from "@/types/application.types";
import { ApplicationTable } from "@/components/dashbaord/applications/application-table";

const ApplicationsPage = () => {
  const { data: session, status } = useSession();
  const [applications, setApplications] = useState<
    TransformedApplicationProps[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async (email: string) => {
      try {
        const { data: applications } = await getApplicationsByEmail(email);
        if (!applications) {
          throw new Error("No applications found for the given email.");
        }
        const transformedApplications = transformApplications(applications);
        setApplications(transformedApplications);
      } catch (error) {
        console.error("Error fetching applications:", error);
      } finally {
        setLoading(false);
      }
    };

    if (
      status === "authenticated" &&
      typeof session?.user?.email === "string"
    ) {
      fetchApplications(session.user.email);
    } else if (status === "unauthenticated") {
      setLoading(false); // Handle unauthenticated state if necessary
    }
  }, [status, session]);

  if (loading) {
    return <Loading />;
  }

  if (applications.length === 0) {
    return (
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
        <h1 className="text-lg font-semibold md:text-2xl">Applications</h1>

        {/* No application  */}
        <div className="p-2 md:p-6 rounded-lg border border-dashed shadow-sm">
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no application
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start appling as soon as company post jobs.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-lg font-semibold md:text-2xl">Applications</h1>

      {/* Application Table  */}
      <div className="p-2 md:p-6 rounded-lg border border-dashed shadow-sm">
        <div className="hidden h-full flex-1 flex-col space-y-8 p-0 md:flex">
          {/* <DataTable data={applications} columns={columns} /> */}
          <ApplicationTable applications={applications} />
        </div>
      </div>
    </main>
  );
};

export default ApplicationsPage;
