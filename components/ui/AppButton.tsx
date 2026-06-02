import { Text, TouchableOpacity } from "react-native";

interface AppButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}

export default function AppButton({
  title,
  onPress,
  className = "",
}: AppButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className={`bg-blue-600 rounded-xl py-4 items-center ${className}`}
    >
      <Text className="text-white font-bold text-base">{title}</Text>
    </TouchableOpacity>
  );
}
