import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../store/useTheam";
import Tag from "./tag";
import Caption from "./caption";

import { getItem } from "../utils/storage";
import useBookmark from "../store/usebookmark";

const ListViwe = ({
  imageurl,
  tagLable,
  title,
  postedtime,
  readtime,
  colors,
}) => {
  const { color, fsize, spacing } = useTheme();

  const { addBookmark, removeBookmark } = useBookmark();

  const [isBookmark, setIsbookmark] = useState(false);

  useEffect(() => {
  const checkBookmarkStatus = async () => {
    try {
      const bookmarks = (await getItem("bookmarks")) || [];

      const bookmarked = bookmarks.some(
        (item) => item.title === title 
      );

      setIsbookmark(bookmarked);
    } catch (error) {
      console.log(error);
    }
  };

  checkBookmarkStatus();
}, [title]);

  const handleBookmark = async () => {
    try {
      if (isBookmark) {
        await removeBookmark(title);
        setIsbookmark(false);
      } else {
        await addBookmark({
          title,
          imageurl,
          tagLable,
          postedtime,
          readtime,
        });

        setIsbookmark(true);
      }
    } catch (error) {
      console.log("Bookmark Error:", error);
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingVertical: spacing.sm,
        },
      ]}
    >
      <Image
        source={imageurl}
        style={styles.image}
      />

      <View style={styles.content}>
        <Tag
          tagLable={tagLable}
          colors={colors || "transparent"}
        />

        <Text
          numberOfLines={2}
          style={[
            styles.title,
            {
              color: color.textPrimary,
              fontSize: fsize.body,
            },
          ]}
        >
          {title}
        </Text>

        <Caption
          postedtime={postedtime}
          readtime={readtime}
        />
      </View>

      <Pressable onPress={handleBookmark}>
        <Ionicons
          name={isBookmark ? "bookmark" : "bookmark-outline"}
          size={24}
          color={isBookmark ? "#007AFF" : "#999"}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    marginTop: 6,
  },
});

export default ListViwe;