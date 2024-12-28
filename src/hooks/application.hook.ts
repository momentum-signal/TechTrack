import {
  createApplication,
  deleteApplication,
  getApplicationsByEmail,
} from "@/services/ApplicationService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "./use-toast";
import { FieldValues } from "react-hook-form";

// Create new application
export const useCreateApplication = () => {
  return useMutation<FieldValues, Error, FieldValues>({
    mutationKey: ["applications"],
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
        variant: "destructive",
      });
    },
  });
};

// Get all applications by Email
export const useGetApplicationsByEmail = (userEmail: string) => {
  return useQuery({
    queryKey: ["applications"],
    queryFn: async () => await getApplicationsByEmail(userEmail),
  });
};

// Delete an application by ID
export const useDeleteApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["applications"],
      });
      toast({
        title: "Application Deleted",
        description: "The application has been successfully deleted.",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to delete application",
        description: error.message,
        variant: "destructive",
      });
    },
  });
};
