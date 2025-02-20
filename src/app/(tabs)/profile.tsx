import { useAuth } from "@/context/auth.context";
import { View, Text, Button } from "react-native";
import { useAuth as useAuthClerk } from "@clerk/clerk-expo";
import { useEffect } from "react";

export default function ProfileScreen() {
  const { logout } = useAuth();
  const auth = useAuthClerk();

  console.log(auth);

  useEffect(() => {
    auth?.getToken().then(console.log);
  }, [auth]);

  return (
    <View className="flex-1 items-center justify-center bg-gray-900">
      <Text className="text-white text-lg">Perfil do Usuário</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
}
