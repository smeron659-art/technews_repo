import React, { useState } from 'react';
import { StyleSheet, View,Text,FlatList } from 'react-native';
import useTheme from '../../store/useTheam';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../component/header';
import Search from '../../component/search'

const Catagory = () => {
    const {color,fsize, spacing}=useTheme();
    const [catagorysearch,setCatagorysearch]=useState("");
       const  styles=createStyles(color,fsize, spacing)
    return (
        <SafeAreaView style={styles.colorof}>
        <Header style={styles.color} header={'catagory'}/>
        <Text style={{color:color.textPrimary,
  textAlign:'center',
  justifyContent:'center',  fontFamily:'Syne_600SemiBold', fontSize:fsize.title}} >explor  the all  thing  </Text>
   <Search value={catagorysearch}  onChangeText={setCatagorysearch} placeholder="catagort search ...."/>
      <FlatList/>  
        </SafeAreaView>
    );
}

const createStyles= (color,fsize, spacing)=> StyleSheet.create({
  colorof:{
    backgroundColor:color.background, 
    flex:1,
    padding:spacing.l,
    paddingVertical:spacing.l,
    
  },
   color:{
  color:color.textPrimary,
  textAlign:'center',
  justifyContent:'center'}
})

export default Catagory;
