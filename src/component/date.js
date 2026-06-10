import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import {day,month,dateNo}  from  '../utils/today';
import useTheam from '../store/useTheam';

const Date = () => {
     const { color,fSize}=useTheam();
    return (
        <View>
<Text style={[styles.text]}>  {day}, {month} ,{dateNo}</Text>
        </View>
    );
}
const createStyle=(color,fSize)=>StyleSheet.create({
text:{
    color:color.textSecondary,
    fontSizes:fSize.tag,
}})

export default Date;
