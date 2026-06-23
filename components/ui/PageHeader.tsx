import { Text, View } from "react-native";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <View className="items-center mb-5 mt-2">
      <Text className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
        {title}
      </Text>

      {subtitle && (
        <Text className="text-xs text-slate-505 dark:text-slate-400 mt-1 text-center">
          {subtitle}
        </Text>
      )}
    </View>
  );
}
