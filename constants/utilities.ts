export type UtilityCategory =
  | "Calculators"
  | "Date & Time"
  | "Finance"
  | "Communication";

export type Utility = {
  title: string;
  route?: string;
  icon: string;
  description: string;
  category: UtilityCategory;
};

export const ACTIVE_UTILITIES: Utility[] = [
  {
    title: "Age Calculator",
    route: "/age",
    icon: "calendar",
    category: "Calculators",
    description:
      "Precision time interval calculation. Compute years, months, weeks, and total days elapsed between two selected dates.",
  },

  {
    title: "Time Converter",
    route: "/time",
    icon: "clock-o",
    category: "Date & Time",
    description:
      "Standard to military format conversion. Seamlessly shift formats between 12-hour AM/PM cycles and 24-hour logs.",
  },

  {
    title: "Service Calculator",
    route: "/service",
    icon: "calendar",
    category: "Calculators",
    description:
      "Calculate overall service duration and remaining tenure till retirement.",
  },

  {
    title: "Salary Leave Calculator",
    route: "/leave_salary",
    icon: "money",
    category: "Finance",
    description:
      "Calculate leave salary. Supports basic pay, DA, and EL/HPL balances.",
  },

  {
    title: "WhatsApp",
    route: "/whatsapp",
    icon: "whatsapp",
    category: "Communication",
    description:
      "Enter a phone number and open the corresponding WhatsApp chat directly.",
  },
];

export const UPCOMING_UTILITIES: Utility[] = [
  {
    title: "Timezone Sync",
    icon: "globe",
    category: "Date & Time",
    description:
      "Track relative offsets, clock conversions, and coordinates across international cities concurrently.",
  },

  {
    title: "Chrono Countdown",
    icon: "bell-o",
    category: "Date & Time",
    description:
      "Visual stopwatches, precision loop interval timers, and custom helper alarms.",
  },
];
