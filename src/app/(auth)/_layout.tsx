import {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  AntDesign,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from "@expo/vector-icons";
import { Stack, Slot, Tabs, useRouter } from "expo-router";

export default function _layout() {
  const router = useRouter();

  console.log("Rotas disponíveis:", router.navigate);
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#003000",
        tabBarInactiveTintColor: "#56a77e",
        tabBarStyle: { backgroundColor: "#fff2e6" },
      }}
    >
      <Tabs.Screen
        name="tasks/index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="bolt" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ranking/index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="trophy-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="store/index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="shopping-basket" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
