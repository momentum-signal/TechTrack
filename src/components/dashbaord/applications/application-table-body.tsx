import React from "react";

import { useDeleteApplication } from "@/hooks/application.hook";
import { TransformedApplicationProps } from "@/types/application.types";

import { statuses } from "@/components/dashbaord/applications/data/statuses";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ApplicationTableBodyProps {
  application: TransformedApplicationProps;
}

const ApplicationTableBody = ({ application }: ApplicationTableBodyProps) => {
  const { mutate: deleteApplication } = useDeleteApplication();

  const statusInfo = statuses.find((s) => s.value === application.status);
  const StatusIcon = statusInfo?.icon;

  const handleDeleteApplication = () => {
    deleteApplication(application.id);
  };

  return (
    <TableRow key={application.id} className="">
      <TableCell className="font-medium">{application.companyName}</TableCell>
      <TableCell className="">{application.title}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          {StatusIcon && (
            <StatusIcon className={`h-4 w-4 ${statusInfo?.color}`} />
          )}
          <span className="">{statusInfo?.label || application.status}</span>
        </div>
      </TableCell>
      <TableCell className="">{application.salaryRange}</TableCell>
      <TableCell className="flex justify-center items-center">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                application and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteApplication}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </TableCell>
    </TableRow>
  );
};

export default ApplicationTableBody;
