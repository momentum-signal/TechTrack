"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

// Create new application
export const createApplication = async (data: FieldValues): Promise<any> => {
  try {
    const { data: response } = await axiosInstance.post("/applications", data);
    revalidateTag("applications");
    return response;
  } catch (error) {
    throw new Error("Failed to create application");
  }
};

export const getApplicationsByEmail = async (email: string) => {
  try {
    const { data } = await axiosInstance.get(`/applications/${email}`);

    return data;
  } catch (error: any) {
    throw new Error("Failed to fetched application");
  }
};
