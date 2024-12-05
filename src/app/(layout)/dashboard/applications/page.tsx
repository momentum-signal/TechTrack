import { DataTable } from "@/components/dashbaord/applications/data-table";
import React from "react";

import { applicationSchema } from "@/lib/schemas/application.schema";
import { z } from "zod";
import { columns } from "@/components/dashbaord/applications/columns";

// Simulate a database read for tasks.
async function getTasks() {
  // const response = await fetch("/applications.json");
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/applications.json`);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }

  const tasks = await response.json(); // Parse response as JSON

  return z.array(applicationSchema).parse(tasks);
}

const Applications = async () => {
  const tasks = await getTasks();

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <h1 className="text-lg font-semibold md:text-2xl">Applications</h1>

      {/* Application Table  */}
      <div className="hidden h-full flex-1 flex-col space-y-8 p-0 md:flex">
        <DataTable data={tasks} columns={columns} />
      </div>
    </main>
  );
};

export default Applications;
