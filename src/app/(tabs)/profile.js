import React from "react";
import useTheme from "../../store/useTheam";
import { StyleSheet, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
 const { themeMode, toggleTheme } = useTheme();

console.log("Current Theme:", themeMode);

 const {color,fsize, spacing}=useTheme();
       const  styles=createStyles(color,fsize, spacing)
  return ( 
     <SafeAreaView style={styles.container}>
   
         <Header header={'profile'}/>
      <Button
  title="Change Theme"
  onPress={() => {
    console.log("Pressed");
    toggleTheme();
  }}
/>
   
    </SafeAreaView>
     )
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  }
});

export default Profile;