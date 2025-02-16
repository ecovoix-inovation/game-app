import React from "react";
import { SafeAreaView } from "react-native";
import LoginScreenComp from "./login";

export default function AuthScreen() {
  return (
    <SafeAreaView className="flex-1">
      <LoginScreenComp />
    </SafeAreaView>
  );
}
