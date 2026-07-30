import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from 'expo-router';
import { getItem } from "../utils/storage";
import { useEffect } from "react";
import {
  useFonts,
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from '@expo-google-fonts/syne';
const Layout = () => {
    const [fontLoaded]=useFonts({
         Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
    })
 const convex = new ConvexReactClient(
  process.env.EXPO_PUBLIC_CONVEX_URL
);

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
        <ConvexProvider client={convex}>
        <Stack screenOptions={{
            headerShown: false }} >
                
         <Stack.Screen name="(tabs)" />
          <Stack.Screen name="articles/[id]" />
        </Stack>
        </ConvexProvider>
    );
}

const styles = StyleSheet.create({})

export default Layout;
