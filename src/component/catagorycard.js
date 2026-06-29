import React from 'react';
import { StyleSheet, View ,Text } from 'react-native';
import { Ionicons
 } from '@expo/vector-icons';
import useTheme from '../store/useTheam'
const { color, fsize,spacing } = useTheme();
const Catagorycard = ({iconname,iconColor,iconnBackground,catagoryname, articalcount}) => {
    return (
        <View>
         <View style={{iconnBackground:iconnBackground,justifyContent:'center',alignItems:'center',padding:spacing.sm,flex:1}}>
            <Ionicons  name={iconname} size={24} color={iconColor}/>
            </View>  
         <Text style={{fontSize:fsize.body,color:color.textPrimary}}>{catagoryname}</Text>
          <Text style={{fontSize:fsize.caption,color:color.textPrimary}}>{articalcount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Catagorycard;
