import React from 'react';
import Ionicons from "@expo/vector-icons/Ionicons";
import {  View ,StyleSheet} from 'react-native';
import useTheme from '../store/useTheam';

 export default function Icon ({name}){
     const {color,fsize, spacing}=useTheme();
        const  style=createStyles(color,fsize, spacing)
    return (
        <View style={style.continer}>
        <Ionicons name={name} size={24}  color={color.textSecondary}/>
        </View>
    );
}

const createStyles = (color,fsize, spacing)=>StyleSheet.create({
    continer:{
        backgroundColor:color.lowerback,
        height:50,
        width:50,
  sm: 8,
        margin:spacing.sm,
        borderRadius:11,
        alignSelf:'flex-end',
        justifyContent:'center',
        alignIalignIteam:'center',
    }
})


