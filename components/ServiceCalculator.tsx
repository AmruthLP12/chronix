import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ServiceCalculator() {
  const [joiningDate, setJoiningDate] = useState(new Date(2014, 2, 14));
  const [retirementDate, setRetirementDate] = useState(new Date(2042, 9, 31));

  const [showJoiningPicker, setShowJoiningPicker] = useState(false);
  const [showRetirementPicker, setShowRetirementPicker] = useState(false);

  // CALCULATE SERVICE DIFFERENCE
  const calculateDifference = (fromDate: Date, toDate: Date) => {
    let years = toDate.getFullYear() - fromDate.getFullYear();
    let months = toDate.getMonth() - fromDate.getMonth();
    let days = toDate.getDate() - fromDate.getDate();

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

  const overallService = calculateDifference(joiningDate, today);
  const remainingService = calculateDifference(today, retirementDate);

  return (
    <View className="px-5 pb-5">
      {/* MINIMAL HEADER */}
      <View className="items-center mb-5 mt-2">
        <Text className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
          Service Calculator
        </Text>
        <Text className="text-xs text-slate-505 dark:text-slate-400 mt-1 text-center">
          Calculate relative employment duration metrics
        </Text>
      </View>

      {/* DATE SELECTORS CONTAINER */}
      <View className="bg-white dark:bg-[#161E2E] p-5 rounded-2xl border border-slate-200 dark:border-slate-800/40 mb-5 shadow-sm dark:shadow-none">
        <Text className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-3.5">
          Select Employment Dates
        </Text>

        {/* DATE OF JOINING */}
        <TouchableOpacity
          className={`bg-slate-50 dark:bg-[#0B0F19] flex-row items-center justify-between p-3.5 rounded-xl mb-3 border ${
            showJoiningPicker ? "border-blue-400 dark:border-blue-900/50" : "border-slate-200/50 dark:border-slate-800/30"
          }`}
          onPress={() => setShowJoiningPicker(true)}
          activeOpacity={0.8}
        >
          <View className="flex-row items-center">
            <FontAwesome name="calendar" size={14} className="text-blue-500 dark:text-blue-400 mr-3" />
            <View>
              <Text className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase">
                Date of Joining
              </Text>
              <Text className="text-sm text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                {joiningDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </Text>
            </View>
          </View>
          <FontAwesome name="chevron-down" size={10} className="text-slate-400 dark:text-slate-650" />
        </TouchableOpacity>

        {/* RETIREMENT DATE */}
        <TouchableOpacity
          className={`bg-slate-50 dark:bg-[#0B0F19] flex-row items-center justify-between p-3.5 rounded-xl mb-1 border ${
            showRetirementPicker ? "border-blue-400 dark:border-blue-900/50" : "border-slate-200/50 dark:border-slate-800/30"
          }`}
          onPress={() => setShowRetirementPicker(true)}
          activeOpacity={0.8}
        >
          <View className="flex-row items-center">
            <FontAwesome name="calendar-check-o" size={14} className="text-blue-500 dark:text-blue-400 mr-3" />
            <View>
              <Text className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase">
                Retirement Date
              </Text>
              <Text className="text-sm text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                {retirementDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </Text>
            </View>
          </View>
          <FontAwesome name="chevron-down" size={10} className="text-slate-400 dark:text-slate-650" />
        </TouchableOpacity>

        {/* JOINING PICKER */}
        {showJoiningPicker && (
          <DateTimePicker
            value={joiningDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowJoiningPicker(false);
              if (selectedDate) setJoiningDate(selectedDate);
            }}
          />
        )}

        {/* RETIREMENT PICKER */}
        {showRetirementPicker && (
          <DateTimePicker
            value={retirementDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowRetirementPicker(false);
              if (selectedDate) setRetirementDate(selectedDate);
            }}
          />
        )}
      </View>

      {/* METRIC RESULTS TITLE */}
      <Text className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-2.5 pl-0.5">
        Service Telemetry Results
      </Text>

      {/* OVERALL SERVICE CARD */}
      <View className="bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-850 rounded-2xl p-5 mb-4 shadow-sm dark:shadow-none">
        <View className="flex-row items-center mb-4 pb-2 border-b border-slate-100 dark:border-slate-800/40">
          <FontAwesome name="briefcase" size={12} className="text-blue-500 dark:text-blue-400" />
          <Text className="text-[9px] font-bold text-slate-450 dark:text-slate-500 uppercase ml-2">
            Overall Service
          </Text>
        </View>
        <View className="flex-row justify-between">
          <View className="items-center flex-1">
            <Text className="text-2xl font-bold text-slate-800 dark:text-white">{overallService.years}</Text>
            <Text className="text-[9px] font-semibold text-slate-400 dark:text-slate-505 mt-0.5 uppercase">Years</Text>
          </View>
          <View className="items-center flex-1 border-x border-slate-100 dark:border-slate-850">
            <Text className="text-2xl font-bold text-slate-800 dark:text-white">{overallService.months}</Text>
            <Text className="text-[9px] font-semibold text-slate-400 dark:text-slate-505 mt-0.5 uppercase">Months</Text>
          </View>
          <View className="items-center flex-1">
            <Text className="text-2xl font-bold text-slate-800 dark:text-white">{overallService.days}</Text>
            <Text className="text-[9px] font-semibold text-slate-400 dark:text-slate-505 mt-0.5 uppercase">Days</Text>
          </View>
        </View>
      </View>

      {/* REMAINING SERVICE CARD */}
      <View className="bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-850 rounded-2xl p-5 shadow-sm dark:shadow-none">
        <View className="flex-row items-center mb-4 pb-2 border-b border-slate-100 dark:border-slate-800/40">
          <FontAwesome name="hourglass-end" size={11} className="text-blue-500 dark:text-blue-400" />
          <Text className="text-[9px] font-bold text-slate-450 dark:text-slate-500 uppercase ml-2">
            Remaining Service
          </Text>
        </View>
        <View className="flex-row justify-between">
          <View className="items-center flex-1">
            <Text className="text-2xl font-bold text-slate-800 dark:text-white">{remainingService.years}</Text>
            <Text className="text-[9px] font-semibold text-slate-400 dark:text-slate-505 mt-0.5 uppercase">Years</Text>
          </View>
          <View className="items-center flex-1 border-x border-slate-100 dark:border-slate-850">
            <Text className="text-2xl font-bold text-slate-800 dark:text-white">{remainingService.months}</Text>
            <Text className="text-[9px] font-semibold text-slate-400 dark:text-slate-505 mt-0.5 uppercase">Months</Text>
          </View>
          <View className="items-center flex-1">
            <Text className="text-2xl font-bold text-slate-800 dark:text-white">{remainingService.days}</Text>
            <Text className="text-[9px] font-semibold text-slate-400 dark:text-slate-505 mt-0.5 uppercase">Days</Text>
          </View>
        </View>
      </View>
    </View>
  );
}