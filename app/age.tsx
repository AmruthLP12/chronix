import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import AgeCalculator from "../components/AgeCalculator";

export default function AgeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-[#0B0F19] pt-5">
      <AgeCalculator />
    </SafeAreaView>
  );
}
