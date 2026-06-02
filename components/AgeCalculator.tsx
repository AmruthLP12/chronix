import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Text, View } from "react-native";

import AppButton from "./ui/AppButton";
import AppCard from "./ui/AppCard";
import DateField from "./ui/DateField";
import PageHeader from "./ui/PageHeader";
import SectionTitle from "./ui/SectionTitle";
import StatCard from "./ui/StatCard";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  totalDays: number;
};

export default function AgeCalculator() {
  const [fromDate, setFromDate] = useState(new Date(2000, 0, 1));
  const [toDate, setToDate] = useState(new Date());

  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);

  const [age, setAge] = useState<AgeResult | null>(null);

  const calculateAge = (): AgeResult => {
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

    const totalDays = Math.floor(
      (toDate.getTime() - fromDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    return {
      years,
      months,
      days,
      totalDays,
    };
  };

  const handleCalculate = () => {
    if (fromDate > toDate) {
      alert("Start Date cannot be greater than End Date");
      return;
    }

    setAge(calculateAge());
  };

  return (
    <View className="px-5 pb-5">
      <PageHeader
        title="Age Calculator"
        subtitle="Calculate precise intervals between dates"
      />

      <AppCard>
        <SectionTitle title="Select Dates" />

        <DateField
          label="Start Date"
          date={fromDate}
          icon="calendar"
          onPress={() => setShowFrom(true)}
        />

        <DateField
          label="End Date"
          date={toDate}
          icon="calendar-check-o"
          onPress={() => setShowTo(true)}
        />
      </AppCard>

      <AppButton
        title="Calculate Age"
        onPress={handleCalculate}
        className="mt-4"
      />

      {showFrom && (
        <DateTimePicker
          value={fromDate}
          mode="date"
          display="default"
          onChange={(_, selectedDate) => {
            setShowFrom(false);

            if (selectedDate) {
              setFromDate(selectedDate);
              setAge(null);
            }
          }}
        />
      )}

      {showTo && (
        <DateTimePicker
          value={toDate}
          mode="date"
          display="default"
          onChange={(_, selectedDate) => {
            setShowTo(false);

            if (selectedDate) {
              setToDate(selectedDate);
              setAge(null);
            }
          }}
        />
      )}

      {age && (
        <>
          <View className="mt-5">
            <SectionTitle title="Results" />
          </View>

          <View className="flex-row gap-3 mb-4">
            <StatCard value={age.years} label="Years" />
            <StatCard value={age.months} label="Months" />
            <StatCard value={age.days} label="Days" />
          </View>

          <AppCard>
            <Text className="text-[10px] font-bold text-slate-400 uppercase mb-2">
              Total Duration
            </Text>

            <Text className="text-2xl font-bold text-slate-900 dark:text-white">
              {age.totalDays.toLocaleString()}
            </Text>

            <Text className="text-sm text-slate-500 mt-1">Total Days</Text>
          </AppCard>
        </>
      )}
    </View>
  );
}
