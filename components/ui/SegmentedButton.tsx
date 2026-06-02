import { Text, TouchableOpacity } from "react-native";

interface SegmentedButtonProps {
  title: string;
  active: boolean;
  onPress: () => void;
}

export default function SegmentedButton({
  title,
  active,
  onPress,
}: SegmentedButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`flex-1 py-3 rounded-xl items-center border ${
        active
          ? "border-blue-400 bg-blue-50 dark:bg-blue-950/20"
          : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0B0F19]"
      }`}
    >
      <Text
        className={`font-semibold ${
          active ? "text-blue-600 dark:text-blue-400" : "text-slate-500"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
