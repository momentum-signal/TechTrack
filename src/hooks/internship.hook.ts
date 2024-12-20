import {
  getInternshipById,
  getInternships,
} from "@/services/InternshipService";
import { useQuery } from "@tanstack/react-query";

// Get all internships
export const useGetInternships = () => {
  return useQuery({
    queryKey: ["GET_INTERNSHIPS"],
    queryFn: async () => await getInternships(),
  });
};

export const useGetInternshipById = (internshipId: string) => {
  return useQuery({
    queryKey: ["GET_INTERNSHIP_BY_ID"],
    queryFn: async () => await getInternshipById(internshipId),
  });
};
