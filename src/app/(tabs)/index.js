import {useState} from "react";
import { View, StyleSheet, Alert, FlatList } from "react-native";
import Date from "../../component/date";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheam";
import Header from "../../component/header";
import Icon from "../../component/icon";
import Search from "../../component/search";
import Chips from "../../component/chips";
import Card from "../../component/card";
const Index = () => {
  const { color, fsize, spacing ,toggleTheme,themeMode} = useTheme();

  const styles = createStyles(color, fsize, spacing);
  const [search,setsearch]=useState("")
  const notifications=()=>{
    Alert.alert("Notification"," you have no notification");
  }
 const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
];

  return (
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
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <Card title={item.title} />
  )}
  ListHeaderComponent={
    <>
      <Search
        value={search}
        onChangeText={setsearch}
      />
      <Chips />
    </>
  }
  showsVerticalScrollIndicator={false}
/>

    </SafeAreaView>
  );
};

const createStyles = (color, fsize, spacing,) =>
  StyleSheet.create({
    continer: {
      backgroundColor: color.background,
      flex: 1,
      paddingHorizontal:spacing.s,
    },
    textcolor:{
      color:color.textPrimary,
    }
  });

export default Index;