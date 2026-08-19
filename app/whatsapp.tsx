import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import WhatsApp from "../components/WhatsApp";

export default function WhatsAppScreen() {
  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-[#0B0F19] pt-5">
      <WhatsApp />
    </SafeAreaView>
  );
}
