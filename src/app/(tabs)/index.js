import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import Date from '../../component/date';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';
import Header from '../../component/header';
const Index = () => {
   const {color,fsize, spacing}=useTheme();
    const  style=creatStyles(color,fsize, spacing)
  return (
    <SafeAreaView style={StyleSheet.continer}>
  <Date/>
  <Header header={'yonnews'}/>
    </SafeAreaView>
  );
}
 const creatStyles=(color,fsize)=>StyleSheet.create({
   continer:{
    backgroundColor:color.backgroundColor,
    flex:1
   }

 })

export default Index;
