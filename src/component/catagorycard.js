import React from 'react';
import { StyleSheet, View ,Text } from 'react-native';
import { Ionicons
 } from '@expo/vector-icons';
import useTheme from '../store/useTheam'
const { color, fsize,spacing } = useTheme();
const CategoryCard = ({
  iconName,
  iconColor,
  iconBackground,
  categoryName,
  articleCount,
}) =>{
    return (
        <View style={{backgroundColor:color.surfac}}>
         <View style={{ alignSelf:'flex-start',iconnBackground:iconBackground,justifyContent:'center',alignItems:'center',padding:spacing.sm,flex:1,borderRadius:spacing.sm,}}>
            <Ionicons  name={iconName} size={30} color={iconColor}/>
            </View>  
         <Text style={{fontSize:fsize.body,color:color.textPrimary,marginTop:spacing.l}}>{categoryName}</Text>
          <Text style={{fontSize:fsize.caption,color:color.textPrimary,marginTop:spacing.l}}>{articleCount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CategoryCard;
