import { Text, View } from "react-native";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <View className="items-center mb-5 mt-2">
      <Text className="text-xl font-bold text-slate-900 dark:text-white">
        {title}
      </Text>

      {subtitle && (
        <Text className="text-xs text-slate-500 mt-1 text-center">
          {subtitle}
        </Text>
      )}
    </View>
  );
}
