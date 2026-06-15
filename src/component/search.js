import React, { version } from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import Icon from './icon';
import useTheme from '../store/useTheam';
import { FontSizes } from '../utils/spacing';

const Search = ({value,onchangetext}) => {
    const { color, fsize, spacing } = useTheme();
     const searchingTopic = (value) => {
  Alert.alert(
    "Searching",
    `You searched for: ${value}`
  );
};
 
    return (
        <View style={[styles.continer,{backgroundColor:color.surfaceSecondary,
         padding:spacing.s,
        borderRadius:spacing.m ,
        marginTop:spacing.x}]}> 
        <Icon name="search-outline"  action={()=> searchingTopic(value)}/>
        <TextInput   style={[styles.input,{color:color.textPrimary,
fontSizes:fsize.body}]}  value={value} onchangetext={onchangetext}
           placeholder=' search new,topic,authours....'
           placeholderTextColor={color.textSecondary}  />
        </View>
    );
}

const styles= StyleSheet.create({
    continer:{
        flexDirection:'row'
    },
    input:{
flex:1
    }
})

export default Search;
