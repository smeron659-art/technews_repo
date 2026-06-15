import React from "react"; 
import useTheme from "../../store/useTheam";
import { StyleSheet, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../component/header";
 
const Profile = () => {
 const { themeMode, toggleTheme } = useTheme();
console.log("Current Theme:", themeMode);

 const {color,fsize, spacing}=useTheme();
  const style = createStyles(color, fsize,  );
 
 
  return ( 
     <SafeAreaView style={style.container}>
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
      
const  createStyles =(color,fsize, spacing) => StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:color.background,
  }, 
  textcolor:{
    color:color.textPrimary,
  }      
});


export default Profile;     
     