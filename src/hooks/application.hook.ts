import { createApplication } from "@/services/ApplicationService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { FieldValues } from "react-hook-form";

// Create new application
export const useCreateApplication = () => {
  return useMutation<FieldValues, Error, FieldValues>({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (applicationData: FieldValues) =>
      await createApplication(applicationData),
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: `You have successfully applied. Good luck!`,
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to create application",
        description: error.message,
      });
    },
  });
};
