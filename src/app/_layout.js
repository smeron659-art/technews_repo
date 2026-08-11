
import { useEffect } from "react";
import { Stack } from "expo-router";
import {
  ConvexProvider,
  ConvexReactClient,
} from "convex/react";
import { useFonts } from "@expo-google-fonts/syne";

import {
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from "@expo-google-fonts/syne";

import { getItem } from "../utils/storage";
import useTheme from "../store/useTheam";

const convex = new ConvexReactClient(
  process.env.EXPO_PUBLIC_CONVEX_URL
);

const Layout = () => {
  const { setTheme } = useTheme();

  const [fontLoaded] = useFonts({
    Syne_400Regular,
    Syne_500Medium,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
  });

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await getItem("themeMode");

        if (storedTheme) {
          setTheme(storedTheme);
        }
      } catch (error) {
        console.log("Theme loading error:", error);
      }
    };

    loadTheme();
  }, [setTheme]);

  if (!fontLoaded) {
    return null;
  }
  return (
    <ConvexProvider client={convex}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="articles/[id]" />
      </Stack>
    </ConvexProvider>
  );
};

export default Layout;
