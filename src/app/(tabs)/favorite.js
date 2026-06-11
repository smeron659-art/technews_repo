
import React from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../store/useTheam';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '@react-navigation/elements';

const Favorite = () => {
    const {color,fsize, spacing}=useTheme();
       const  styles=createStyles(color,fsize, spacing)
    return (
        <SafeAreaView style={styles.colorof}>
        <Header header={'Favorte'}/>
        </SafeAreaView>
    );
}

const createStyles= (color,fsize, spacing)=> StyleSheet.create({
  colorof:{
    backgroundColor:color.backgroundColor,
    flex:1,
  }
})


export default Favorite;
