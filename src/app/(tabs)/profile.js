import React from "react";
import useTheme from "../../store/useTheam";
import { StyleSheet, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../component/header";

const Profile = () => {
  const { themeMode, toggleTheme, color, fsize, spacing } = useTheme();

  console.log("Current Theme:", themeMode);

  const style = createStyles(color, fsize, spacing);

  return (
    <SafeAreaView style={style.container}>
      <Header header={"profile"} />

      <Button title="Change Theme" onPress={toggleTheme} />
    </SafeAreaView>
  );
};

const createStyles = (color, fsize, spacing) =>
  StyleSheet.create({
    container: {
      flex: 1, // ✅ makes background full screen
      padding: 20,
      backgroundColor: color.background,
    },
    textcolor: {
      color: color.textPrimary,
    },
  });

export default Profile;