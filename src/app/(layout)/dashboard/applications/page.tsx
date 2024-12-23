"use client";

import { DataTable } from "@/components/dashbaord/applications/data-table";
import React, { useEffect, useState } from "react";

import { columns } from "@/components/dashbaord/applications/columns";
import { getApplicationsByEmail } from "@/services/ApplicationService";
import { transformApplications } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Loading from "@/app/loading";
import { TransformedApplicationProps } from "@/types/application.types";

const Applications = () => {
  // const { data: applications } = await getApplicationsByEmail(
  //   "isaiketdas@gmail.com"
  // );

  const { data: session, status } = useSession();
  const [applications, setApplications] = useState<
    TransformedApplicationProps[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async (email: string) => {
      try {
        const { data: appls } = await getApplicationsByEmail(email);
        const transformedApplications = transformApplications(appls);
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

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-lg font-semibold md:text-2xl">Applications</h1>

      {/* Application Table  */}
      <div className="p-2 md:p-6 rounded-lg border border-dashed shadow-sm">
        {applications.length > 0 ? (
          <div className="hidden h-full flex-1 flex-col space-y-8 p-0 md:flex">
            <DataTable data={applications} columns={columns} />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no application
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start appling as soon as company post jobs.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Applications;
