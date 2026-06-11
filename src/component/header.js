import React from 'react';
import useTheme from '../store/useTheam';
import { StyleSheet, View,Text } from 'react-native';
import {
   useFonts, 
  Syne_400Regular,
  Syne_500Medium,
  Syne_600SemiBold,
  Syne_700Bold,
  Syne_800ExtraBold,
} from "@expo-google-fonts/syne";

const Header = ({header}) => {
    const {color,fsize,spacing}=useTheme();
    return (
        <Text  style={StyleSheet.headertext}>{header}</Text>
     
    );
}

const creatStyles=(color,fsize) => StyleSheet.create({
headertext:{
     fontSize:fsize.heading,
      fontFamily: Syne_400Regular,
      marginLeft:spacing.x,
      color:color.textPrimary,
}
})

export default Header;
