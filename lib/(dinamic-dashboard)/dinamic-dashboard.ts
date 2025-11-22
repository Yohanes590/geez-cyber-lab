import {
  LayoutGridIcon,
  NotepadText,
  Users2Icon,
  Settings,
  Timer,
  WalletIcon,
  LucideStickyNote,
} from "lucide-react";
export const dashboardFeatures = [
  {
    title: "Dashboard",
    icon: LayoutGridIcon,
    user_role: ["student", "teacher", "parent"],
    href: "",
  },
  {
    title: "Assignments",
    icon: NotepadText,
    user_role: ["student", "teacher"],
    href: "/assignments",
  },
  {
    title: "Student Lists",
    icon: Users2Icon,
    user_role: ["teacher"],
    href: "/student-list",
  },
  {
    title: "Results",
    icon: Timer,
    user_role: ["student"],
    href: "/results",
  },
  {
    title: "Courses",
    icon: LucideStickyNote,
    user_role: ["student"],
    href: "/courses",
  },
  {
    title: "Profile Settings",
    icon: Settings,
    user_role: ["student", "teacher", "parent"],
    href: "/profile",
  },
  {
    title: "Payment",
    icon: WalletIcon,
    user_role: ["parent"],
    href: "/payment",
  },
];
