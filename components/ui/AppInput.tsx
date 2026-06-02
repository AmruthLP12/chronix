import { Text, TextInput, View } from "react-native";

interface AppInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  maxLength?: number;
}

export default function AppInput({
  label,
  value,
  onChangeText,
  placeholder,
  maxLength,
}: AppInputProps) {
  return (
    <View className="flex-1">
      <Text className="text-[9px] font-bold text-slate-400 uppercase mb-1.5">
        {label}
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        keyboardType="numeric"
        maxLength={maxLength}
        className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl p-3 text-base text-slate-800 dark:text-white font-semibold text-center"
      />
    </View>
  );
}
