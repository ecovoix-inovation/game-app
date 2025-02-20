import { useAuth } from "@/context/auth.context";
import { Redirect } from "expo-router";
import { ActivityIndicator } from "react-native";

export default function Index() {
  const { initialized, isSignedIn } = useAuth();

  if (initialized) {
    if (isSignedIn) {
      return <Redirect href="/(tabs)/home" />;
    } else {
      return <Redirect href="/(public)/welcome" />;
    }
  }

  return <ActivityIndicator className="flex-1 justify-center items-center" />;
}
