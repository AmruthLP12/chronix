import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-[#0B0F19]">
      <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 10, paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {/* SUBTLE HUB HEADER */}
        <View className="mb-5 pb-4 border-b border-slate-200 dark:border-slate-800/40">
          <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
            Personal Helper Workspace
          </Text>
        </View>

        {/* ACTIVE UTILITIES */}
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            Active Utilities
          </Text>
          <View className="bg-blue-50 dark:bg-blue-950/20 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/30">
            <Text className="text-[10px] font-bold text-blue-600 dark:text-blue-400">2 Active</Text>
          </View>
        </View>

        {/* AGE CALCULATOR CARD */}
        <TouchableOpacity
          className="bg-white dark:bg-[#161E2E] rounded-2xl p-5 mb-4 border border-slate-150 dark:border-slate-800/40 shadow-sm dark:shadow-none"
          onPress={() => router.push("/age")}
          activeOpacity={0.8}
        >
          <View className="flex-row justify-between items-center mb-3">
            <View className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800/50 justify-center items-center border border-slate-200/50 dark:border-slate-700/50">
              <FontAwesome name="calendar" size={18} className="text-blue-500 dark:text-blue-400" />
            </View>
            <View className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </View>
          <View className="mb-4">
            <Text className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">Age Calculator</Text>
            <Text className="text-xs text-slate-500 dark:text-slate-400 leading-5">
              Precision time interval calculation. Compute years, months, weeks, and total days elapsed between two selected dates.
            </Text>
          </View>
          <View className="flex-row items-center justify-end">
            <Text className="text-xs font-semibold text-blue-600 dark:text-blue-400 mr-1">Open Utility</Text>
            <FontAwesome name="chevron-right" size={10} className="text-blue-500 dark:text-blue-400" />
          </View>
        </TouchableOpacity>

        {/* TIME CONVERTER CARD */}
        <TouchableOpacity
          className="bg-white dark:bg-[#161E2E] rounded-2xl p-5 mb-4 border border-slate-150 dark:border-slate-800/40 shadow-sm dark:shadow-none"
          onPress={() => router.push("/time")}
          activeOpacity={0.8}
        >
          <View className="flex-row justify-between items-center mb-3">
            <View className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800/50 justify-center items-center border border-slate-200/50 dark:border-slate-700/50">
              <FontAwesome name="clock-o" size={18} className="text-blue-500 dark:text-blue-400" />
            </View>
            <View className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </View>
          <View className="mb-4">
            <Text className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">Time Converter</Text>
            <Text className="text-xs text-slate-500 dark:text-slate-400 leading-5">
              Standard to military format conversion. Seamlessly shift formats between 12-hour AM/PM cycles and 24-hour logs.
            </Text>
          </View>
          <View className="flex-row items-center justify-end">
            <Text className="text-xs font-semibold text-blue-600 dark:text-blue-400 mr-1">Open Utility</Text>
            <FontAwesome name="chevron-right" size={10} className="text-blue-500 dark:text-blue-400" />
          </View>
        </TouchableOpacity>

        {/* SERVICE CALCULATOR CARD */}
        <TouchableOpacity
          className="bg-white dark:bg-[#161E2E] rounded-2xl p-5 mb-4 border border-slate-150 dark:border-slate-800/40 shadow-sm dark:shadow-none"
          onPress={() => router.push("/service")}
          activeOpacity={0.8}
        >
          <View className="flex-row justify-between items-center mb-3">
            <View className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800/50 justify-center items-center border border-slate-200/50 dark:border-slate-700/50">
              <FontAwesome name="calendar" size={18} className="text-blue-500 dark:text-blue-400" />
            </View>
            <View className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          </View>
          <View className="mb-4">
            <Text className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">Service Calculator</Text>
            <Text className="text-xs text-slate-500 dark:text-slate-400 leading-5">
              Precision time interval calculation. Compute years, months, weeks, and total days elapsed between two selected dates.
            </Text>
          </View>
          <View className="flex-row items-center justify-end">
            <Text className="text-xs font-semibold text-blue-600 dark:text-blue-400 mr-1">Open Utility</Text>
            <FontAwesome name="chevron-right" size={10} className="text-blue-500 dark:text-blue-400" />
          </View>
        </TouchableOpacity>

        {/* PIPELINE SECTION */}
        <View className="flex-row justify-between items-center mb-4 mt-3">
          <Text className="text-xs font-bold text-slate-400 dark:text-slate-500 tracking-widest uppercase">
            Pipeline Modules
          </Text>
          <View className="bg-slate-100 dark:bg-slate-800/30 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800/40">
            <Text className="text-[10px] font-bold text-slate-500 dark:text-slate-400">Future Growth</Text>
          </View>
        </View>

        {/* UPCOMING UTILITY 1 */}
        <View className="bg-slate-50/50 dark:bg-[#161E2E]/30 rounded-2xl p-5 mb-4 border border-slate-200/40 dark:border-slate-850/10 opacity-70" pointerEvents="none">
          <View className="flex-row justify-between items-center mb-3">
            <View className="w-9 h-9 rounded-lg bg-slate-100/50 dark:bg-slate-800/20 justify-center items-center">
              <FontAwesome name="globe" size={16} className="text-slate-400 dark:text-slate-600" />
            </View>
            <View className="bg-slate-100 dark:bg-slate-800/40 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700/30">
              <Text className="text-[8px] font-bold text-slate-400 dark:text-slate-500 tracking-wider">COMING SOON</Text>
            </View>
          </View>
          <View className="mb-2">
            <Text className="text-base font-semibold text-slate-400 dark:text-slate-600 mb-1">Timezone Sync</Text>
            <Text className="text-xs text-slate-400 dark:text-slate-700 leading-4.5">
              Track relative offsets, clock conversions, and coordinates across international cities concurrently.
            </Text>
          </View>
        </View>

        {/* UPCOMING UTILITY 2 */}
        <View className="bg-slate-50/50 dark:bg-[#161E2E]/30 rounded-2xl p-5 mb-4 border border-slate-200/40 dark:border-slate-850/10 opacity-70" pointerEvents="none">
          <View className="flex-row justify-between items-center mb-3">
            <View className="w-9 h-9 rounded-lg bg-slate-100/50 dark:bg-slate-800/20 justify-center items-center">
              <FontAwesome name="bell-o" size={16} className="text-slate-400 dark:text-slate-600" />
            </View>
            <View className="bg-slate-100 dark:bg-slate-800/40 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700/30">
              <Text className="text-[8px] font-bold text-slate-400 dark:text-slate-500 tracking-wider">COMING SOON</Text>
            </View>
          </View>
          <View className="mb-2">
            <Text className="text-base font-semibold text-slate-400 dark:text-slate-600 mb-1">Chrono Countdown</Text>
            <Text className="text-xs text-slate-400 dark:text-slate-700 leading-4.5">
              Visual stopwatches, precision loop interval timers, and custom helper alarms.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
