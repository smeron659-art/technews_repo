import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { day, month, dateNo } from "../utils/today";
import useTheam from "../store/useTheam";

const Date = () => {
  const { color, fsize,spacing } = useTheam();

  const styles = createStyle(color, fsize,spacing);

  return (
    <View>
      <Text style={styles.text}>
        {day}, {month}, {dateNo}
      </Text>
    </View>
  );
};

const createStyle = (color, fsize,spacing) =>
  StyleSheet.create({
    text: {
      color: color.textSecondary,
      fontSize: fsize.tag, // ✅ fixed
      
    },
  });

export default Date;       