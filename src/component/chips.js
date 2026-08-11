
import React from "react";
import {
  Pressable,
  ScrollView,
  Text,
} from "react-native";
import useTheme from "../store/useTheam";

const Chips = ({
  catagories,
  selectcatagory,
  setSelectcatagory,
}) => {
  const { color, fsize, spacing } = useTheme();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        margin: spacing.lg,
        flexGrow: 0,
      }}
    >
      {catagories?.map((cat) => (
        <Pressable
          key={cat._id}
          onPress={() =>
            setSelectcatagory(cat.categoryName)
          }
          style={{
            backgroundColor:
              selectcatagory === cat.categoryName
                ? color.primary
                : color.background,
            marginRight: spacing.ms,
            paddingVertical: spacing.m,
            paddingHorizontal: spacing.l,
            borderRadius: spacing.lg,
          }}
        >
         <Text
            style={{
              color:
                selectcatagory === cat.categoryName
                  ? "white"
                  : color.textSecondary,
              fontSize: spacing.lg,
            }}
          >
            {cat.categoryName}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Chips;

