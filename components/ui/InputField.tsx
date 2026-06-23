import { Text, TextInput, TextInputProps, View } from "react-native";

interface InputFieldProps extends TextInputProps {
  label: string;
}

export default function InputField({ label, ...props }: InputFieldProps) {
  return (
    <View className="mb-3">
      <Text className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">
        {label}
      </Text>

      <TextInput
        {...props}
        placeholderTextColor="#94A3B8"
        className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white font-medium"
      />
    </View>
  );
}
