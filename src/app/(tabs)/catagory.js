import React, { useState } from 'react';
import { StyleSheet, View,Text,FlatList, Pressable,Alert } from 'react-native';
import useTheme from '../../store/useTheam';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../component/header';
import Search from '../../component/search'
import CategoryCard from '../../component/catagorycard';
import { Categories } from '../data/catagori';
const Catagory = () => {
    const {color,fsize, spacing}=useTheme();
    const [catagorysearch,setCatagorysearch]=useState("");
       const  styles=createStyles(color,fsize, spacing)
    return (
        <SafeAreaView style={styles.colorof}>
        <Header style={styles.color} header={'catagory'}/>
        <Text style={{color:color.textPrimary,
  textAlign:'center',
  justifyContent:'center',  fontFamily:'Syne_600SemiBold', fontSize:fsize.title}} >explor  the all  thing  </Text>
   <Search value={catagorysearch}  onChangeText={setCatagorysearch} placeholder="catagort search ...."/>
      <FlatList  data={Categories}
      keyExtractor={item=>item.id} numColumns={2} style={{}} contentContainerStyle={{padding:spacing.lg,gap:spacing.ms}} columnWrapperStyle={{justifyContent:'space-between',gap:spacing.ms}} renderItem={({item})=>(
     <Pressable style={{ backgroundColor:color.surface,width:'50%',borderColor:'surfaceSecondary',borderWidth:1,borderRadius:15}}  onPress={ Alert.alert("Notification"," you have no notification")}>
      <CategoryCard 
      iconName={item.iconName}
  iconColor={item.iconColor}
  iconBackground={item.iconBackground}
  categoryName={item.categoryName}
  articleCount ={item.articleCount}/>
       </Pressable> 
      )}/>  
        </SafeAreaView>
    );
}

const createStyles= (color,fsize, spacing)=> StyleSheet.create({
  colorof:{
    backgroundColor:color.background, 
    flex:1,
    padding:spacing.l,
    paddingVertical:spacing.l,
    
  },
   color:{
  color:color.textPrimary,
  textAlign:'center',
  justifyContent:'center'}
})

export default Catagory;
