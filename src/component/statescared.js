import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import useTheme from '../store/useTheam';
const Statescared = ({number,style}) => {
    const {color,spacing,fsize}=useTheme();
    return (
        <View style={{backgroundColor:color.overlayLight ,width:110,height:90,borderRadius:20 ,justifyContent:'center', alignItems:'center'}}>

           <Text style={{color:color.textPrimary ,fontSize:fsize.title}}>{number}</Text> 
           <Text style={{color:color.textPrimary}}>{style}</Text> 
        </View>
    );
}

const styles = StyleSheet.create({})

export default Statescared;

