import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import SalaryLeaveCalculator from "../components/SalaryLeaveCalculator";

export default function LeaveSalaryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-[#0B0F19] pt-5 px-5 pb-5">
      <SalaryLeaveCalculator />
    </SafeAreaView>
  );
}
