import { View, Text, Button, ScrollView, Image } from "react-native";
import { useAuth } from "@clerk/clerk-expo";
import { Tabs } from "expo-router";
import { Header } from "../components/header";
import { ProgressBar } from "../components/ProgressBar";
import { StatCard } from "../components/StatCard";
import { AchievementList } from "../components/AchievementList";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-eco_green_light px-4">
      {/* header */}
      <Header />

      {/* Informações do usuário */}
      <View className="bg-white rounded-xl p-4 mt-4">
        <View className="flex-row gap-2 ">
          {/* Avatar */}
          <View className="size-[7.2rem] bg-gray-300 rounded-3xl justify-center items-center overflow-hidden">
            <Image
              source={{
                uri: "https://via.placeholder.com/150", // Coloque aqui a URL da imagem do usuário
              }}
              className="w-full h-full"
            />
          </View>

          {/* User Info */}
          <View className="flex-1 ml-4 mt-2">
            <Text className="text-lg font-bold text-gray-800">
              Reciclador Iniciante
            </Text>

            <Text className="text-3xl font-bold text-gray-900 mt-1">
              Douglas Mendes
            </Text>
          </View>
        </View>
        {/* Barra de progresso */}
        <ProgressBar progress={91} label="490/500 XP" />
        <View className="flex-row justify-between mt-4">
          <StatCard title="Nível Atual" value="10" />
          <StatCard title="Posição Ranking" value="13" />
          <StatCard title="Moedas" value="341" />
        </View>
      </View>
      {/* Conquistas */}
      <View className="mt-8">
        <Text className="text-lg font-bold text-gray-800 mb-2">Conquistas</Text>
        <AchievementList
          data={[
            {
              title: "Coletor de primeira viagem",
              description: "Reciclar um total de 50 latinhas",
              progress: 96,
              current: 48,
              total: 50,
            },
            {
              title: "Mestre das missões",
              description: "Completar 30 missões",
              progress: 46,
              current: 14,
              total: 30,
            },
            {
              title: "Guardião da natureza",
              description: "Reciclar 1000 latinhas",
              progress: 35,
              current: 345,
              total: 1000,
            },
          ]}
        />
      </View>
    </ScrollView>
  );
}
