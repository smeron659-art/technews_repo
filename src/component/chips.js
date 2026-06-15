import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import useTheme from '../store/useTheam';
import { Catagories } from '../app/data/catagori';
const Chips = () => {
 const {color,fsize, spacing}=useTheme();
 const[selectcatagory,setSelectcatagory]=useState("")
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={{margin:spacing.l ,flexGrow:0,}}>
            {Catagories.map((cat)=>(
            <Pressable   key={cat}
            onPress={()=>setSelectcatagory(cat)}
             style={{backgroundColor:selectcatagory===cat?color.primary:color.background ,marginRight:spacing.m,paddingVertical:spacing.m,paddingHorizontal:spacing.m,borderRadius:spacing.m}}>
                <Text style={{color:selectcatagory===cat?'white':color.textSecondary}}>
                {cat}
                </Text>
            </Pressable>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default Chips;
