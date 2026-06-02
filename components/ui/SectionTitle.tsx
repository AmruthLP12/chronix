import { Text } from "react-native";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <Text className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mb-2.5">
      {title}
    </Text>
  );
}
