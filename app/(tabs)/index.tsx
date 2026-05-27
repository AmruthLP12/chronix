import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* SUBTLE HUB HEADER */}
        <View style={styles.headerContainer}>
          <Text style={styles.subHeading}>Personal Helper Workspace</Text>
        </View>

        {/* ACTIVE UTILITIES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Utilities</Text>
          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>2 Active</Text>
          </View>
        </View>

        {/* AGE CALCULATOR CARD */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/age")}
          activeOpacity={0.8}
        >
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <FontAwesome name="calendar" size={20} color="#60A5FA" />
            </View>
            <View style={styles.statusDotActive} />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Age Calculator</Text>
            <Text style={styles.cardDescription}>
              Precision time interval calculation. Compute years, months, weeks, and total days elapsed between two selected dates.
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.actionText}>Open Utility</Text>
            <FontAwesome name="chevron-right" size={10} color="#60A5FA" />
          </View>
        </TouchableOpacity>

        {/* TIME CONVERTER CARD */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.push("/time")}
          activeOpacity={0.8}
        >
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <FontAwesome name="clock-o" size={20} color="#60A5FA" />
            </View>
            <View style={styles.statusDotActive} />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Time Converter</Text>
            <Text style={styles.cardDescription}>
              Standard to military format conversion. Seamlessly shift formats between 12-hour AM/PM cycles and 24-hour logs.
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={styles.actionText}>Open Utility</Text>
            <FontAwesome name="chevron-right" size={10} color="#60A5FA" />
          </View>
        </TouchableOpacity>

        {/* PIPELINE SECTION */}
        <View style={[styles.sectionHeader, { marginTop: 15 }]}>
          <Text style={styles.sectionTitle}>Pipeline Modules</Text>
          <View style={styles.pipelineBadge}>
            <Text style={styles.pipelineBadgeText}>Future Growth</Text>
          </View>
        </View>

        {/* UPCOMING UTILITY 1 */}
        <View style={styles.cardFuture} pointerEvents="none">
          <View style={styles.cardHeader}>
            <View style={styles.iconContainerFuture}>
              <FontAwesome name="globe" size={18} color="#475569" />
            </View>
            <View style={styles.badgeComingSoon}>
              <Text style={styles.comingSoonText}>COMING SOON</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitleFuture}>Timezone Sync</Text>
            <Text style={styles.cardDescriptionFuture}>
              Track relative offsets, clock conversions, and coordinates across international cities concurrently.
            </Text>
          </View>
        </View>

        {/* UPCOMING UTILITY 2 */}
        <View style={styles.cardFuture} pointerEvents="none">
          <View style={styles.cardHeader}>
            <View style={styles.iconContainerFuture}>
              <FontAwesome name="bell-o" size={18} color="#475569" />
            </View>
            <View style={styles.badgeComingSoon}>
              <Text style={styles.comingSoonText}>COMING SOON</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitleFuture}>Chrono Countdown</Text>
            <Text style={styles.cardDescriptionFuture}>
              Visual stopwatches, precision loop interval timers, and custom helper alarms.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F19", // Clean Deep Slate Charcoal
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
  },
  headerContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255, 255, 255, 0.05)",
    paddingBottom: 15,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "600",
    color: "#64748B",
    letterSpacing: 0.5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#94A3B8",
    letterSpacing: 1,
    textTransform: "uppercase",
  },
  activeBadge: {
    backgroundColor: "rgba(96, 165, 250, 0.08)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "rgba(96, 165, 250, 0.15)",
  },
  activeBadgeText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#60A5FA",
  },
  pipelineBadge: {
    backgroundColor: "rgba(71, 85, 105, 0.15)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "rgba(71, 85, 105, 0.25)",
  },
  pipelineBadgeText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#64748B",
  },
  card: {
    backgroundColor: "#161E2E", // Matte charcoal card background
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.06)",
  },
  cardFuture: {
    backgroundColor: "rgba(22, 30, 46, 0.3)",
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.03)",
    opacity: 0.6,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  iconContainer: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  iconContainerFuture: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    justifyContent: "center",
    alignItems: "center",
  },
  statusDotActive: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#10B981",
  },
  badgeComingSoon: {
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  comingSoonText: {
    fontSize: 8,
    fontWeight: "700",
    color: "#475569",
    letterSpacing: 0.5,
  },
  cardBody: {
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  cardTitleFuture: {
    fontSize: 17,
    fontWeight: "600",
    color: "#475569",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: "#94A3B8",
    lineHeight: 20,
  },
  cardDescriptionFuture: {
    fontSize: 12,
    color: "#475569",
    lineHeight: 18,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  actionText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#60A5FA",
    marginRight: 4,
  },
});
