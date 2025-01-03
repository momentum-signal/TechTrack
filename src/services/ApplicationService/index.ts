"use server";

import { FieldValues } from "react-hook-form";
import { revalidateTag } from "next/cache";
import axiosInstance from "@/lib/AxiosInstance";
import { CreateResponse, DeleteResponse } from "@/types";

// Create new application
export const createApplication = async (
  data: FieldValues
): Promise<CreateResponse> => {
  try {
    const { data: response } = await axiosInstance.post("/applications", data);
    revalidateTag("applications");
    return response;
  } catch (error: any) {
    if (error.response) {
      const { message } = error.response.data || {};
      throw new Error(message || "Failed to create application");
    } else if (error.request) {
      throw new Error(
        "Unable to connect to the server. Please try again later."
      );
    } else {
      throw new Error(
        "An unexpected error occurred while creating the application."
      );
    }
  }
};

// Get all applications by user email
export const getApplicationsByEmail = async (email: string) => {
  try {
    const { data } = await axiosInstance.get(`/applications/${email}`);
    if (data.success) {
      return data; // Return the entire response object
    } else {
      // Handle unexpected responses that are not errors but indicate failure
      throw new Error(data.message || "Failed to retrieve applications.");
    }
  } catch (error: any) {
    if (error.response) {
      console.error("Error response from backend:", error.response.data);
      throw new Error(
        error.response.data.message || "Failed to retrieve applications."
      );
    } else if (error.request) {
      console.error("No response received:", error.request);
      throw new Error(
        "Unable to connect to the server. Please try again later."
      );
    } else {
      console.error("Error setting up request:", error.message);
      throw new Error(
        "An unexpected error occurred while retrieving applications."
      );
    }
  }
};

// Delete an application by ID
export const deleteApplication = async (
  applicationId: string
): Promise<DeleteResponse> => {
  try {
    const { data } = await axiosInstance.delete(
      `/applications/${applicationId}`
    );
    revalidateTag("applications");
    return data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(
        error.response.data.message || "Failed to delete application."
      );
    } else if (error.request) {
      throw new Error(
        "Unable to connect to the server. Please try again later."
      );
    } else {
      throw new Error("An unexpected error occurred while delete application.");
    }
  }
};
