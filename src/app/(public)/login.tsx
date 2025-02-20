import { TextInput, View, Text } from "react-native";
import { useAuth } from "@/context/auth.context";
import { useCallback, useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading, Paragraph } from "@/components/Typograph";
import Button from "@/components/Button";
import { GoogleButton } from "@/components/GoogleButton";
import { useSignIn } from "@clerk/clerk-expo";
// import { GoogleButton } from "@/components/GoogleButton";

export default function LoginScreen() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, setActive, isLoaded } = useSignIn();

  // Handle the submission of the sign-in form
  const onSignInPress = useCallback(async () => {
    if (!isLoaded) return;
    setError("");

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: email,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        setError("Não foi possível realizar login");
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setError("Não foi possível realizar login");
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, email, password]);

  const handleSignUpRedirect = () => {
    router.push("/register"); // Redireciona para a tela de registro
  };

  return (
    <SafeAreaView className="flex flex-1 justify-center items-center w-full gap-16 px-6 py-12 dark:bg-zinc-950">
      <View className="w-full justify-center items-center px-6">
        <Heading variant="h3" className="mb-8">
          Login
        </Heading>
        <View className="w-full gap-4 ">
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
        {error && <Text className="text-red-500 my-4">{error}</Text>}
      </View>

      <View className="w-full px-6">
        <Button onPress={onSignInPress}>Entrar</Button>

        <Button
          variant="ghost"
          textClassName="font-normal"
          onPress={handleSignUpRedirect}
        >
          Ainda não tem uma conta?{" "}
          <Text className="font-semibold">Crie uma agora!</Text>
        </Button>

        <Paragraph className="text-center text-gray-500 mb-4">OU</Paragraph>
        <GoogleButton />
      </View>
    </SafeAreaView>
  );
}
