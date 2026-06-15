import React from 'react';
import { StyleSheet ,View,Text } from 'react-native';
import useTheme from '../store/useTheam';
const Tag = (tagLable) => {
    const {color,fsize, spacing}=useTheme();
    return (
        <View style={{flexDirection:"row",alignSelf:"flex-start",justifyContent:"center",alignItems:"center",backgroundColor:color.liveBadge,paddingHorizontal:spacing.m,paddingVertical:spacing.spacing.s,borderRadius:spacing.m}}>
           <View style={[styles.dot,{backgroundColor:"white",marginRight:spacing.s} ]}/>
          <Text style={{color:"white",marginRight:spacing.s}}>{tagLable}</Text>
        </View>
    );
}
const styles=StyleSheet.create({
dot:{
    width:6,
    height:6,
    borderRadius:3,
backgroundColor:'transparent', 
}
})
export default Tag;
