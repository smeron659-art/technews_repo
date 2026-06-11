import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { day, month, dateNo } from "../utils/today";
import useTheam from "../store/useTheam";

const Date = () => {
  const { color, fSize } = useTheam();

  const styles = createStyle(color, fSize);

  return (
    <View>
      <Text style={styles.text}>
        {day}, {month}, {dateNo}
      </Text>
    </View>
  );
};

const createStyle = (color, fSize,spacing) =>
  StyleSheet.create({
    text: {
      color: color.textSecondary,
      fontSize: fSize.tag, // ✅ fixed
      marginLeft:spacing.l
    },
  });

export default Date; 