import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* ABSOLUTE INFO TRIGGER */}
      <View style={styles.infoButtonContainer}>
        <TouchableOpacity onPress={() => router.push("/modal")} activeOpacity={0.7}>
          <FontAwesome name="info-circle" size={24} color="#94A3B8" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* BRAND HEADER */}
        <View style={styles.headerContainer}>
          <View style={styles.logoOuterRing}>
            <View style={styles.logoInnerRing}>
              <Image
                source={require("../../assets/images/logo.png")}
                style={styles.logo}
                resizeMode="cover"
              />
            </View>
          </View>
          <Text style={styles.header}>CHRONIX</Text>
          <Text style={styles.subHeading}>Temporal Utility Hub</Text>
        </View>

        {/* ACTIVE UTILITIES */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Active Utilities</Text>
          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>2 RUNNING</Text>
          </View>
        </View>

        {/* AGE CALCULATOR CARD */}
        <TouchableOpacity
          style={[styles.card, styles.cardAge]}
          onPress={() => router.push("/age")}
          activeOpacity={0.85}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconContainer, styles.iconAge]}>
              <FontAwesome name="hourglass-half" size={24} color="#A78BFA" />
            </View>
            <View style={styles.statusDotActive} />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Age Calculator</Text>
            <Text style={styles.cardDescription}>
              Precision time interval metrics. Compute precise years, months, weeks, and total days between dates.
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={[styles.actionText, { color: "#A78BFA" }]}>Launch Tool</Text>
            <FontAwesome name="arrow-right" size={12} color="#A78BFA" />
          </View>
        </TouchableOpacity>

        {/* TIME CONVERTER CARD */}
        <TouchableOpacity
          style={[styles.card, styles.cardTime]}
          onPress={() => router.push("/time")}
          activeOpacity={0.85}
        >
          <View style={styles.cardHeader}>
            <View style={[styles.iconContainer, styles.iconTime]}>
              <FontAwesome name="exchange" size={22} color="#22D3EE" />
            </View>
            <View style={styles.statusDotActive} />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Time Converter</Text>
            <Text style={styles.cardDescription}>
              Instant format shifting. Seamlessly convert military 24-hour time to standard 12-hour clock and back.
            </Text>
          </View>
          <View style={styles.cardFooter}>
            <Text style={[styles.actionText, { color: "#22D3EE" }]}>Launch Tool</Text>
            <FontAwesome name="arrow-right" size={12} color="#22D3EE" />
          </View>
        </TouchableOpacity>

        {/* FUTURE UTILITIES */}
        <View style={[styles.sectionHeader, { marginTop: 15 }]}>
          <Text style={styles.sectionTitle}>Pipeline Modules</Text>
          <View style={styles.pipelineBadge}>
            <Text style={styles.pipelineBadgeText}>IN PLAN</Text>
          </View>
        </View>

        {/* UPCOMING UTILITY 1 */}
        <View style={[styles.card, styles.cardFuture]} pointerEvents="none">
          <View style={styles.cardHeader}>
            <View style={[styles.iconContainer, styles.iconFuture]}>
              <FontAwesome name="globe" size={24} color="#64748B" />
            </View>
            <View style={styles.badgeComingSoon}>
              <Text style={styles.comingSoonText}>COMING SOON</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitleFuture}>Timezone Sync</Text>
            <Text style={styles.cardDescriptionFuture}>
              Coordinated global temporal mapping. Track relative time offsets across multiple international locations.
            </Text>
          </View>
        </View>

        {/* UPCOMING UTILITY 2 */}
        <View style={[styles.card, styles.cardFuture]} pointerEvents="none">
          <View style={styles.cardHeader}>
            <View style={[styles.iconContainer, styles.iconFuture]}>
              <FontAwesome name="bell-o" size={22} color="#64748B" />
            </View>
            <View style={styles.badgeComingSoon}>
              <Text style={styles.comingSoonText}>COMING SOON</Text>
            </View>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitleFuture}>Chrono Countdown</Text>
            <Text style={styles.cardDescriptionFuture}>
              Intelligent alarm and precision milestone tracking. Dynamic visual stopwatch timers and cycle calculators.
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
    backgroundColor: "#0B0F19", // Deep Space Navy
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 40,
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoOuterRing: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: "rgba(139, 92, 246, 0.15)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "rgba(139, 92, 246, 0.3)",
    marginBottom: 16,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  logoInnerRing: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#111827",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(34, 211, 238, 0.2)",
  },
  logo: {
    width: 90,
    height: 90,
  },
  header: {
    fontSize: 28,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 4,
    textShadowColor: "rgba(139, 92, 246, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "600",
    color: "#94A3B8",
    marginTop: 6,
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#F1F5F9",
    letterSpacing: 1.5,
    textTransform: "uppercase",
  },
  activeBadge: {
    backgroundColor: "rgba(34, 211, 238, 0.12)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(34, 211, 238, 0.3)",
  },
  activeBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#22D3EE",
    letterSpacing: 1,
  },
  pipelineBadge: {
    backgroundColor: "rgba(100, 116, 139, 0.15)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(100, 116, 139, 0.3)",
  },
  pipelineBadgeText: {
    fontSize: 10,
    fontWeight: "800",
    color: "#94A3B8",
    letterSpacing: 1,
  },
  card: {
    backgroundColor: "#161E2E", // Glass-styled card background
    borderRadius: 24,
    padding: 24,
    marginBottom: 20,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 4,
  },
  cardAge: {
    borderColor: "rgba(139, 92, 246, 0.2)",
    shadowColor: "#8B5CF6",
  },
  cardTime: {
    borderColor: "rgba(34, 211, 238, 0.2)",
    shadowColor: "#22D3EE",
  },
  cardFuture: {
    backgroundColor: "rgba(22, 30, 46, 0.4)",
    borderColor: "rgba(100, 116, 139, 0.15)",
    opacity: 0.7,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  iconAge: {
    backgroundColor: "rgba(139, 92, 246, 0.12)",
  },
  iconTime: {
    backgroundColor: "rgba(34, 211, 238, 0.12)",
  },
  iconFuture: {
    backgroundColor: "rgba(100, 116, 139, 0.08)",
  },
  statusDotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#10B981",
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  badgeComingSoon: {
    backgroundColor: "rgba(100, 116, 139, 0.1)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  comingSoonText: {
    fontSize: 9,
    fontWeight: "700",
    color: "#94A3B8",
    letterSpacing: 0.5,
  },
  cardBody: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  cardTitleFuture: {
    fontSize: 20,
    fontWeight: "700",
    color: "#64748B",
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: "#94A3B8",
    lineHeight: 22,
  },
  cardDescriptionFuture: {
    fontSize: 13,
    color: "#475569",
    lineHeight: 20,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  actionText: {
    fontSize: 14,
    fontWeight: "700",
    marginRight: 6,
  },
  infoButtonContainer: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
  },
});
