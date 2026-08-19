import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SectionHeader from "@/components/ui/SectionHeader";
import UtilityCard from "@/components/ui/UtilityCard";

import {
  ACTIVE_UTILITIES,
  UPCOMING_UTILITIES,
} from "../../constants/utilities";

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const activeCount = ACTIVE_UTILITIES.length;

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(ACTIVE_UTILITIES.map((item) => item.category)),
    ];

    return ["All", ...uniqueCategories];
  }, []);

  const filteredUtilities = useMemo(() => {
    if (selectedCategory === "All") {
      return ACTIVE_UTILITIES;
    }

    return ACTIVE_UTILITIES.filter(
      (item) => item.category === selectedCategory,
    );
  }, [selectedCategory]);

  return (
    <SafeAreaView className="flex-1 bg-slate-50 dark:bg-[#0B0F19]">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 10,
          paddingBottom: 40,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-5 pb-4 border-b border-slate-200 dark:border-slate-800/40">
          <Text className="text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider">
            Personal Helper Workspace
          </Text>
        </View>

        <SectionHeader
          title="Active Utilities"
          badge={`${activeCount} Active`}
        />

        {/* Category Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 8,
            paddingVertical: 12,
          }}
        >
          {categories.map((category) => {
            const active = selectedCategory === category;

            return (
              <Pressable
                key={category}
                onPress={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border ${
                  active
                    ? "bg-slate-900 border-slate-900 dark:bg-white dark:border-white"
                    : "bg-white border-slate-200 dark:bg-slate-900 dark:border-slate-800"
                }`}
              >
                <Text
                  className={`text-xs font-semibold ${
                    active
                      ? "text-white dark:text-slate-900"
                      : "text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        {/* Filtered Utilities */}
        {filteredUtilities.map((item) => (
          <UtilityCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon as any}
            route={item.route}
          />
        ))}

        <View className="mt-3">
          <SectionHeader title="Pipeline Modules" badge="Future Growth" />
        </View>

        {UPCOMING_UTILITIES.map((item) => (
          <UtilityCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon as any}
            active={false}
            comingSoon
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
