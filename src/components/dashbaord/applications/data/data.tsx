import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  CircleOff,
  Loader,
  Star,
  User,
} from "lucide-react";
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

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
    color: "text-green-500", // Low priority color
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
    color: "text-yellow-500", // Medium priority color
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
    color: "text-red-500", // High priority color
  },
];
