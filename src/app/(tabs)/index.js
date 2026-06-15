import {useState} from "react";
import { View, StyleSheet, Alert } from "react-native";
import Date from "../../component/date";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheam";
import Header from "../../component/header";
import Icon from "../../component/icon";
import Search from "../../component/search";
import Chips from "../../component/chips";
const Index = () => {
  const { color, fsize, spacing ,toggleTheme,themeMode} = useTheme();

  const styles = createStyles(color, fsize, spacing);
  const [search,setsearch]=useState("")
  const notifications=()=>{
    Alert.alert("Notification"," you have no notification");
  }

  return (
    <SafeAreaView style={styles.continer}>
      <Date />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Header  style={styles.textcolor} header="Yonnews" />

        <View style={{ flexDirection: "row" }}>
         <Icon
  name={themeMode === "light" ? "moon-outline" : "sunny-outline"}
  action={toggleTheme}
/>
          <Icon name="notifications-outline"  action={notifications}/>
        </View>
      </View>
      <Search value={search} onChangeText={setsearch} />
      <Chips/>
    </SafeAreaView>
  );
};

const createStyles = (color, fSize, spacing,) =>
  StyleSheet.create({
    continer: {
      backgroundColor: color.background,
      flex: 1,
      padding:spacing.s,
    },
    textcolor:{
      color:color.textPrimary,
    }
  });

export default Index;