import React from "react";
import { View, StyleSheet } from "react-native";
import Date from "../../component/date";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheam";
import Header from "../../component/header";
import Icon from "../../component/icon";

const Index = () => {
  const { color, fsize, spacing } = useTheme();

  const styles = createStyles(color, fsize, spacing);

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
          <Icon name="moon-outline" />
          <Icon name="notifications-outline" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const createStyles = (color, fSize, spacing) =>
  StyleSheet.create({
    continer: {
      backgroundColor: color.background,
      flex: 1,
    },
    textcolor:{
      color:color.textPrimary,
    }
  });

export default Index;