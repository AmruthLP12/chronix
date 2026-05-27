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
    const minute = minute24;

    if (isNaN(hour) || hour < 0 || hour > 23) {
      setResult12("Invalid Hour");
      return;
    }

    const ampm = hour >= 12 ? "PM" : "AM";

    const convertedHour = hour % 12 || 12;

    setResult12(`${convertedHour}:${minute} ${ampm}`);
  };

  // CONVERT 12 TO 24
  const convert12To24 = () => {
    let hour = parseInt(hour12);

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

    setResult24(`${hour.toString().padStart(2, "0")}:${minute12}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Time Converter</Text>

      {/* 24 TO 12 */}
      <View style={styles.card}>
        <Text style={styles.title}>24 → 12 Hour</Text>

        <View style={styles.row}>
          <TextInput
            placeholder="Hour"
            keyboardType="numeric"
            value={hour24}
            onChangeText={setHour24}
            style={styles.input}
          />

          <TextInput
            placeholder="Minute"
            keyboardType="numeric"
            value={minute24}
            onChangeText={setMinute24}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={convert24To12}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>

        <Text style={styles.result}>{result12}</Text>
      </View>

      {/* 12 TO 24 */}
      <View style={styles.card}>
        <Text style={styles.title}>12 → 24 Hour</Text>

        <View style={styles.row}>
          <TextInput
            placeholder="Hour"
            keyboardType="numeric"
            value={hour12}
            onChangeText={setHour12}
            style={styles.input}
          />

          <TextInput
            placeholder="Minute"
            keyboardType="numeric"
            value={minute12}
            onChangeText={setMinute12}
            style={styles.input}
          />
        </View>

        {/* AM PM */}
        <View style={styles.periodRow}>
          <TouchableOpacity
            style={[
              styles.periodButton,
              period === "AM" && styles.activePeriod,
            ]}
            onPress={() => setPeriod("AM")}
          >
            <Text>AM</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.periodButton,
              period === "PM" && styles.activePeriod,
            ]}
            onPress={() => setPeriod("PM")}
          >
            <Text>PM</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={convert12To24}>
          <Text style={styles.buttonText}>Convert</Text>
        </TouchableOpacity>

        <Text style={styles.result}>{result24}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
  },

  periodRow: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 15,
  },

  periodButton: {
    flex: 1,
    padding: 14,
    backgroundColor: "#eee",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 5,
  },

  activePeriod: {
    backgroundColor: "#ddd",
  },

  button: {
    backgroundColor: "#111",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },

  result: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
