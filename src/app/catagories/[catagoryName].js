import React from "react";
import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import useTheme from "../../store/useTheam";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../component/header";
import ListViwe from "../../component/listViwe";
import HeroTitle from "../../component/heroTitle";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const CatagoryName = () => {
  const { catagoryName } = useLocalSearchParams();

  const { color, spacing } = useTheme();

  const category =
    typeof catagoryName === "string"
      ? catagoryName
      : catagoryName?.[0];

  const articles = useQuery(
    api.articles.getCatagories,
    category ? { catagoryName: category } : "skip"
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.background,
        paddingHorizontal: spacing.l,
      }}
    >
      {articles && articles.length > 0 ? (
        <ListViwe data={articles} />
      ) : (
        <View>
          <HeroTitle
            title="No articles found"
            noItemFound={true}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default CatagoryName;