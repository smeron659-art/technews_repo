import React from "react";
import useTheme from "../../store/useTheam";
import { StyleSheet, View, Button,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../component/header";
import { Ionicons } from "@expo/vector-icons";
import Profilcared from "../../component/profilcared";
import Statescared from"../../component/statescared"

import { Pre } from "../../data/preference";
import Profilelist from "../../component/profilelist"
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
<Profilcared/>   
<View style={{ flexDirection:'row',justifyContent:'space-between', marginTop:29}}>
<Statescared number={"126"} style={"seved"}/>
  <Statescared number={"60"} style={"read"}/>
  <Statescared number={"20"} style={"play"}/>
  </View>   
  <View style={{marginTop:20,marginBottom:15, justifyContent:'flex-start'}}>
    <Text style={{  color:color.textPrimary, FontSizes:fsize.title,}}> Preference</Text>
  </View>
<Profilelist preference={ Pre}/>
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