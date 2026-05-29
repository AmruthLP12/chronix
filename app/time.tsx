import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import TimeConverter from "../components/TimeConverter";

export default function TimeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-[#0B0F19] pt-5">
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        <TimeConverter />
      </ScrollView>
    </SafeAreaView>
  );
}
