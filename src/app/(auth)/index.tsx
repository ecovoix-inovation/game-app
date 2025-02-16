import React from "react";
import { SafeAreaView } from "react-native";
import HomeScreen from "./home";

export default function AuthScreen() {
  return (
    <SafeAreaView className="flex-auto">
      <HomeScreen />
    </SafeAreaView>
  );
}
