import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function TimeConverter() {
  // 24 -> 12
  const [hour24, setHour24] = useState("");
  const [minute24, setMinute24] = useState("");
  const [result12, setResult12] = useState("");

  // 12 -> 24
  const [hour12, setHour12] = useState("");
  const [minute12, setMinute12] = useState("");
  const [period, setPeriod] = useState("AM");
  const [result24, setResult24] = useState("");

  // CONVERT 24 TO 12
  const convert24To12 = () => {
    const hour = parseInt(hour24);
    const minute = minute24 || "00";

    if (isNaN(hour) || hour < 0 || hour > 23) {
      setResult12("Invalid Hour");
      return;
    }

    const ampm = hour >= 12 ? "PM" : "AM";
    const convertedHour = hour % 12 || 12;
    
    // Ensure two digit minutes
    const paddedMinute = minute.padStart(2, "0");
    setResult12(`${convertedHour}:${paddedMinute} ${ampm}`);
  };

  // CONVERT 12 TO 24
  const convert12To24 = () => {
    let hour = parseInt(hour12);
    const minute = minute12 || "00";

    if (isNaN(hour) || hour < 1 || hour > 12) {
      setResult24("Invalid Hour");
      return;
    }

    if (period === "PM" && hour !== 12) {
      hour += 12;
    }

    if (period === "AM" && hour === 12) {
      hour = 0;
    }

    const paddedHour = hour.toString().padStart(2, "0");
    const paddedMinute = minute.padStart(2, "0");
    setResult24(`${paddedHour}:${paddedMinute}`);
  };

  return (
    <View style={styles.container}>
      {/* HEADER SECTION */}
      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <FontAwesome name="refresh" size={18} color="#22D3EE" />
        </View>
        <Text style={styles.title}>Time Converter</Text>
        <Text style={styles.subtitle}>Format-shift temporal layouts in real-time</Text>
      </View>

      {/* 24 TO 12 CARD */}
      <View style={styles.card}>
        <View style={styles.cardTitleRow}>
          <Text style={styles.cardTitle}>24 → 12 Hour</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>MILITARY TO STANDARD</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Hours (0-23)</Text>
            <TextInput
              placeholder="00"
              placeholderTextColor="#475569"
              keyboardType="numeric"
              value={hour24}
              onChangeText={setHour24}
              maxLength={2}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Minutes (0-59)</Text>
            <TextInput
              placeholder="00"
              placeholderTextColor="#475569"
              keyboardType="numeric"
              value={minute24}
              onChangeText={setMinute24}
              maxLength={2}
              style={styles.input}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={convert24To12} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Convert Time</Text>
        </TouchableOpacity>

        {result12 ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Standard Result</Text>
            <Text style={[styles.resultValue, result12.includes("Invalid") && styles.resultError]}>{result12}</Text>
          </View>
        ) : null}
      </View>

      {/* 12 TO 24 CARD */}
      <View style={styles.card}>
        <View style={styles.cardTitleRow}>
          <Text style={styles.cardTitle}>12 → 24 Hour</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>STANDARD TO MILITARY</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Hours (1-12)</Text>
            <TextInput
              placeholder="12"
              placeholderTextColor="#475569"
              keyboardType="numeric"
              value={hour12}
              onChangeText={setHour12}
              maxLength={2}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Minutes (0-59)</Text>
            <TextInput
              placeholder="00"
              placeholderTextColor="#475569"
              keyboardType="numeric"
              value={minute12}
              onChangeText={setMinute12}
              maxLength={2}
              style={styles.input}
            />
          </View>
        </View>

        {/* AM PM SWITCHER */}
        <Text style={styles.inputLabel}>Select Period</Text>
        <View style={styles.periodRow}>
          <TouchableOpacity
            style={[
              styles.periodButton,
              period === "AM" && styles.activePeriod,
            ]}
            onPress={() => setPeriod("AM")}
            activeOpacity={0.9}
          >
            <Text style={[styles.periodText, period === "AM" && styles.activePeriodText]}>AM</Text>
            {period === "AM" && <View style={styles.activeDot} />}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.periodButton,
              period === "PM" && styles.activePeriod,
            ]}
            onPress={() => setPeriod("PM")}
            activeOpacity={0.9}
          >
            <Text style={[styles.periodText, period === "PM" && styles.activePeriodText]}>PM</Text>
            {period === "PM" && <View style={styles.activeDot} />}
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={convert12To24} activeOpacity={0.85}>
          <Text style={styles.buttonText}>Convert Time</Text>
        </TouchableOpacity>

        {result24 ? (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>Military Result</Text>
            <Text style={[styles.resultValue, result24.includes("Invalid") && styles.resultError]}>{result24}</Text>
          </View>
        ) : null}
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
    backgroundColor: "rgba(34, 211, 238, 0.12)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(34, 211, 238, 0.2)",
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
    borderColor: "rgba(34, 211, 238, 0.15)",
    marginBottom: 24,
    shadowColor: "#22D3EE",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  cardTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  badge: {
    backgroundColor: "rgba(34, 211, 238, 0.08)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "rgba(34, 211, 238, 0.2)",
  },
  badgeText: {
    fontSize: 8,
    fontWeight: "800",
    color: "#22D3EE",
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  inputContainer: {
    width: "48%",
  },
  inputLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#0B0F19",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: 16,
    padding: 14,
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "700",
    textAlign: "center",
  },
  periodRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 14,
    backgroundColor: "#0B0F19",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    position: "relative",
  },
  activePeriod: {
    borderColor: "rgba(34, 211, 238, 0.4)",
    backgroundColor: "rgba(34, 211, 238, 0.05)",
  },
  periodText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#64748B",
  },
  activePeriodText: {
    color: "#22D3EE",
  },
  activeDot: {
    position: "absolute",
    bottom: 6,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#22D3EE",
  },
  button: {
    backgroundColor: "#22D3EE",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#22D3EE",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: "#0B0F19",
    fontSize: 15,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  resultContainer: {
    marginTop: 20,
    backgroundColor: "#0B0F19",
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
  },
  resultLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#64748B",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 28,
    fontWeight: "900",
    color: "#22D3EE",
    letterSpacing: 0.5,
  },
  resultError: {
    color: "#EF4444",
  },
});
