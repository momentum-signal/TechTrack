"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const createApplication = async (data: FieldValues): Promise<any> => {
  try {
    const { data: response } = await axiosInstance.post("/applications", data);
    revalidateTag("applications");
    return response;
    /* eslint-disable @typescript-eslint/no-unused-vars */
  } catch (error) {
    throw new Error("Failed to create application");
  }
};
