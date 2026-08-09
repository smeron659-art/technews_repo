
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useTheme from "../store/useTheam";
import Caption from "./caption";
import { getItem } from "../utils/storage";
import useBookmark from "../store/usebookmark";
import { router } from "expo-router";
import { ago } from "../utils/ago";

const ListViwe = ({ item }) => {
  const { color, fsize, spacing } = useTheme();
  const { addBookmark, removeBookmark } = useBookmark();
  const [isBookmark, setIsbookmark] = useState(false);

  useEffect(() => {
    const checkBookmarkStatus = async () => {
      try {
        const storedBookmarks = await getItem("bookmarks");

        const bookmarkList = Array.isArray(storedBookmarks)
          ? storedBookmarks
          : [];

        const bookmarked = bookmarkList.some(
          (bookmark) => bookmark._id === item._id
        );

        setIsbookmark(bookmarked);
      } catch (error) {
        console.log("Bookmark load error:", error);
      }
    };

    checkBookmarkStatus();
  }, [item]);

  const handleBookmark = async () => {
    try {
      if (isBookmark) {
        await removeBookmark(item._id);
        setIsbookmark(false);
      } else {
        await addBookmark(item);
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
      <Pressable
        style={styles.content}
        onPress={() => router.push(`/articles/${item._id}`)}
      >
        <Image
          source={{ uri: item.ImageUrl }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
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
            postedtime={ago(item._creationTime)}
            readtime={item.readtime}
          />
        </View>
      </Pressable>

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

  content: {
    flex: 1,
    flexDirection: "row",
    marginRight: 12,
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },

  textContainer: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    marginTop: 6,
  },
});

