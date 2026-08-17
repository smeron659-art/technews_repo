import  { useState } from "react";
import {
  StyleSheet,
  Text,
  FlatList,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useQuery } from "convex/react";

import useTheme from "../../store/useTheam";

import Header from "../../component/header";
import Search from "../../component/search";
import CategoryCard from "../../component/catagorycard";

import { api } from "../../../convex/_generated/api";


const Catagory = () => {

  const {
    color,
    fsize,
    spacing,
  } = useTheme();

  const [
    catagorysearch,
    setCatagorysearch,
  ] = useState("");


  const catagories = useQuery(
    api.catagories.getCatagories
  );

  const styles = createStyles(
    color,
    fsize,
    spacing
  );


  if (catagories === undefined) {

    return (
      <SafeAreaView
        style={styles.loadingContainer}
      >
        <Text
          style={styles.loadingText}
        >
          Loading...
        </Text>
      </SafeAreaView>
    );

  }


  const categories =
    catagories.filter(
      (item) =>
        item.categoryName !== "All"
    );

  const filteredCategories =
    categories.filter((item) =>
      item.categoryName
        ?.toLowerCase()
        .includes(
          catagorysearch.toLowerCase()
        )
    );


 

  return (
    <SafeAreaView
      style={styles.container}
    >

      <Header
        style={styles.header}
        header="catagory"
      />



      <Text style={styles.title}>
        Explore all the things
      </Text>


      <Search
        value={catagorysearch}
        onChangeText={setCatagorysearch}
      />



      <FlatList

        data={filteredCategories}

        keyExtractor={(item) =>
          item._id
        }

        numColumns={2}

        columnWrapperStyle={
          styles.columnWrapper
        }

        showsVerticalScrollIndicator={
          false
        }

        contentContainerStyle={
          styles.listContent
        }

        renderItem={({ item }) => (
          <CategoryCard
            item={item}
          />
        )}

        ListEmptyComponent={
          <Text
            style={styles.emptyText}
          >
            No categories found
          </Text>
        }

      />

    </SafeAreaView>
  );
};

const createStyles = (
  color,
  fsize,
  spacing
) =>
  StyleSheet.create({

    container: {
      flex: 1,

      backgroundColor:
        color.background,

      paddingHorizontal:
        spacing.l,
        paddingVertical:spacing.l
    },


    header: {
      color:
        color.textPrimary,
    },


    title: {
      color:
        color.textPrimary,

      textAlign:
        "center",

      fontFamily:
        "Syne_600SemiBold",

      fontSize:
        fsize.title,

      marginTop:
        spacing.m,

      marginBottom:
        spacing.m,
    },


    columnWrapper: {
      justifyContent:
        "space-between",

      marginBottom:
        spacing.l,
    },


    listContent: {
      paddingTop:
        spacing.m,

      paddingBottom:
        spacing.l,
    },


    loadingContainer: {
      flex: 1,

      justifyContent:
        "center",

      alignItems:
        "center",

      backgroundColor:
        color.background,
        padding:15,
    },


    loadingText: {
      color:
        color.textPrimary,

      fontSize:
        fsize.body,
    },


    emptyText: {
      color:
        color.textSecondary,

      textAlign:
        "center",

      marginTop:
        spacing.xl,

      fontSize:
        fsize.body,
    },

  });


export default Catagory;