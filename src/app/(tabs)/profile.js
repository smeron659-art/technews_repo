import React from "react";
import useTheme from "../../store/useTheam";
import { StyleSheet, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../component/header";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const { themeMode, toggleTheme, color, fsize, spacing } = useTheme();

  console.log("Current Theme:", themeMode);

  const style = createStyles(color, fsize, spacing);

  return (
    <SafeAreaView style={style.container}>

    <View style={{ justifyContent:"space-between" ,flexDirection:'row'}}>
      <Header header={"profile"} />
      <View style={{backgroundColor:color.lowerback, padding:spacing.md, alignItems:'center' ,height:50,width:50,borderRadius:10}}>
      <Ionicons name="settings-outline" size={23} color={color.textPrimary} />
</View>
</View>
      
    </SafeAreaView>
  );
};

const createStyles = (color, fsize, spacing) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
      padding:spacing.l
    },
    textcolor: {
      color: color.textPrimary,
    },
  });

export default Profile;