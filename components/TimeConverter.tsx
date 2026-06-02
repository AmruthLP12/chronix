import { useState } from "react";
import { Text, View } from "react-native";

import AppButton from "./ui/AppButton";
import AppCard from "./ui/AppCard";
import AppInput from "./ui/AppInput";
import PageHeader from "./ui/PageHeader";
import SectionTitle from "./ui/SectionTitle";
import SegmentedButton from "./ui/SegmentedButton";

export default function TimeConverter() {
  const [hour24, setHour24] = useState("");
  const [minute24, setMinute24] = useState("");
  const [result12, setResult12] = useState("");

  const [hour12, setHour12] = useState("");
  const [minute12, setMinute12] = useState("");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");
  const [result24, setResult24] = useState("");

  const convert24To12 = () => {
    const hour = parseInt(hour24);
    const minute = minute24 || "00";

    if (isNaN(hour) || hour < 0 || hour > 23) {
      setResult12("Invalid Hour");
      return;
    }

    const ampm = hour >= 12 ? "PM" : "AM";
    const convertedHour = hour % 12 || 12;

    setResult12(`${convertedHour}:${minute.padStart(2, "0")} ${ampm}`);
  };

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

    setResult24(
      `${hour.toString().padStart(2, "0")}:${minute.padStart(2, "0")}`,
    );
  };

  return (
    <View className="px-5 pb-5">
      <PageHeader
        title="Time Converter"
        subtitle="Format-shift temporal layouts in real-time"
      />

      {/* 24 TO 12 */}

      <AppCard>
        <SectionTitle title="24 → 12 Hour" />

        <View className="flex-row gap-3">
          <AppInput
            label="Hours (0-23)"
            value={hour24}
            onChangeText={setHour24}
            placeholder="00"
            maxLength={2}
          />

          <AppInput
            label="Minutes"
            value={minute24}
            onChangeText={setMinute24}
            placeholder="00"
            maxLength={2}
          />
        </View>

        <AppButton
          title="Convert Time"
          onPress={convert24To12}
          className="mt-4"
        />

        {!!result12 && (
          <View className="mt-4 bg-slate-50 dark:bg-[#0B0F19] rounded-xl p-4 items-center border border-slate-200 dark:border-slate-800">
            <Text className="text-[10px] font-bold text-slate-400 uppercase">
              Standard Result
            </Text>

            <Text
              className={`text-xl font-bold mt-1 ${
                result12.includes("Invalid")
                  ? "text-red-500"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              {result12}
            </Text>
          </View>
        )}
      </AppCard>

      {/* 12 TO 24 */}

      <AppCard className="mt-5">
        <SectionTitle title="12 → 24 Hour" />

        <View className="flex-row gap-3">
          <AppInput
            label="Hours (1-12)"
            value={hour12}
            onChangeText={setHour12}
            placeholder="12"
            maxLength={2}
          />

          <AppInput
            label="Minutes"
            value={minute12}
            onChangeText={setMinute12}
            placeholder="00"
            maxLength={2}
          />
        </View>

        <View className="mt-4">
          <Text className="text-[9px] font-bold text-slate-400 uppercase mb-2">
            Select Period
          </Text>

          <View className="flex-row gap-2">
            <SegmentedButton
              title="AM"
              active={period === "AM"}
              onPress={() => setPeriod("AM")}
            />

            <SegmentedButton
              title="PM"
              active={period === "PM"}
              onPress={() => setPeriod("PM")}
            />
          </View>
        </View>

        <AppButton
          title="Convert Time"
          onPress={convert12To24}
          className="mt-4"
        />

        {!!result24 && (
          <View className="mt-4 bg-slate-50 dark:bg-[#0B0F19] rounded-xl p-4 items-center border border-slate-200 dark:border-slate-800">
            <Text className="text-[10px] font-bold text-slate-400 uppercase">
              Military Result
            </Text>

            <Text
              className={`text-xl font-bold mt-1 ${
                result24.includes("Invalid")
                  ? "text-red-500"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              {result24}
            </Text>
          </View>
        )}
      </AppCard>
    </View>
  );
}
