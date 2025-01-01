"use server";

import axiosInstance from "@/lib/AxiosInstance";

export const getInternships = async () => {
  try {
    const { data } = await axiosInstance.get("/internships");

    return data;
  } catch (error: any) {
    if (error.response) {
      const { message } = error.response.data || {};
      throw new Error(message || "Failed to fetch internships");
    } else if (error.request) {
      throw new Error(
        "Unable to connect to the server. Please try again later."
      );
    } else {
      throw new Error(
        "An unexpected error occurred while fetching the internships."
      );
    }
  }
};

// Get single internship details by ID
export const getInternshipById = async (internshipId: string) => {
  try {
    const { data } = await axiosInstance.get(`/internships/${internshipId}`);

    return data;
  } catch (error: any) {
    if (error.response) {
      const { message } = error.response.data || {};
      throw new Error(message || "Failed to fetch internship");
    } else if (error.request) {
      throw new Error(
        "Unable to connect to the server. Please try again later."
      );
    } else {
      throw new Error(
        "An unexpected error occurred while fetching the internship."
      );
    }
  }
};
