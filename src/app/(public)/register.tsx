// app/signup/index.tsx
import { TextInput, View, Text } from "react-native";

import { useState } from "react";
import { useRouter } from "expo-router";
import { Heading } from "@/components/Typograph";
import Button from "@/components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSignUp } from "@clerk/clerk-expo";

export default function RegisterScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress: email,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <>
        <SafeAreaView className="flex-1 w-full justify-center items-center px-6 py-12 dark:bg-zinc-950">
          <View className="flex-1 w-full justify-center items-center gap-6">
            <Heading variant="h4">Verify your email</Heading>
            <TextInput
              value={code}
              placeholder="Enter your verification code"
              placeholderTextColor="#666666"
              className="w-full p-4 border dark:text-zinc-50 border-zinc-400 rounded-full"
              onChangeText={(code) => setCode(code)}
            />
            <Button onPress={onVerifyPress}>Verificar</Button>
          </View>
        </SafeAreaView>
      </>
    );
  }

  return (
    <SafeAreaView className="flex-1 w-full justify-center items-center px-6 py-12 dark:bg-zinc-950">
      <View className="w-full flex-1 justify-center items-center px-6">
        <Heading variant="h3" className="mb-8">
          Register
        </Heading>
        <View className="w-full gap-4">
          <TextInput
            className="w-full p-4 border dark:text-zinc-50 border-zinc-400 rounded-full"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            className="w-full p-4 border dark:text-zinc-50 border-zinc-400 rounded-full"
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      <View className="w-full px-6">
        <Button variant="primary" className="w-full" onPress={onSignUpPress}>
          Registrar
        </Button>
        <Button
          variant="ghost"
          className="w-full"
          onPress={() => router.push("/login")}
        >
          Já possui uma conta? Login
        </Button>
      </View>
    </SafeAreaView>
  );
}
