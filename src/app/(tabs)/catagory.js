import React from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../store/useTheam';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../component/header';

const Catagory = () => {
    const {color,fsize, spacing}=useTheme();
       const  styles=createStyles(color,fsize, spacing)
    return (
        <SafeAreaView style={styles.colorof}>
        <Header style={styles.color} header={'catagory'}/>
        </SafeAreaView>
    );
}

const createStyles= (color,fsize, spacing)=> StyleSheet.create({
  colorof:{
    backgroundColor:color.background, 
    flex:1,
  },
   color:{
  color:color.textPrimary,
  textAlign:'center',
  justifyContent:'center'}
})

export default Catagory;
