import { Text, View } from "react-native";

interface SectionHeaderProps {
  title: string;
  badge?: string;
  badgeColor?: string;
}

export default function SectionHeader({ title, badge }: SectionHeaderProps) {
  return (
    <View className="flex-row justify-between items-center mb-4">
      <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
        {title}
      </Text>

      {badge && (
        <View className="bg-slate-100 dark:bg-slate-800/30 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800/40">
          <Text className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
            {badge}
          </Text>
        </View>
      )}
    </View>
  );
}
