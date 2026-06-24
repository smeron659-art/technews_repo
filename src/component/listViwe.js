import React from 'react';
import { StyleSheet, View,Text ,Image,Pressable} from 'react-native';
import { Ionicons
 } from '@expo/vector-icons';
 import useTheme from '../store/useTheam';
 import Tag from './tag';
import Caption from './caption';
const ListViwe = ({imageurl,tagLable,title,postedtime, readtime}) => {
    const {color,fsize,spacing}=useTheme();
    return (
        <View style={[styles.continer, {paddingVertical:spacing.m}]}>
           <Pressable  onPress={() => alert('Card pressed')}>
            <Image source={{url:imageurl}} style={styles.imageur}/>
            </Pressable> 
            <Tag tagLable={tagLable}/>

            <Text numberOfLines={2} style={[styles.textstle,{color:color.textPrimary,fontSize:fsize.body}]}>{title } </Text>
            <Caption   postedtime={postedtime}  readtime={readtime} />
            <Ionicons name="bookmark-outline" size={24} color={color.primary}/>
        </View>
    ); 
}

const styles = StyleSheet.create({
    continer:{
         flexDirection:"row",
        alignItems:"flex-start", 
    },
    imageur:{
        width:'110',
    height:'110',

    }
})

export default ListViwe;
