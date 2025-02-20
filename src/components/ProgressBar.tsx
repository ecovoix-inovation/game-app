import React from "react";
import { View, Text } from "react-native";

export function ProgressBar({
  progress,
  label,
}: {
  progress: number;
  label: string;
}) {
  return (
    <View>
      <View className="w-full h-10 bg-gray-300 rounded-full overflow-hidden">
        <View
          style={{ width: `${progress}%` }}
          className="h-full bg-gold_secondary rounded-full"
        />
      </View>
      <Text className="absolute top-0 right-0 left-0 bottom-0 justify-center items-center text-center text-sm text-gray-600 mt-2 flex ">
        {label}
      </Text>
    </View>
  );
}
