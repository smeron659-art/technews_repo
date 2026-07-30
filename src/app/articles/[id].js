import { useLocalSearchParams } from "expo-router";
import { useEffect,useState } from "react";
import { Text,View,Image,Pressable,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery
 } from "convex/react";
 import { api } from "../../../convex/_generated/api";

export default function Articles(){
    const {id}=useLocalSearchParams();
    const  articles=useQuery(api.articles.getArticlesById ,{id});
    if(!articles)
return (
    <SafeAreaView>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Loading.....</Text>
      </View>
      </SafeAreaView>
      )
    return(
        <SafeAreaView style={styles.contener}>
            <Image  style={styles.image} source={{ uri: articles.ImageUrl }} />
            <View style={styles.readeandpost}>
             <Text>{articles.postedtime}</Text>
              <Text>{articles.readtime}</Text>
              </View>
           <Text style={styles.title}>{articles.title}</Text>
            <Text style={styles.category} >{articles.catagoryName}</Text>
            
               <Text style={styles.content}>{articles.content}</Text>
        </SafeAreaView>
    )
}
  const styles=StyleSheet.create({
contener:{
    flex:1,
      backgroundColor: "#F8F9FB",
} ,
image:{
    width:"100%",
    height:"30%",
    padding:20,
},
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 10,
  },
 category: {
    alignSelf: "flex-start",
    backgroundColor: "#7e8fa7",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 30,
    marginBottom: 15,
  },
readeandpost:{
 flexDirection:'row',
 justifyContent:'space-around',
 color:'#151618'
},
 content: {
    fontSize: 17,
    lineHeight: 30,
    color: "#333",
  },

  })      