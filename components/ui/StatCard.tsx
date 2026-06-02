import { Text, View } from "react-native";

interface StatCardProps {
  value: string | number;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <View className="flex-1 bg-white dark:bg-[#161E2E] rounded-xl py-4 items-center border border-slate-200 dark:border-slate-800">
      <Text className="text-2xl font-bold text-slate-800 dark:text-white">
        {value}
      </Text>

      <Text className="text-[9px] font-semibold text-slate-400 uppercase mt-1">
        {label}
      </Text>
    </View>
  );
}
