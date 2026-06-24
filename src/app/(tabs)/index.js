import {useState} from "react";
import { View, StyleSheet, Alert, FlatList, Pressable,Text } from "react-native";
import Date from "../../component/date";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheam";
import Header from "../../component/header";
import Icon from "../../component/icon";
import Search from "../../component/search";
import Chips from "../../component/chips";
import Card from "../../component/card";
import{ DATA} from "../data/data";
import ListViwe from "../../component/listViwe";

const Index = () => {
  const { color, fsize, spacing ,toggleTheme,themeMode} = useTheme();

  const styles = createStyles(color, fsize, spacing);
  const [search,setsearch]=useState("")
  const notifications=()=>{
    Alert.alert("Notification"," you have no notification");
  }
 
 const Listheader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 15,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: color.textPrimary,
          fontFamily: "Syne_700Bold",
          marginTop:spacing.ms,
        }}
      >
        Latest Store
      </Text>

      <Pressable onPress={notifications}>
        <Text
          style={{
            color: color.primary,
            fontSize: 14,
          }}
        >
          See All
        </Text>
      </Pressable>
    </View>
  );
}; return (
    <SafeAreaView style={styles.continer}>
      <Date />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Header  style={styles.textcolor} header="TechPulse" />

        <View style={{ flexDirection: "row" }}>
         <Icon
  name={themeMode === "light" ? "moon-outline" : "sunny-outline"}
  action={toggleTheme}
/>  
          <Icon name="notifications-outline"  action={notifications}/>
        </View>
      </View> 
      <FlatList
 
   data={DATA} 
   keyExtractor={(item)=>item.id}

  ListHeaderComponent={
    <>
      <Search
        value={search}
        onChangeText={setsearch}
      />
      <Chips /> 
     <Card title={"HeCard"} /> 
     <Listheader/>
    </>
    
  }
  showsVerticalScrollIndicator={false}
  renderItem={({item})=>(<ListViwe title={title.item} postedtime={postedtime.item} readtime={readtime.item}/>)}
/>

    </SafeAreaView>
  );
};

const createStyles = (color, fsize, spacing,) =>
  StyleSheet.create({
    continer: {
      backgroundColor: color.background,
      flex: 1,
      paddingHorizontal:9,
  
    },
    textcolor:{
      color:color.textPrimary,
    }
  });

export default Index;   