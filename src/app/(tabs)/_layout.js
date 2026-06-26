import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SystemBars } from "react-native-edge-to-edge";
import useTheam from "../../store/useTheam";import {
  useFonts,
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from '@expo-google-fonts/syne';
import { useEffect } from "react";
import { getItem } from "../../utils/storage";
export default function Layout() {
  const { color,setTheme } = useTheam();
    useEffect(() => {
  const loadTheme = async () => {
    const storedTheme = await getItem("themeMode");

    if (storedTheme) {
      setTheme(storedTheme);
    }
  };

  loadTheme();
}, []);
  return (
    <>
      <SystemBars style="auto" />
 
      <Tabs
        screenOptions={{
          tabBarStyle: {
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: color.primary,
          tabBarInactiveTintColor: color.textSecondary,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="home-outline" size={24} color={color} />
            ),
          }}
        />

       <Tabs.Screen
  name="catagory"
  options={{
    title: "Category",
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="apps" size={size} color={color} />
    ),
  }}
/>
        <Tabs.Screen
          name="favorite"
          options={{
            title: "Favorite",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="heart-outline" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-outline" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
} 