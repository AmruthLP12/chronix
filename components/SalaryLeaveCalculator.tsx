import { toWords } from "number-to-words";
import { useState } from "react";
import { Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppButton from "./ui/AppButton";
import AppCard from "./ui/AppCard";
import InputField from "./ui/InputField";
import PageHeader from "./ui/PageHeader";
import SectionTitle from "./ui/SectionTitle";
import StatCard from "./ui/StatCard";

const MAX_LEAVE_DAYS = 300;

type LeaveSalaryResult = {
  daAmount: number;
  salaryWithDA: number;

  elDaysUsed: number;
  hplDaysUsed: number;
  totalDaysUsed: number;

  elLeaveSalary: number;
  hplLeaveSalary: number;

  leaveSalary: number;
};

export default function SalaryLeaveCalculator() {
  const [basicPay, setBasicPay] = useState("");
  const [daPercent, setDaPercent] = useState("");
  const [elBalance, setElBalance] = useState("");
  const [hplBalance, setHplBalance] = useState("");

  const [result, setResult] = useState<LeaveSalaryResult | null>(null);

  const amountInWords = (amount: number) => {
    return `${toWords(Math.round(amount))} Rupees Only`;
  };

  const handleCalculate = () => {
    if (
      !basicPay.trim() ||
      !daPercent.trim() ||
      !elBalance.trim() ||
      !hplBalance.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    const basic = Number(basicPay);
    const da = Number(daPercent);
    const el = Number(elBalance);
    const hpl = Number(hplBalance);

    if (isNaN(basic) || isNaN(da) || isNaN(el) || isNaN(hpl)) {
      alert("Invalid values");
      return;
    }

    const daAmount = (basic * da) / 100;

    const salaryWithDA = basic + daAmount;

    // EL FIRST
    const elDaysUsed = Math.min(el, MAX_LEAVE_DAYS);

    const remainingDays = Math.max(0, MAX_LEAVE_DAYS - elDaysUsed);

    // HPL NEXT
    const hplDaysUsed = Math.min(hpl, remainingDays);

    const totalDaysUsed = elDaysUsed + hplDaysUsed;

    // EL LEAVE SALARY
    const elLeaveSalary = (salaryWithDA * elDaysUsed) / 30;

    // HPL LEAVE SALARY
    const hplLeaveSalary =
      ((Math.round(basic / 2) + Math.round(daAmount / 2)) * hplDaysUsed) / 30;

    const leaveSalary = elLeaveSalary + hplLeaveSalary;

    setResult({
      daAmount,
      salaryWithDA,

      elDaysUsed,
      hplDaysUsed,
      totalDaysUsed,

      elLeaveSalary,
      hplLeaveSalary,

      leaveSalary,
    });
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      extraScrollHeight={40}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <PageHeader
        title="Leave Salary Calculator"
        subtitle="Calculate EL & HPL leave salary"
      />

      <AppCard>
        <SectionTitle title="Employee Details" />

        <InputField
          label="Basic Pay"
          value={basicPay}
          onChangeText={setBasicPay}
          keyboardType="numeric"
          placeholder="44900"
        />

        <InputField
          label="DA Percentage"
          value={daPercent}
          onChangeText={setDaPercent}
          keyboardType="numeric"
          placeholder="55"
        />

        <InputField
          label="EL Balance"
          value={elBalance}
          onChangeText={setElBalance}
          keyboardType="numeric"
          placeholder="300"
        />

        <InputField
          label="HPL Balance"
          value={hplBalance}
          onChangeText={setHplBalance}
          keyboardType="numeric"
          placeholder="180"
        />
      </AppCard>

      <AppButton
        title="Calculate Leave Salary"
        onPress={handleCalculate}
        className="mt-4"
      />

      {result && (
        <>
          <View className="mt-5">
            <SectionTitle title="Leave Usage" />
          </View>

          <View className="flex-row gap-3 mb-4">
            <StatCard value={result.elDaysUsed} label="EL Used" />

            <StatCard value={result.hplDaysUsed} label="HPL Used" />

            <StatCard value={result.totalDaysUsed} label="Total Days" />
          </View>

          <AppCard>
            <SectionTitle title="Salary Details" />

            <View className="gap-3">
              <Row label="DA Amount" value={result.daAmount} />

              <Row label="Salary + DA" value={result.salaryWithDA} />

              <Row label="EL Leave Salary" value={result.elLeaveSalary} />

              <Row label="HPL Leave Salary" value={result.hplLeaveSalary} />
            </View>
          </AppCard>

          <AppCard className="mt-4">
            <Text className="text-[10px] font-bold text-slate-400 uppercase mb-2">
              Total Leave Encashment
            </Text>

            <Text className="text-4xl font-bold text-blue-600 dark:text-blue-400">
              ₹ {Math.round(result.leaveSalary).toLocaleString()}
            </Text>

            <Text className="text-sm text-slate-500 dark:text-slate-400 mt-3">
              {amountInWords(result.leaveSalary)}
            </Text>

            <View className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <Text className="text-xs text-slate-400">
                Maximum Encashment Limit: 300 Days
              </Text>

              <Text className="text-xs text-slate-400 mt-1">
                EL Consumed First • HPL Used For Remaining Balance
              </Text>
            </View>
          </AppCard>
        </>
      )}
    </KeyboardAwareScrollView>
  );
}

type RowProps = {
  label: string;
  value: number;
};

function Row({ label, value }: RowProps) {
  return (
    <View className="flex-row justify-between">
      <Text className="text-slate-500 dark:text-slate-400">{label}</Text>

      <Text className="font-semibold text-slate-900 dark:text-white">
        ₹ {Math.round(value).toLocaleString()}
      </Text>
    </View>
  );
}
