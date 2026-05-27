import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AgeCalculator() {
  const [fromDate, setFromDate] = useState(new Date(2000, 0, 1));
  const [toDate, setToDate] = useState(new Date());

  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const calculateAge = () => {
    let years = toDate.getFullYear() - fromDate.getFullYear();
    let months = toDate.getMonth() - fromDate.getMonth();
    let days = toDate.getDate() - fromDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(toDate.getFullYear(), toDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor((toDate - fromDate) / (1000 * 60 * 60 * 24));

    return { years, months, days, totalDays };
  };

  const age = calculateAge();

  return (
    <View style={styles.container}>
      {/* HEADER SECTION */}
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <FontAwesome name="hourglass" size={20} color="#A78BFA" />
        </View>
        <Text style={styles.title}>Age Calculator</Text>
        <Text style={styles.subtitle}>Calculate precise age metrics between dates</Text>
      </View>

      {/* DATE SELECTORS CONTAINER */}
      <View style={styles.card}>
        <Text style={styles.cardSectionLabel}>Select Intervals</Text>

        <TouchableOpacity
          style={[styles.dateBtn, showFrom && styles.dateBtnActive]}
          onPress={() => setShowFrom(true)}
          activeOpacity={0.7}
        >
          <View style={styles.dateBtnLeft}>
            <FontAwesome name="calendar" size={16} color="#A78BFA" style={styles.btnIcon} />
            <View>
              <Text style={styles.btnLabel}>Start / Birth Date</Text>
              <Text style={styles.btnValue}>{fromDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</Text>
            </View>
          </View>
          <FontAwesome name="chevron-down" size={12} color="#64748B" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.dateBtn, showTo && styles.dateBtnActive]}
          onPress={() => setShowTo(true)}
          activeOpacity={0.7}
        >
          <View style={styles.dateBtnLeft}>
            <FontAwesome name="calendar-check-o" size={16} color="#A78BFA" style={styles.btnIcon} />
            <View>
              <Text style={styles.btnLabel}>End / Target Date</Text>
              <Text style={styles.btnValue}>{toDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</Text>
            </View>
          </View>
          <FontAwesome name="chevron-down" size={12} color="#64748B" />
        </TouchableOpacity>

        {showFrom && (
          <DateTimePicker
            value={fromDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowFrom(false);
              if (selectedDate) setFromDate(selectedDate);
            }}
          />
        )}

        {showTo && (
          <DateTimePicker
            value={toDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowTo(false);
              if (selectedDate) setToDate(selectedDate);
            }}
          />
        )}
      </View>

      {/* METRIC DASHBOARD RESULTS */}
      <Text style={styles.resultsHeaderLabel}>Calculated Telemetry</Text>

      <View style={styles.metricsGrid}>
        {/* YEARS */}
        <View style={styles.metricCard}>
          <Text style={styles.metricNumber}>{age.years}</Text>
          <Text style={styles.metricLabel}>Years</Text>
        </View>

        {/* MONTHS */}
        <View style={styles.metricCard}>
          <Text style={styles.metricNumber}>{age.months}</Text>
          <Text style={styles.metricLabel}>Months</Text>
        </View>

        {/* DAYS */}
        <View style={styles.metricCard}>
          <Text style={styles.metricNumber}>{age.days}</Text>
          <Text style={styles.metricLabel}>Days</Text>
        </View>
      </View>

      {/* TOTAL DAYS (HIGHLIGHTED WIDGET) */}
      <View style={styles.totalDaysCard}>
        <View style={styles.totalDaysHeader}>
          <FontAwesome name="history" size={16} color="#F59E0B" />
          <Text style={styles.totalDaysLabel}>Cumulative Duration</Text>
        </View>
        <Text style={styles.totalDaysNumber}>
          {age.totalDays.toLocaleString()} <Text style={styles.totalDaysSuffix}>Days elapsed</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#0B0F19",
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "rgba(139, 92, 246, 0.12)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.2)",
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    color: "#94A3B8",
    marginTop: 4,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#161E2E",
    padding: 20,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.15)",
    marginBottom: 24,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
  },
  cardSectionLabel: {
    fontSize: 12,
    fontWeight: "800",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  dateBtn: {
    backgroundColor: "#0B0F19",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  dateBtnActive: {
    borderColor: "rgba(139, 92, 246, 0.5)",
    backgroundColor: "rgba(139, 92, 246, 0.03)",
  },
  dateBtnLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnIcon: {
    marginRight: 14,
  },
  btnLabel: {
    fontSize: 11,
    color: "#64748B",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  btnValue: {
    fontSize: 15,
    color: "#F1F5F9",
    fontWeight: "700",
    marginTop: 2,
  },
  resultsHeaderLabel: {
    fontSize: 13,
    fontWeight: "800",
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 1.5,
    marginBottom: 12,
    paddingLeft: 4,
  },
  metricsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  metricCard: {
    width: "30%",
    backgroundColor: "#161E2E",
    borderRadius: 20,
    paddingVertical: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(139, 92, 246, 0.15)",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  metricNumber: {
    fontSize: 32,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  metricLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#A78BFA",
    marginTop: 4,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  totalDaysCard: {
    backgroundColor: "rgba(245, 158, 11, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(245, 158, 11, 0.25)",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#F59E0B",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  totalDaysHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  totalDaysLabel: {
    fontSize: 11,
    fontWeight: "800",
    color: "#F59E0B",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginLeft: 8,
  },
  totalDaysNumber: {
    fontSize: 26,
    fontWeight: "900",
    color: "#FFFFFF",
  },
  totalDaysSuffix: {
    fontSize: 15,
    fontWeight: "500",
    color: "#94A3B8",
  },
});
