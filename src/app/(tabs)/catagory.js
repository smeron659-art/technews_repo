import  { useState } from 'react';
import { StyleSheet, View,Text,FlatList, Pressable,Alert } from 'react-native';
import useTheme from '../../store/useTheam';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../component/header';
import Search from '../../component/search'
import CategoryCard from '../../component/catagorycard';
import { Categories } from '../../data/catagori';
const Catagory = () => {
    const {color,fsize, spacing}=useTheme();
    const [catagorysearch,setCatagorysearch]=useState([]);
       const  styles=createStyles(color,fsize, spacing)
    return (
        <SafeAreaView style={styles.colorof}>
        <Header style={styles.color} header={'catagory'}/>
        <Text style={{color:color.textPrimary,
  textAlign:'center',
  justifyContent:'center',  fontFamily:'Syne_600SemiBold', fontSize:fsize.title}} >Explor  the all  thing  </Text>
   <Search value={catagorysearch}  onChangeText={setCatagorysearch} placeholder="Catagor search ...."/>
     <FlatList
  data={Categories}
  keyExtractor={(item) => item.id.toString()}
  numColumns={2}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{
    padding: spacing.lg,
    paddingBottom: 30,
    gap: spacing.lg,
  }}
  columnWrapperStyle={{
    justifyContent: "space-between",
    marginBottom: spacing.lg,
  }}
  renderItem={({ item }) => (
<Pressable
  onPress={() => Alert.alert("Notification", "You have no notification")}
  style={({ pressed }) => [
    {
      width: "48%",
      backgroundColor: color.surface,
      borderRadius: 18,
      padding: 16,

      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.08)",

      elevation: pressed ? 16 : 8,

      shadowColor: "#353131",
      shadowOffset: {
        width: 0,
        height: pressed ? 12 : 8,
      },
      shadowOpacity: pressed ? 0.35 : 0.2,
      shadowRadius: pressed ? 16 : 10,

      transform: [
        {
          scale: pressed ? 0.97 : 1,
        },
      ],
    },
  ]}
>
  <CategoryCard
    iconName={item.iconName}
    iconColor={item.iconColor}
    iconBackground={item.iconBackground}
    categoryName={item.categoryName}
    articleCount={item.articleCount}
  />
</Pressable>
  )}
/> 
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
