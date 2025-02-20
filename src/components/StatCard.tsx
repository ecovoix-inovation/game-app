import React from "react";
import { View, Text } from "react-native";
import Typography from "./Typograph";

export function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <View className="bg-green-700  justify-center items-center flex-1 rounded-lg py-4 px-2 gap-2">
      <Typography variant="p" className="text-white">{title}</Typography>
      <Typography variant="h3"  weight="bold" className="text-white">
        {value}
      </Typography>
      
    </View>
  );
}
