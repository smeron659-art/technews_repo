import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SystemBars } from "react-native-edge-to-edge";
import  useTheam  from "../../store/useTheam";

export default function Layout() {
const {color}= useTheam();
  return (
    <>
      <SystemBars style="auto" />

      <Tabs
        screenOptions={{
          tabBarStyle: {
            borderTopWidth: 0,
          },
          tabBarActiveTintColor:color.accentprimary,
          tabBarInactiveBackgroundColor:color.textMuted,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({  color ,focused}) => (
              <Ionicons name={ focused? 'home':'home-outline'} size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="catagory"
          options={{
            title: "catagory",
            headerShown: false,
            tabBarIcon: ({  color,focused }) => (
              <Ionicons name={ focused? 'gride':'gride-outline'}size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="favorite"
          options={{
            title: "favorite",
            headerShown: false,
            tabBarIcon: ({ color,focused}) => (
              <Ionicons name={ focused? 'timer':'timer-outline'} size={size} color={color} />
            ),
          }}
        />
         <Tabs.Screen
          name="profile"
          options={{
            title: "profile",
            headerShown: false,
            tabBarIcon: ({color,focused }) => (
              <Ionicons name={ focused? 'person':'person-outline'}size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}