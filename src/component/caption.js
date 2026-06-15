import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../store/useTheam';
const Caption = (author,readtime) => {
    const { color, fsize, spacing} = useTheme();
    return (
        <View>
            <Text>
            {author}
            </Text>
            <View style={{width:6,height:6,borderRadius:3,backgroundColor:color.overlayLight}}/>
            <Ionicons name='time-outline' size={fsize.caption} color={color.overlayLight}></Ionicons>
            <Text style={{color:color.overlayLight,fontSize:fsize.caption}}>{readtime}</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Caption;
