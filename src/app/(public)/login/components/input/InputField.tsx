import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, FontAwesome, Feather } from "@expo/vector-icons";

interface InputFieldProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  isPassword = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="mb-6">
      <Text className="text-gray-700 font-semibold mb-1">{label}</Text>

      <View className="flex-row items-center border border-gray-300 bg-gray-50 rounded-lg px-4 py-2">
        <TextInput
          className="flex-1 bg-gray-100  rounded-lg  py-3"
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color="#555"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;
