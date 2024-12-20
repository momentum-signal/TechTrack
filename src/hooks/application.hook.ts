import { postApplication } from "@/services/ApplicationService";
import {} from "@/services/InternshipService";
import { useQuery } from "@tanstack/react-query";

// Get all internships
export const usePostApplication = () => {
  return useQuery({
    queryKey: ["POST_APPLICATION"],
    queryFn: async () => await postApplication(),
  });
};
