import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

interface UtilityCardProps {
  title: string;
  description: string;
  icon: keyof typeof FontAwesome.glyphMap;
  route?: string;
  active?: boolean;
  comingSoon?: boolean;
}

export default function UtilityCard({
  title,
  description,
  icon,
  route,
  active = true,
  comingSoon = false,
}: UtilityCardProps) {
  const Wrapper = active ? TouchableOpacity : View;

  return (
    <Wrapper
      {...(active && route
        ? {
            onPress: () => router.push(route as any),
            activeOpacity: 0.8,
          }
        : {})}
      className={`rounded-2xl p-5 mb-4 border ${
        active
          ? "bg-white dark:bg-[#161E2E] border-slate-150 dark:border-slate-800/40"
          : "bg-slate-50/50 dark:bg-[#161E2E]/30 border-slate-200/40 dark:border-slate-850/10 opacity-70"
      }`}
    >
      <View className="flex-row justify-between items-center mb-3">
        <View
          className={`w-9 h-9 rounded-lg justify-center items-center ${
            active
              ? "bg-slate-100 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50"
              : "bg-slate-100/50 dark:bg-slate-800/20"
          }`}
        >
          <FontAwesome
            name={icon}
            size={16}
            color={active ? "#3b82f6" : "#94a3b8"}
          />
        </View>

        {active ? (
          <View className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        ) : (
          <View className="bg-slate-100 dark:bg-slate-800/40 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700/30">
            <Text className="text-[8px] font-bold text-slate-400 tracking-wider">
              COMING SOON
            </Text>
          </View>
        )}
      </View>

      <View className="mb-4">
        <Text className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
          {title}
        </Text>

        <Text className="text-xs text-slate-500 dark:text-slate-400 leading-5">
          {description}
        </Text>
      </View>

      {active && (
        <View className="flex-row items-center justify-end">
          <Text className="text-xs font-semibold text-blue-600 dark:text-blue-400 mr-1">
            Open Utility
          </Text>

          <FontAwesome name="chevron-right" size={10} color="#3b82f6" />
        </View>
      )}
    </Wrapper>
  );
}
