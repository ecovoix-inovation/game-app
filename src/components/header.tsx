import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function Header() {
  return (
    <View className="flex-row bg-eco_green  justify-between items-center bg-background px-6 py-4">
      {/*Pontos Verdes */}
      <Text className="text-white font-bold text-lg">
        <FontAwesome name="recycle" size={16} /> 341
      </Text>
      {/* Moedas */}
      <Text className="text-white font-bold text-lg">
        <FontAwesome name="leaf" size={16} /> 2165
      </Text>
    </View>
  );
}
