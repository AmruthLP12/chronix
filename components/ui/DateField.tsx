import { FontAwesome } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface DateFieldProps {
  label: string;
  date: Date;
  onPress: () => void;
  icon?: keyof typeof FontAwesome.glyphMap;
}

export default function DateField({
  label,
  date,
  onPress,
  icon = "calendar",
}: DateFieldProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="bg-slate-50 dark:bg-[#0B0F19] flex-row items-center justify-between p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 mb-3"
    >
      <View className="flex-row items-center">
        <FontAwesome name={icon} size={14} color="#3b82f6" />

        <View className="ml-3">
          <Text className="text-[9px] text-slate-400 font-bold uppercase">
            {label}
          </Text>

          <Text
            numberOfLines={1}
            className="text-sm text-slate-800 dark:text-slate-200 font-semibold mt-0.5"
          >
            {date.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Text>
        </View>
      </View>

      <FontAwesome name="chevron-down" size={10} color="#94a3b8" />
    </TouchableOpacity>
  );
}
