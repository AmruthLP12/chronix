import { useState } from "react";
import { Alert, Linking, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppButton from "./ui/AppButton";
import AppCard from "./ui/AppCard";
import InputField from "./ui/InputField";
import PageHeader from "./ui/PageHeader";
import SectionTitle from "./ui/SectionTitle";

export default function WhatsApp() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOpenWhatsApp = async () => {
    if (!phoneNumber.trim()) {
      Alert.alert("Phone Number", "Please enter a phone number");
      return;
    }

    // Remove everything except numbers
    let phone = phoneNumber.replace(/\D/g, "");

    // If user entered an Indian number without country code
    if (phone.length === 10) {
      phone = `91${phone}`;
    }

    // If it's not a valid Indian WhatsApp number
    if (phone.length !== 12 || !phone.startsWith("91")) {
      Alert.alert(
        "Invalid Number",
        "Please enter a valid 10-digit Indian phone number.",
      );
      return;
    }

    const whatsappUrl = `https://wa.me/${phone}`;

    try {
      await Linking.openURL(whatsappUrl);
    } catch (error) {
      console.error("WhatsApp error:", error);

      Alert.alert("Error", "Unable to open WhatsApp.");
    }
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraScrollHeight={40}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <PageHeader
        title="WhatsApp"
        subtitle="Open a WhatsApp chat using a phone number"
      />

      <AppCard>
        <SectionTitle title="Phone Number" />

        <InputField
          label="WhatsApp Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          placeholder="+91 98765 43210"
        />

        <Text className="text-xs text-slate-400 dark:text-slate-500 mt-2">
          Enter or paste a phone number with or without the country code.
        </Text>
      </AppCard>

      <AppButton
        title="Open WhatsApp"
        onPress={handleOpenWhatsApp}
        className="mt-4"
      />

      <AppCard className="mt-5">
        <SectionTitle title="How It Works" />

        <View className="gap-2">
          <Text className="text-sm text-slate-500 dark:text-slate-400">
            1. Enter or paste a phone number.
          </Text>

          <Text className="text-sm text-slate-500 dark:text-slate-400">
            2. Tap "Open WhatsApp".
          </Text>

          <Text className="text-sm text-slate-500 dark:text-slate-400">
            3. WhatsApp will open the chat for that number.
          </Text>
        </View>
      </AppCard>
    </KeyboardAwareScrollView>
  );
}
