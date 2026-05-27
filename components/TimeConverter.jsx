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
      {/* MINIMAL HEADER */}
      <View style={styles.header}>
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

        <TouchableOpacity style={styles.button} onPress={convert24To12} activeOpacity={0.8}>
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
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={convert12To24} activeOpacity={0.8}>
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
  cardTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  badge: {
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.06)",
  },
  badgeText: {
    fontSize: 8,
    fontWeight: "700",
    color: "#64748B",
    letterSpacing: 0.5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  inputContainer: {
    width: "48%",
  },
  inputLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#0B0F19",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.04)",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
    textAlign: "center",
  },
  periodRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: "#0B0F19",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.04)",
  },
  activePeriod: {
    borderColor: "rgba(96, 165, 250, 0.3)",
    backgroundColor: "rgba(96, 165, 250, 0.04)",
  },
  periodText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
  },
  activePeriodText: {
    color: "#60A5FA",
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  resultContainer: {
    marginTop: 16,
    backgroundColor: "#0B0F19",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.04)",
  },
  resultLabel: {
    fontSize: 9,
    fontWeight: "700",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 2,
  },
  resultValue: {
    fontSize: 24,
    fontWeight: "700",
    color: "#F8FAFC",
  },
  resultError: {
    color: "#EF4444",
  },
});
