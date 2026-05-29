import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

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
    <View className="px-5 pb-5">
      {/* MINIMAL HEADER */}
      <View className="items-center mb-5 mt-2">
        <Text className="text-xl font-bold text-slate-900 dark:text-white tracking-wide">
          Age Calculator
        </Text>
        <Text className="text-xs text-slate-505 dark:text-slate-400 mt-1 text-center">
          Calculate precise intervals between dates
        </Text>
      </View>

      {/* DATE SELECTORS CONTAINER */}
      <View className="bg-white dark:bg-[#161E2E] p-5 rounded-2xl border border-slate-200 dark:border-slate-800/40 mb-5 shadow-sm dark:shadow-none">
        <Text className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-3.5">
          Select Dates
        </Text>

        <TouchableOpacity
          className={`bg-slate-50 dark:bg-[#0B0F19] flex-row items-center justify-between p-3.5 rounded-xl mb-3 border ${
            showFrom ? "border-blue-400 dark:border-blue-900/50" : "border-slate-200/50 dark:border-slate-800/30"
          }`}
          onPress={() => setShowFrom(true)}
          activeOpacity={0.8}
        >
          <View className="flex-row items-center">
            <FontAwesome name="calendar" size={14} className="text-blue-500 dark:text-blue-400 mr-3" />
            <View>
              <Text className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase">
                Start Date
              </Text>
              <Text className="text-sm text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                {fromDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </Text>
            </View>
          </View>
          <FontAwesome name="chevron-down" size={10} className="text-slate-400 dark:text-slate-650" />
        </TouchableOpacity>

        <TouchableOpacity
          className={`bg-slate-50 dark:bg-[#0B0F19] flex-row items-center justify-between p-3.5 rounded-xl mb-1 border ${
            showTo ? "border-blue-400 dark:border-blue-900/50" : "border-slate-200/50 dark:border-slate-800/30"
          }`}
          onPress={() => setShowTo(true)}
          activeOpacity={0.8}
        >
          <View className="flex-row items-center">
            <FontAwesome name="calendar-check-o" size={14} className="text-blue-500 dark:text-blue-400 mr-3" />
            <View>
              <Text className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase">
                End Date
              </Text>
              <Text className="text-sm text-slate-800 dark:text-slate-200 font-semibold mt-0.5">
                {toDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
              </Text>
            </View>
          </View>
          <FontAwesome name="chevron-down" size={10} className="text-slate-400 dark:text-slate-650" />
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
      <Text className="text-[10px] font-bold text-slate-400 dark:text-slate-500 tracking-wider uppercase mb-2.5 pl-0.5">
        Telemetry Results
      </Text>

      <View className="flex-row justify-between mb-4">
        {/* YEARS */}
        <View className="w-[31%] bg-white dark:bg-[#161E2E] rounded-xl py-3.5 items-center border border-slate-200 dark:border-slate-850 shadow-sm dark:shadow-none">
          <Text className="text-2xl font-bold text-slate-800 dark:text-white">{age.years}</Text>
          <Text className="text-[9px] font-semibold text-slate-400 dark:text-slate-505 mt-0.5 uppercase">Years</Text>
        </View>

        {/* MONTHS */}
        <View className="w-[31%] bg-white dark:bg-[#161E2E] rounded-xl py-3.5 items-center border border-slate-200 dark:border-slate-850 shadow-sm dark:shadow-none">
          <Text className="text-2xl font-bold text-slate-800 dark:text-white">{age.months}</Text>
          <Text className="text-[9px] font-semibold text-slate-400 dark:text-slate-505 mt-0.5 uppercase">Months</Text>
        </View>

        {/* DAYS */}
        <View className="w-[31%] bg-white dark:bg-[#161E2E] rounded-xl py-3.5 items-center border border-slate-200 dark:border-slate-850 shadow-sm dark:shadow-none">
          <Text className="text-2xl font-bold text-slate-800 dark:text-white">{age.days}</Text>
          <Text className="text-[9px] font-semibold text-slate-400 dark:text-slate-505 mt-0.5 uppercase">Days</Text>
        </View>
      </View>

      {/* TOTAL DAYS */}
      <View className="bg-white dark:bg-[#161E2E] border border-slate-200 dark:border-slate-850 rounded-xl p-4 shadow-sm dark:shadow-none">
        <View className="flex-row items-center mb-1">
          <FontAwesome name="clock-o" size={12} className="text-slate-400 dark:text-slate-500" />
          <Text className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase ml-1.5">
            Total Elapsed Duration
          </Text>
        </View>
        <Text className="text-xl font-bold text-slate-800 dark:text-white">
          {age.totalDays.toLocaleString()}{" "}
          <Text className="text-xs font-semibold text-slate-400 dark:text-slate-500">Days total</Text>
        </Text>
      </View>
    </View>
  );
}
