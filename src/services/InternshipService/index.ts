"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getInternships = async () => {
  try {
    const { data } = await axiosInstance.get("/internships");

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

// Get single internship details by ID
export const getInternshipById = async (internshipId: string) => {
  try {
    const { data } = await axiosInstance.get(`/internships/${internshipId}`);

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
