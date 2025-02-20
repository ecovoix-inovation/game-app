import { Stack } from "expo-router";
import { useAuth } from "@/context/auth.context";
import { Redirect } from "expo-router";

export default function PublicLayout() {
  const { isSignedIn, initialized } = useAuth();

  // Se o usuário já estiver autenticado, redirecione para a tela inicial
  if (initialized && isSignedIn) {
    return <Redirect href="/(tabs)/home" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" options={{ title: "Welcome" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Register" }} />
    </Stack>
  );
}
