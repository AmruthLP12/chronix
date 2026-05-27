import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.header}>Chronix</Text>

      <Text style={styles.subHeading}>Utility Tools</Text>

      {/* AGE CARD */}
      <TouchableOpacity style={styles.card} onPress={() => router.push("/age")}>
        <View>
          <Text style={styles.cardTitle}>Age Calculator</Text>

          <Text style={styles.cardDescription}>
            Calculate years, months, days and total days between two dates.
          </Text>
        </View>
      </TouchableOpacity>

      {/* TIME CARD */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/time")}
      >
        <View>
          <Text style={styles.cardTitle}>Time Converter</Text>

          <Text style={styles.cardDescription}>
            Convert 24-hour time to 12-hour and vice versa.
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },

  subHeading: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    marginTop: 8,
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 20,
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },

  cardDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
});
