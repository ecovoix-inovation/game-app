import React, { useEffect, useState } from "react";
import { View } from "react-native";

import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

import Logo from "assets/logo.svg";
import { Button } from "./components/button/Button";
import { useOAuth } from "@clerk/clerk-expo";

const LoginScreenComp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const googleOAuth = useOAuth({ strategy: "oauth_google" });

  async function onGoogleSign() {
    try {
      setIsLoading(true);
      const redirectUrl = Linking.createURL("/");
      const oAuthFlow = await googleOAuth.startOAuthFlow({
        redirectUrl,
      });

      if (oAuthFlow.authSessionResult?.type === "success") {
        if (oAuthFlow.setActive) {
          await oAuthFlow.setActive({ session: oAuthFlow.createdSessionId });
        }
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);
  return (
    <View className="flex-auto justify-start items-center bg-eco_blue">
      {/* Logomarca */}
      <View className="py-16">
        <View className="bg-eco_pink  rounded-full w-64 h-64 items-center justify-center">
          <Logo width={160} height={200} />
        </View>
      </View>
      <View className="bg-text w-4/5 p-4 rounded-3xl shadow-3xl border  h-72 justify-center  border-gray-300">
        {/* Botão de Login com o Google */}
        <Button
          icon="logo-google"
          title="Entrar com Google"
          onPress={onGoogleSign}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
};

export default LoginScreenComp;
