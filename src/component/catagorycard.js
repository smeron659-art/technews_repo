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
        <View style={{backgroundColor:color.surface}}>
           
           <View
  style={{
    width: 60,
    height: 60,
    borderRadius: 18,
    backgroundColor: iconBackground,
    justifyContent: "center",
    alignItems: "center",

    elevation: 8,

    shadowColor: iconBackground,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  }}
>
  <Ionicons
    name={iconName}
    size={30}
    color={iconColor}
  />
</View>
  
         <Text style={{fontSize:fsize.body,color:color.textPrimary,marginTop:spacing.l}}>{categoryName}</Text>
          <Text style={{fontSize:fsize.caption,color:color.textPrimary,marginTop:spacing.l}}>{articleCount}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default CategoryCard;
