import React from "react";
import { View, Text } from "react-native";

export function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <View className="bg-green-700 flex-1 rounded-lg p-2 m-1">
      <Text className="text-white text-center text-base font-bold">
        {value}
      </Text>
      <Text className="text-white text-center text-xs">{title}</Text>
    </View>
  );
}
