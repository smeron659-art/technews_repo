
import {
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import useTheme from "../store/useTheam";

const CategoryCard = ({ item }) => {
  const { color, fsize } = useTheme();

  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/catagory/[catagoryName]",
      params: {
        catagoryName: item.categoryName,
      },
    });
  };

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [
        styles.card,
        {
          backgroundColor: color.surface,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >


      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor: item.iconBackground,
            shadowColor: item.iconBackground,
          },
        ]}
      >
        <Ionicons
          name={item.iconName}
          size={32}
          color={item.iconColor}
        />
      </View>


      <Text
        numberOfLines={1}
        style={[
          styles.categoryName,
          {
            color: color.textPrimary,
            fontSize: fsize.body,
          },
        ]}
      >
        {item.categoryName}
      </Text>



      <Text
        style={[
          styles.articleCount,
          {
            color: color.textSecondary,
            fontSize: fsize.caption,
          },
        ]}
      >
        {item.articleCount ?? 0} Articles
      </Text>

    </Pressable>
  );
};


const styles = StyleSheet.create({

  card: {
    width: "48%",
    height: 175,

    borderRadius: 22,

    padding: 14,

    justifyContent: "space-between",
    alignItems: "flex-start",

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.12,
    shadowRadius: 8,

    elevation: 4,
  },


  iconContainer: {
    width: 68,
    height: 68,

    borderRadius: 18,

    justifyContent: "center",
    alignItems: "center",

    shadowOffset: {
      width: 0,
      height: 5,
    },

    shadowOpacity: 0.3,
    shadowRadius: 8,

    elevation: 6,
  },


  categoryName: {
    fontFamily: "Syne_600SemiBold",
  },


  articleCount: {
    fontFamily: "Syne_400Regular",
  },

});

export default CategoryCard;