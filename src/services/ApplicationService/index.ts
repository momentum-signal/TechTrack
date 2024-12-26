"use server";

import axiosInstance from "@/lib/AxiosInstance";
import {
  ApiResponse,
  CreateResponse,
  DeleteResponse,
  GetResponse,
} from "@/types";
import { GetApplicationResponseProps } from "@/types/application.types";

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

// Create new application
export const createApplication = async (
  data: FieldValues
): Promise<CreateResponse> => {
  try {
    const { data: response } = await axiosInstance.post("/applications", data);
    revalidateTag("applications");
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
export const getApplicationsByEmail = async (
  email: string
): Promise<GetResponse<GetApplicationResponseProps[]>> => {
  try {
    const { data } = await axiosInstance.get<
      ApiResponse<GetApplicationResponseProps[]>
    >(`/applications/${email}`);
    if (data.success) {
      return data; // Return the entire response object
    } else {
      // Handle unexpected responses that are not errors but indicate failure
      throw new Error(data.message || "Failed to retrieve applications.");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
