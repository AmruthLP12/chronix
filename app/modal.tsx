import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      {/* BRAND SECTION */}
      <View style={styles.brandContainer}>
        <View style={styles.logoOuter}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.title}>CHRONIX</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>

      <View style={styles.separator} />

      {/* DESCRIPTION */}
      <Text style={styles.description}>
        A premium, high-tech temporal utility workspace providing modern calculation and format conversion tools with extreme precision.
      </Text>

      {/* MODULE DIRECTORY */}
      <View style={styles.featuresContainer}>
        <Text style={styles.sectionHeader}>Available Modules</Text>
        
        <View style={styles.featureItem}>
          <FontAwesome name="check-circle" size={16} color="#10B981" style={styles.featureIcon} />
          <View>
            <Text style={styles.featureName}>Age Calculator</Text>
            <Text style={styles.featureDetail}>Compute intervals, years, months, and total elapsed days.</Text>
          </View>
        </View>

        <View style={styles.featureItem}>
          <FontAwesome name="check-circle" size={16} color="#10B981" style={styles.featureIcon} />
          <View>
            <Text style={styles.featureName}>Time Converter</Text>
            <Text style={styles.featureDetail}>Seamless translation between 24-hour military and 12-hour clocks.</Text>
          </View>
        </View>

        <Text style={[styles.sectionHeader, { marginTop: 15 }]}>Active Pipeline</Text>

        <View style={styles.featureItem}>
          <FontAwesome name="lock" size={16} color="#64748B" style={styles.featureIcon} />
          <View>
            <Text style={styles.featureNameDisabled}>Timezone Sync (Soon)</Text>
            <Text style={styles.featureDetailDisabled}>Multi-locale timezone calculations and tracking.</Text>
          </View>
        </View>
      </View>

      {/* CREDITS */}
      <View style={styles.footer}>
        <Text style={styles.credits}>Created by AmruthLP12</Text>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F19",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  brandContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logoOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "rgba(34, 211, 238, 0.3)",
    marginBottom: 12,
    backgroundColor: "#161E2E",
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 3,
  },
  version: {
    fontSize: 12,
    color: "#94A3B8",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginTop: 4,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    width: "100%",
  },
  description: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  featuresContainer: {
    width: "100%",
    backgroundColor: "#161E2E",
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: "800",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 14,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  featureIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  featureName: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  featureNameDisabled: {
    fontSize: 14,
    fontWeight: "700",
    color: "#64748B",
  },
  featureDetail: {
    fontSize: 12,
    color: "#94A3B8",
    marginTop: 2,
    lineHeight: 16,
    paddingRight: 16,
  },
  featureDetailDisabled: {
    fontSize: 12,
    color: "#475569",
    marginTop: 2,
    lineHeight: 16,
    paddingRight: 16,
  },
  footer: {
    position: "absolute",
    bottom: 30,
  },
  credits: {
    fontSize: 11,
    fontWeight: "700",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
});
