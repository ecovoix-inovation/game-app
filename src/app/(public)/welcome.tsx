import React from "react";
import { useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading, Paragraph } from "@/components/Typograph";
import Button from "@/components/Button";

export default function WelcomeScreen() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push("/login");
  };

  const navigateToRegister = () => {
    router.push("/register");
  };

  return (
    <SafeAreaView className="flex flex-1 p-6 py-12 dark:bg-zinc-950">
      <View className="flex flex-1 items-center justify-center gap-y-4">
        <Heading variant="h1">Bem vindo</Heading>
        <Paragraph className="p-8 text-center">
          A comprehensive starter project for developing React Native and Expo
          applications with Supabase as the backend.
        </Paragraph>
      </View>
      <View className="gap-y-4 web:m-4">
        <Button variant="primary" onPress={navigateToLogin}>
          Login
        </Button>
        <Button variant="secondary" onPress={navigateToRegister}>
          Registrar
        </Button>
      </View>
    </SafeAreaView>
  );
}
