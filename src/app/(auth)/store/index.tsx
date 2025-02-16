import { View, Text, Button } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Tabs } from "expo-router";

export default function StoreScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-text">
      <Text className="text-lg font-bold">Bem-vindo à Store!</Text>
      <Button title="Sair" />
    </View>
  );
}
