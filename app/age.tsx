import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AgeCalculator from "../components/AgeCalculator";

export default function AgeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <AgeCalculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 20,
  },
});
