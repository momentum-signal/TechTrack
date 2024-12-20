"use server";

import axiosInstance from "@/lib/AxiosInstance";
import { revalidateTag } from "next/cache";

export const createApplication = async (data): Promise<any> => {
  try {
    const { data } = await axiosInstance.post("/items", data);

    revalidateTag("applications");

    return data;
    /* eslint-disable @typescript-eslint/no-unused-vars */
  } catch (error) {
    throw new Error("Failed to create post");
  }
};
