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
    <View style={styles.card}>
      <Text style={styles.title}>Age Calculator</Text>

      <TouchableOpacity
        style={styles.dateBtn}
        onPress={() => setShowFrom(true)}
      >
        <Text>From Date: {fromDate.toDateString()}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dateBtn} onPress={() => setShowTo(true)}>
        <Text>To Date: {toDate.toDateString()}</Text>
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

      <View style={styles.resultBox}>
        <Text style={styles.result}>{age.years} Years</Text>

        <Text style={styles.result}>{age.months} Months</Text>

        <Text style={styles.result}>{age.days} Days</Text>

        <Text style={styles.totalDays}>Total Days: {age.totalDays}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 16,
    elevation: 3,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  dateBtn: {
    backgroundColor: "#eee",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },

  resultBox: {
    marginTop: 20,
  },

  result: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },

  totalDays: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});
