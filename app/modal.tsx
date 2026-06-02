import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, Platform, Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View className="flex-1 bg-slate-50 dark:bg-[#0B0F19] items-center px-6 pt-10">
      {/* BRAND SECTION */}
      <View className="items-center mb-5">
        <View className="w-20 h-20 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800/40 mb-3 bg-white dark:bg-[#161E2E] justify-center items-center">
          <Image
            source={require("../assets/images/logo.png")}
            className="w-20 h-20"
            resizeMode="cover"
          />
        </View>
        <Text className="text-2xl font-black text-slate-900 dark:text-white tracking-widest">
          CHRONIX
        </Text>
        <Text className="text-[10px] text-slate-400 dark:text-slate-500 font-bold tracking-wider uppercase mt-1">
          Version 1.0.0
        </Text>
      </View>

      <View className="my-5 h-[1px] bg-slate-200 dark:bg-slate-800/40 w-full" />

      {/* DESCRIPTION */}
      <Text className="text-sm text-slate-505 dark:text-slate-400 text-center leading-5 mb-6">
        A premium, high-tech temporal utility workspace providing modern
        calculation and format conversion tools with extreme precision.
      </Text>

      {/* MODULE DIRECTORY */}
      <View className="w-full bg-white dark:bg-[#161E2E] rounded-2xl p-5 border border-slate-200 dark:border-slate-800/40 shadow-sm dark:shadow-none">
        <Text className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-3.5">
          Available Modules
        </Text>

        <View className="flex-row items-start mb-3.5">
          <FontAwesome
            name="check-circle"
            size={16}
            className="text-emerald-500 mr-3 mt-0.5"
          />
          <View className="flex-1">
            <Text className="text-sm font-bold text-slate-850 dark:text-white">
              Age Calculator
            </Text>
            <Text className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-4 pr-4">
              Compute intervals, years, months, and total elapsed days.
            </Text>
          </View>
        </View>

        <View className="flex-row items-start mb-3.5">
          <FontAwesome
            name="check-circle"
            size={16}
            className="text-emerald-500 mr-3 mt-0.5"
          />
          <View className="flex-1">
            <Text className="text-sm font-bold text-slate-850 dark:text-white">
              Time Converter
            </Text>
            <Text className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-4 pr-4">
              Seamless translation between 24-hour military and 12-hour clocks.
            </Text>
          </View>
        </View>

        <View className="flex-row items-start mb-3.5">
          <FontAwesome
            name="check-circle"
            size={16}
            className="text-emerald-500 mr-3 mt-0.5"
          />
          <View className="flex-1">
            <Text className="text-sm font-bold text-slate-850 dark:text-white">
              Service Calculator
            </Text>
            <Text className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-4 pr-4">
              Precision time interval calculation. Compute years, months, weeks,
              and total days elapsed between two selected dates.
            </Text>
          </View>
        </View>

        <Text className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-3.5 mt-3">
          Active Pipeline
        </Text>

        <View className="flex-row items-start mb-1">
          <FontAwesome
            name="lock"
            size={16}
            className="text-slate-400 dark:text-slate-600 mr-3 mt-0.5"
          />
          <View className="flex-1">
            <Text className="text-sm font-bold text-slate-400 dark:text-slate-600">
              Timezone Sync (Soon)
            </Text>
            <Text className="text-xs text-slate-400 dark:text-slate-700 mt-0.5 leading-4 pr-4">
              Multi-locale timezone calculations and tracking.
            </Text>
          </View>
        </View>
      </View>

      {/* CREDITS */}
      <View className="absolute bottom-8">
        <Text className="text-[9px] font-bold text-slate-450 dark:text-slate-600 tracking-widest uppercase">
          Created by AmruthLP12
        </Text>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
