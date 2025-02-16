import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { ProgressBar } from "./ProgressBar";

export function AchievementList({
  data,
}: {
  data: {
    title: string;
    description: string;
    progress: number;
    current: number;
    total: number;
  }[];
}) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View className="bg-white rounded-xl p-4 mt-4">
          <View className="flex-row gap-2 ">
            <View className="size-2 bg-gray-300 rounded-3xl justify-center items-center overflow-hidden">
              <Image
                source={{
                  uri: "https://via.placeholder.com/150", // Coloque aqui a URL da imagem do usuário
                }}
                className="w-full h-full"
              />
            </View>
          </View>
          <Text className="text-gray-800 font-bold">{item.title}</Text>
          <Text className="text-gray-600 text-sm">{item.description}</Text>
          <ProgressBar
            progress={item.progress}
            label={`${item.current}/${item.total}`}
          />
        </View>
      )}
    />
  );
}
