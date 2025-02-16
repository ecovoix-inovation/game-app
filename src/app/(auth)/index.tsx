import { Text, View, Image } from "react-native";
import { SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import { Button } from "../(public)/login/components/button/Button";

export default function Home() {
  const { user } = useUser();
  const { signOut } = useAuth();
  return (
    <View className="flex-1 justify-center items-center bg-eco_blue">
      {/* Logomarca */}

      <View className="bg-text w-4/5  rounded-3xl  border  h-72 justify-center items-center  border-gray-300">
        {/* Botão de Login com o Google */}
        <Image
          source={{ uri: user?.imageUrl }}
          className="flex-1 w-96 h-96 border-r-8"
        />
        <Text className="text-4xl">Olá {user?.firstName}</Text>
        <Button icon="exit" title="Sair" onPress={() => signOut()} />
      </View>
    </View>
  );
}
