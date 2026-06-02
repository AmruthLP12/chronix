import { View } from "react-native";

interface AppCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AppCard({ children, className = "" }: AppCardProps) {
  return (
    <View
      className={`bg-white dark:bg-[#161E2E] p-5 rounded-2xl border border-slate-200 dark:border-slate-800/40 shadow-sm ${className}`}
    >
      {children}
    </View>
  );
}
