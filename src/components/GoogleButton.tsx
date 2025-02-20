import { ActivityIndicator, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { useAuth } from "@/context/auth.context";

import Button from "./Button";

export const GoogleButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { loginWithGoogle } = useAuth();

  async function onGoogleSign() {
    setIsLoading(true);
    await loginWithGoogle();
    setIsLoading(false);
  }

  // useEffect(() => {
  //   WebBrowser.warmUpAsync();
  //   return () => {
  //     WebBrowser.coolDownAsync();
  //   };
  // }, []);

  return (
    <Button
      variant="danger"
      className="items-center justify-center"
      disabled={isLoading}
      onPress={onGoogleSign}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <View className="flex flex-row gap-2 items-center justify-center">
          <Ionicons name="logo-google" size={16} color="#fff" className="" />
          <Text className="font-bold text-lg color-white ">
            Entrar com o Google
          </Text>
        </View>
      )}
    </Button>
  );
};
