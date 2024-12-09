import { DataTable } from "@/components/dashbaord/applications/data-table";
import React from "react";

import { applicationSchema } from "@/lib/schemas/application.schema";
import { z } from "zod";
import { columns } from "@/components/dashbaord/applications/columns";

// Simulate a database read for applications.
async function getapplications() {
  // const response = await fetch("/applications.json");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/applications.json`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const applications = await response.json(); // Parse response as JSON

  return z.array(applicationSchema).parse(applications);
}

const Applications = async () => {
  const applications = await getapplications();
  const data = 1;

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-lg font-semibold md:text-2xl">Applications</h1>

      {/* Application Table  */}
      <div className="p-2 md:p-6 rounded-lg border border-dashed shadow-sm">
        {data ? (
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
