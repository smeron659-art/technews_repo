import { useLocalSearchParams } from "expo-router";
import { useEffect,useState } from "react";
import { Text,View,Image,Pressable,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery
 } from "convex/react";
 import { api } from "../../../convex/_generated/api";

export default function Articles(){
    const  articles=useQuery(api.articles.getArticlesById ,{id});
    return(
        <SafeAreaView style={styles.contener}>
            <Text> articles detele</Text>
        </SafeAreaView>
    )
}
  const styles=StyleSheet.create({
contener:{
    flex:1,
}
  })