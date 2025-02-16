import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

export function Button({ title, isLoading, icon, ...rest }: ButtonProps) {
  return (
    <View className="flex-auto justify-center">
      <TouchableOpacity
        disabled={isLoading}
        activeOpacity={0.4}
        {...rest}
        className="flex-row items-center bg-red-500 rounded-full p-3"
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Ionicons name={icon} size={40} color="#fff" className=" mr-5" />
            <Text className="font-bold text-xl  color-white ">{title}</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}
/*
<TouchableOpacity className="flex-row items-center justify-start border  px-3 py-4 rounded-full">
  <Text className=" text-center px-4 text-2xl items-center text-black font-semibold">
    Entrar com o Google
  </Text>
</TouchableOpacity>;
bg-text w-4/5 p-4 rounded-3xl shadow-3xl border  h-72 justify-center border-gray-300*/
