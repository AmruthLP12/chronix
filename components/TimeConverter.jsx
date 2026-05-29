import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TimeConverter() {
  // 24 -> 12
  const [hour24, setHour24] = useState("");
  const [minute24, setMinute24] = useState("");
  const [result12, setResult12] = useState("");

  // 12 -> 24
  const [hour12, setHour12] = useState("");
  const [minute12, setMinute12] = useState("");
  const [period, setPeriod] = useState("AM");
  const [result24, setResult24] = useState("");

  // CONVERT 24 TO 12
  const convert24To12 = () => {
    const hour = parseInt(hour24);
    const minute = minute24 || "00";

    if (isNaN(hour) || hour < 0 || hour > 23) {
      setResult12("Invalid Hour");
      return;
    }

    const ampm = hour >= 12 ? "PM" : "AM";
    const convertedHour = hour % 12 || 12;

    const paddedMinute = minute.padStart(2, "0");
    setResult12(`${convertedHour}:${paddedMinute} ${ampm}`);
  };

  // CONVERT 12 TO 24
  const convert12To24 = () => {
    let hour = parseInt(hour12);
    const minute = minute12 || "00";

    if (isNaN(hour) || hour < 1 || hour > 12) {
      setResult24("Invalid Hour");
      return;
    }

    if (period === "PM" && hour !== 12) {
      hour += 12;
    }

    if (period === "AM" && hour === 12) {
      hour = 0;
    }

    const paddedHour = hour.toString().padStart(2, "0");
    const paddedMinute = minute.padStart(2, "0");
    setResult24(`${paddedHour}:${paddedMinute}`);
  };

  return (
    <View className="px-5 pb-5">
      {/* MINIMAL HEADER */}
      <View className="items-center mb-5 mt-2">
        <Text className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
          Time Converter
        </Text>
        <Text className="text-xs text-slate-505 dark:text-slate-400 mt-1 text-center">
          Format-shift temporal layouts in real-time
        </Text>
      </View>

      {/* 24 TO 12 CARD */}
      <View className="bg-white dark:bg-[#161E2E] p-5 rounded-2xl border border-slate-200 dark:border-slate-800/40 mb-5 shadow-sm dark:shadow-none">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-bold text-slate-900 dark:text-white">24 → 12 Hour</Text>
          <View className="bg-slate-100 dark:bg-slate-800/40 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700/30">
            <Text className="text-[8px] font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              MILITARY TO STANDARD
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between mb-4">
          <View className="w-[48%]">
            <Text className="text-[9px] font-bold text-slate-400 dark:text-slate-505 tracking-wider uppercase mb-1.5">
              Hours (0-23)
            </Text>
            <TextInput
              placeholder="00"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={hour24}
              onChangeText={setHour24}
              maxLength={2}
              className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/50 dark:border-slate-800/30 rounded-xl p-3 text-base text-slate-800 dark:text-white font-semibold text-center"
            />
          </View>

          <View className="w-[48%]">
            <Text className="text-[9px] font-bold text-slate-400 dark:text-slate-505 tracking-wider uppercase mb-1.5">
              Minutes (0-59)
            </Text>
            <TextInput
              placeholder="00"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={minute24}
              onChangeText={setMinute24}
              maxLength={2}
              className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/50 dark:border-slate-800/30 rounded-xl p-3 text-base text-slate-800 dark:text-white font-semibold text-center"
            />
          </View>
        </View>

        <TouchableOpacity className="bg-blue-600 dark:bg-blue-500 py-3.5 rounded-xl items-center" onPress={convert24To12} activeOpacity={0.8}>
          <Text className="text-white text-sm font-bold tracking-wide">Convert Time</Text>
        </TouchableOpacity>

        {result12 ? (
          <View className="mt-4 bg-slate-50 dark:bg-[#0B0F19] py-3 rounded-xl items-center border border-slate-200/50 dark:border-slate-800/30">
            <Text className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
              Standard Result
            </Text>
            <Text className={`text-xl font-bold ${result12.includes("Invalid") ? "text-rose-500" : "text-slate-800 dark:text-white"}`}>
              {result12}
            </Text>
          </View>
        ) : null}
      </View>

      {/* 12 TO 24 CARD */}
      <View className="bg-white dark:bg-[#161E2E] p-5 rounded-2xl border border-slate-200 dark:border-slate-800/40 mb-5 shadow-sm dark:shadow-none">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-bold text-slate-900 dark:text-white">12 → 24 Hour</Text>
          <View className="bg-slate-100 dark:bg-slate-800/40 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700/30">
            <Text className="text-[8px] font-bold text-slate-400 dark:text-slate-500 tracking-wider">
              STANDARD TO MILITARY
            </Text>
          </View>
        </View>

        <View className="flex-row justify-between mb-4">
          <View className="w-[48%]">
            <Text className="text-[9px] font-bold text-slate-400 dark:text-slate-505 tracking-wider uppercase mb-1.5">
              Hours (1-12)
            </Text>
            <TextInput
              placeholder="12"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={hour12}
              onChangeText={setHour12}
              maxLength={2}
              className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/50 dark:border-slate-800/30 rounded-xl p-3 text-base text-slate-800 dark:text-white font-semibold text-center"
            />
          </View>

          <View className="w-[48%]">
            <Text className="text-[9px] font-bold text-slate-400 dark:text-slate-505 tracking-wider uppercase mb-1.5">
              Minutes (0-59)
            </Text>
            <TextInput
              placeholder="00"
              placeholderTextColor="#94A3B8"
              keyboardType="numeric"
              value={minute12}
              onChangeText={setMinute12}
              maxLength={2}
              className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200/50 dark:border-slate-800/30 rounded-xl p-3 text-base text-slate-800 dark:text-white font-semibold text-center"
            />
          </View>
        </View>

        {/* AM PM SWITCHER */}
        <Text className="text-[9px] font-bold text-slate-400 dark:text-slate-505 tracking-wider uppercase mb-1.5">
          Select Period
        </Text>
        <View className="flex-row mb-4">
          <TouchableOpacity
            className={`flex-1 py-3 bg-slate-50 dark:bg-[#0B0F19] items-center justify-center rounded-xl mx-0.5 border ${
              period === "AM" ? "border-blue-400 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20" : "border-slate-200/50 dark:border-slate-800/30"
            }`}
            onPress={() => setPeriod("AM")}
            activeOpacity={0.9}
          >
            <Text className={`text-sm font-semibold ${period === "AM" ? "text-blue-600 dark:text-blue-400" : "text-slate-450 dark:text-slate-500"}`}>
              AM
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`flex-1 py-3 bg-slate-50 dark:bg-[#0B0F19] items-center justify-center rounded-xl mx-0.5 border ${
              period === "PM" ? "border-blue-400 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20" : "border-slate-200/50 dark:border-slate-800/30"
            }`}
            onPress={() => setPeriod("PM")}
            activeOpacity={0.9}
          >
            <Text className={`text-sm font-semibold ${period === "PM" ? "text-blue-600 dark:text-blue-400" : "text-slate-450 dark:text-slate-500"}`}>
              PM
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="bg-blue-600 dark:bg-blue-500 py-3.5 rounded-xl items-center" onPress={convert12To24} activeOpacity={0.8}>
          <Text className="text-white text-sm font-bold tracking-wide">Convert Time</Text>
        </TouchableOpacity>

        {result24 ? (
          <View className="mt-4 bg-slate-50 dark:bg-[#0B0F19] py-3 rounded-xl items-center border border-slate-200/50 dark:border-slate-800/30">
            <Text className="text-[8px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5">
              Military Result
            </Text>
            <Text className={`text-xl font-bold ${result24.includes("Invalid") ? "text-rose-500" : "text-slate-800 dark:text-white"}`}>
              {result24}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}
