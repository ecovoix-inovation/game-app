import { Tabs } from "expo-router";
import { Redirect } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/auth.context";

export default function TabsLayout() {
  const { isSignedIn, initialized } = useAuth();

  // Se o usuário não estiver autenticado, redirecione para a tela de boas-vindas
  if (initialized && !isSignedIn) {
    return <Redirect href="/(public)/welcome" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: "#1f2937" }, // Cor de fundo da barra de abas
        tabBarActiveTintColor: "#fff", // Cor do ícone/texto ativo
        tabBarInactiveTintColor: "#9ca3af", // Cor do ícone/texto inativo
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" }, // Estilo do texto da aba
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
