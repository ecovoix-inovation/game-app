import "../styles/global.css";

import { ActivityIndicator, View } from "react-native";
import { SplashScreen, Stack, router } from "expo-router";
import { AuthProvider, useAuth } from "@/context/auth.context";
import { useEffect, useState } from "react";
import { ClerkProvider } from "@clerk/clerk-expo";

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env
  .PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <AuthProvider>
        <AuthHandler />
      </AuthProvider>
    </ClerkProvider>
  );
}

function AuthHandler() {
  const { initialized, isSignedIn } = useAuth();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const init = async () => {
      await SplashScreen.preventAutoHideAsync();
      setTimeout(() => {
        setReady(true);
        SplashScreen.hideAsync();
      }, 1000);
    };
    init();
  }, []);

  if (!initialized || !ready) {
    return <ActivityIndicator className="flex-1 justify-center items-center" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(public)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
