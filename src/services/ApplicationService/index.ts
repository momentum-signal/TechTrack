"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

// Create new application
export const createApplication = async (data: FieldValues): Promise<any> => {
  try {
    const { data: response } = await axiosInstance.post("/applications", data);
    revalidateTag("GET_APPLICATION_BY_EMAIL");
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create application");
  }
};

export const getApplicationsByEmail = async (email: string) => {
  try {
    const { data } = await axiosInstance.get(`/applications/${email}`);

    return data;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Failed to fetched application");
  }
};

// Delete an application by ID
export const deleteApplication = async (
  applicationId: string
): Promise<any> => {
  try {
    const { data } = await axiosInstance.delete(
      `/applications/${applicationId}`
    );
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete application");
  }
};
