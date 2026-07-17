import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../store/useTheam";
import Tag from "./tag";
import Caption from "./caption";
import { getItem } from "../utils/storage";
import useBookmark from "../store/usebookmark";

const ListViwe = ({item}) => {
  const { color, fsize, spacing } = useTheme();
  const { addBookmark, removeBookmark } = useBookmark();

  const [isBookmark, setIsbookmark] = useState(false);

  useEffect(() => {

  const checkBookmarkStatus = async () => {

    try {

      const storedBookmarks = await getItem("bookmarks");

      const bookmarkList = Array.isArray(storedBookmarks)?storedBookmarks
        : [];
 
      const bookmarked = bookmarkList.some(
        (bookmark) => bookmark.title === item.title
      );

     setIsbookmark(bookmarked);

      

    } catch(error) {

      console.log("Bookmark load error:", error);

    }

  };


  checkBookmarkStatus();

}, [item]);

  const handleBookmark = async () => {
    try {
      if (isBookmark) {
        await removeBookmark(item.title);
        setIsbookmark(false);
      } else {
        await addBookmark(item);;

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
      <Image source={item.imageurl} style={styles.image} />

      <View style={styles.content}>
        <Tag
          tagLabel={item.tagLabel}
          colors={ item.colors || "transparent"}
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
          {item.title}
        </Text>

        <Caption
          postedtime={item.postedtime}
          readtime={item.readtime}
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

export default ListViwe;

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