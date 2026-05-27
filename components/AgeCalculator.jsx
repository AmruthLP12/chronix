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
      {/* MINIMAL HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Age Calculator</Text>
        <Text style={styles.subtitle}>Calculate precise intervals between dates</Text>
      </View>

      {/* DATE SELECTORS CONTAINER */}
      <View style={styles.card}>
        <Text style={styles.cardSectionLabel}>Select Dates</Text>

        <TouchableOpacity
          style={[styles.dateBtn, showFrom && styles.dateBtnActive]}
          onPress={() => setShowFrom(true)}
          activeOpacity={0.8}
        >
          <View style={styles.dateBtnLeft}>
            <FontAwesome name="calendar" size={14} color="#60A5FA" style={styles.btnIcon} />
            <View>
              <Text style={styles.btnLabel}>Start Date</Text>
              <Text style={styles.btnValue}>{fromDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</Text>
            </View>
          </View>
          <FontAwesome name="chevron-down" size={10} color="#475569" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.dateBtn, showTo && styles.dateBtnActive]}
          onPress={() => setShowTo(true)}
          activeOpacity={0.8}
        >
          <View style={styles.dateBtnLeft}>
            <FontAwesome name="calendar-check-o" size={14} color="#60A5FA" style={styles.btnIcon} />
            <View>
              <Text style={styles.btnLabel}>End Date</Text>
              <Text style={styles.btnValue}>{toDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</Text>
            </View>
          </View>
          <FontAwesome name="chevron-down" size={10} color="#475569" />
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
      <Text style={styles.resultsHeaderLabel}>Telemetry Results</Text>

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

      {/* TOTAL DAYS */}
      <View style={styles.totalDaysCard}>
        <View style={styles.totalDaysHeader}>
          <FontAwesome name="clock-o" size={14} color="#94A3B8" />
          <Text style={styles.totalDaysLabel}>Total Elapsed Duration</Text>
        </View>
        <Text style={styles.totalDaysNumber}>
          {age.totalDays.toLocaleString()} <Text style={styles.totalDaysSuffix}>Days total</Text>
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
    marginBottom: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 13,
    color: "#64748B",
    marginTop: 4,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#161E2E",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.06)",
    marginBottom: 20,
  },
  cardSectionLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 14,
  },
  dateBtn: {
    backgroundColor: "#0B0F19",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.04)",
  },
  dateBtnActive: {
    borderColor: "rgba(96, 165, 250, 0.25)",
  },
  dateBtnLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnIcon: {
    marginRight: 12,
  },
  btnLabel: {
    fontSize: 10,
    color: "#475569",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  btnValue: {
    fontSize: 14,
    color: "#F8FAFC",
    fontWeight: "600",
    marginTop: 1,
  },
  resultsHeaderLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
    paddingLeft: 2,
  },
  metricsGrid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  metricCard: {
    width: "31%",
    backgroundColor: "#161E2E",
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  metricNumber: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  metricLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#64748B",
    marginTop: 2,
    textTransform: "uppercase",
  },
  totalDaysCard: {
    backgroundColor: "#161E2E",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 14,
    padding: 16,
  },
  totalDaysHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  totalDaysLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#64748B",
    textTransform: "uppercase",
    marginLeft: 6,
  },
  totalDaysNumber: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  totalDaysSuffix: {
    fontSize: 14,
    fontWeight: "500",
    color: "#475569",
  },
});
