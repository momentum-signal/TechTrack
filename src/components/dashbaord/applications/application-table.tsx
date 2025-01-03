"use client";

import * as React from "react";

import { TransformedApplicationProps } from "@/types/application.types";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ApplicationTableBody from "@/components/dashbaord/applications/application-table-body";

interface ApplicationTableProps {
  applications: TransformedApplicationProps[];
}

export function ApplicationTable({ applications }: ApplicationTableProps) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="font-normal w-1/4">Company Name</TableHead>
            <TableHead className="font-normal w-1/4">
              <div className="flex items-center gap-2">Internship Role</div>
            </TableHead>
            <TableHead className="font-normal w-1/6">
              <div className="flex items-center gap-2">Application Status</div>
            </TableHead>
            <TableHead className="font-normal w-1/5">
              <div className="flex items-center gap-2">Salary Range (MYR)</div>
            </TableHead>
            <TableHead className="font-normal w-1/5"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <ApplicationTableBody
              key={application.id}
              application={application}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
