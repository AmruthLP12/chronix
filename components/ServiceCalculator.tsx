import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ServiceCalculator() {
  const [joiningDate, setJoiningDate] =
    useState(new Date(2014, 2, 14));

  const [retirementDate, setRetirementDate] =
    useState(new Date(2042, 9, 31));

  const [showJoiningPicker, setShowJoiningPicker] =
    useState(false);

  const [
    showRetirementPicker,
    setShowRetirementPicker,
  ] = useState(false);

  // CALCULATE SERVICE
  const calculateDifference = (
    fromDate: Date,
    toDate: Date
  ) => {
    let years =
      toDate.getFullYear() -
      fromDate.getFullYear();

    let months =
      toDate.getMonth() -
      fromDate.getMonth();

    let days =
      toDate.getDate() -
      fromDate.getDate();

    if (days < 0) {
      months--;

      const previousMonthDays = new Date(
        toDate.getFullYear(),
        toDate.getMonth(),
        0
      ).getDate();

      days += previousMonthDays;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return {
      years,
      months,
      days,
    };
  };

  const today = new Date();

  const overallService =
    calculateDifference(
      joiningDate,
      today
    );

  const remainingService =
    calculateDifference(
      today,
      retirementDate
    );

  return (
    <View className="flex-1 bg-gray-100 px-5 pt-6">
      {/* HEADER */}
      <Text className="text-3xl font-bold text-center text-black mb-8">
        Service Calculator
      </Text>

      {/* JOINING DATE */}
      <View className="bg-white rounded-3xl p-5 mb-5">
        <Text className="text-gray-500 mb-2">
          Date of Joining
        </Text>

        <TouchableOpacity
          className="bg-gray-100 rounded-2xl p-4"
          onPress={() =>
            setShowJoiningPicker(true)
          }
        >
          <Text className="text-lg font-semibold text-black">
            {joiningDate.toDateString()}
          </Text>
        </TouchableOpacity>
      </View>

      {/* RETIREMENT DATE */}
      <View className="bg-white rounded-3xl p-5 mb-5">
        <Text className="text-gray-500 mb-2">
          Retirement Date
        </Text>

        <TouchableOpacity
          className="bg-gray-100 rounded-2xl p-4"
          onPress={() =>
            setShowRetirementPicker(true)
          }
        >
          <Text className="text-lg font-semibold text-black">
            {retirementDate.toDateString()}
          </Text>
        </TouchableOpacity>
      </View>

      {/* RESULT */}
      <View className="bg-white rounded-3xl p-5">
        <Text className="text-xl font-bold text-black mb-5">
          Service Details
        </Text>

        {/* OVERALL */}
        <View className="mb-6">
          <Text className="text-gray-500 mb-2">
            Overall Service
          </Text>

          <Text className="text-2xl font-bold text-black">
            {overallService.years} y{" "}
            {overallService.months} m{" "}
            {overallService.days} d
          </Text>
        </View>

        {/* REMAINING */}
        <View>
          <Text className="text-gray-500 mb-2">
            Remaining Service
          </Text>

          <Text className="text-2xl font-bold text-black">
            {remainingService.years} y{" "}
            {remainingService.months} m{" "}
            {remainingService.days} d
          </Text>
        </View>
      </View>

      {/* JOINING PICKER */}
      {showJoiningPicker && (
        <DateTimePicker
          value={joiningDate}
          mode="date"
          display="default"
          onChange={(
            event,
            selectedDate
          ) => {
            setShowJoiningPicker(false);

            if (selectedDate) {
              setJoiningDate(
                selectedDate
              );
            }
          }}
        />
      )}

      {/* RETIREMENT PICKER */}
      {showRetirementPicker && (
        <DateTimePicker
          value={retirementDate}
          mode="date"
          display="default"
          onChange={(
            event,
            selectedDate
          ) => {
            setShowRetirementPicker(false);

            if (selectedDate) {
              setRetirementDate(
                selectedDate
              );
            }
          }}
        />
      )}
    </View>
  );
}