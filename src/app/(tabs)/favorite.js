import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheam";
import Chips from "../../component/chips";
import ListViwe from "../../component/listViwe";
import Header from "../../component/header";

import { getItem } from "../../utils/storage";
import useBookmark from "../../store/usebookmark";

const Favorite = () => {

  const {
    color,
    fsize,
    spacing
  } = useTheme();

  const {
    bookmarks,
    setBookmarks
  } = useBookmark();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const styles = createStyles(
    color,
    fsize,
    spacing
  );

  useEffect(() => {

    const loadBookmarks = async () => {

      try {

        const storedBookmark =
          await getItem("bookmarks");

        const validBookmark =
          Array.isArray(storedBookmark)
            ? storedBookmark
            : [];

        setBookmarks(validBookmark);

      } catch (error) {

        console.log(
          "Load bookmark error:",
          error
        );

      }

    };

    loadBookmarks();

  }, []);


  const cats = [
    ...new Set(
      bookmarks
        .map((item) => item.catagoryName)
        .filter(Boolean)
    )
  ];


  const allcatagory = [
    {
      _id: "all",
      categoryName: "All"
    },

    ...cats.map((cat) => ({
      _id: cat,
      categoryName: cat
    }))
  ];


  const filteredBookmarks =
    selectedCategory === "All"
      ? bookmarks
      : bookmarks.filter(
          (item) =>
            item.catagoryName === selectedCategory
        );


  return (

    <SafeAreaView style={styles.container}>

      <Header
        style={styles.textcolor}
        header="Saved"
      />

      <Text
        style={{
          color: color.textPrimary,
          fontSize: fsize.body
        }}
      >
        {bookmarks.length} critical reads saved
      </Text>


      <Chips
        catagories={allcatagory}
        selectcatagory={selectedCategory}
        setSelectcatagory={setSelectedCategory}
      />


      {
        bookmarks.length === 0 ? (

          <View
            style={{
              padding: spacing.l
            }}
          >

            <Text
              style={{
                color: color.textPrimary,
                fontSize: fsize.body
              }}
            >
              Have no saved bookmarks
            </Text>

          </View>

        ) : (

          <FlatList

            data={filteredBookmarks}

            keyExtractor={(item) => item._id}

            renderItem={({ item }) => (

              <View
                style={{
                  paddingHorizontal: spacing.l
                }}
              >

                <ListViwe
                  item={item}
                />

              </View>

            )}

          />

        )
      }

    </SafeAreaView>

  );

};

export default Favorite;


const createStyles = (
  color,
  fsize,
  spacing
) => StyleSheet.create({

  container: {

    backgroundColor: color.background,

    flex: 1,

    padding: spacing.l,

  },

  textcolor: {

    color: color.textPrimary,

  },

});