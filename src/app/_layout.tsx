import "@/styles/global.css";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { router, Slot } from "expo-router";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { TokenCache } from "@/store/tokenCache";

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
  .PUBLIC_CLERK_PUBLISHABLE_KEY as string;

function InitialLayout() {
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;
    if (isSignedIn) {
      router.replace("/(auth)");
    } else {
      router.replace("/(public)");
    }
  }, [isSignedIn]);

  return isLoaded ? (
    <Slot />
  ) : (
    <ActivityIndicator className="flex-1 justify-center items-center" />
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Display-Regular": require("../../assets/fonts/Aptos-Display.ttf"),
    "Display-Bold": require("../../assets/fonts/Aptos-Display-Bold.ttf"),
    "Display-SemiBold": require("../../assets/fonts/Aptos-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ClerkProvider
      publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={TokenCache}
    >
      <InitialLayout />
    </ClerkProvider>
  );
}
