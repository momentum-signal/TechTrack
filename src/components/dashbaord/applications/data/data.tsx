import { CheckCircle, CircleOff, Loader, Star, User } from "lucide-react";
export const statuses = [
  {
    value: "applied",
    label: "Applied",
    icon: CheckCircle,
    color: "text-blue-500", // Applied color
  },
  {
    value: "interview",
    label: "Interview",
    icon: User,
    color: "text-yellow-500", // Interview color
  },
  {
    value: "awaiting",
    label: "Awaiting",
    icon: Loader,
    color: "text-gray-500", // Awaiting color
  },
  {
    value: "selected",
    label: "Selected",
    icon: Star,
    color: "text-green-500", // Selected color
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CircleOff,
    color: "text-red-500", // Canceled color
  },
];
