import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  Pressable,
  Text,
} from "react-native";
import Date from "../../component/date";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../../store/useTheam";
import Header from "../../component/header";
import Icon from "../../component/icon";
import Search from "../../component/search";
import Chips from "../../component/chips";
import Card from "../../component/card";
import { DATA } from "../../data/data";
import ListViwe from "../../component/listViwe";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const Index = () => {
  const {
    color,
    fsize,
    spacing,
    toggleTheme,
    themeMode,
  } = useTheme();

  const articles = useQuery(api.articles.getAllArticles);
  const catagories = useQuery(api.catagories.getCatagories);

  const styles = createStyles(color, fsize, spacing);

  const [search, setSearch] = useState("");
  const [selectedCatagories, setSelectedCatagories] = useState("")

  const [newCat, setNewCat] = useState([]);

  const allCatagories = {
    _id: "all",
    categoryName: "All",
  };
  useEffect(() => {
    if (catagories && catagories.length > 0) {
      setSelectedCatagories("All");

      const newCat = [allCatagories, ...catagories];

      setNewCat(newCat);
    }
  }, [catagories]);

  const filteredArticles =
    selectedCatagories === "All"
      ? articles
      : articles?.filter(
          (articles) =>
            articles.catagoryName === selectedCatagories
        );

  const searchedArticles = filteredArticles?.filter((article) =>
    article.title?.toLowerCase().includes(search.toLowerCase())
  );

  const notifications = () => {
    Alert.alert(
      "Notification",
      "you have no notification"
    );
  };

  const hederNew = filteredArticles?.[0];

  const Listheader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 15,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: color.textPrimary,
            fontFamily: "Syne_700Bold",
            marginTop: spacing.ms,
          }}
        >
          Latest Store
        </Text>

        <Pressable onPress={notifications}>
          <Text
            style={{
              color: color.primary,
              fontSize: 14,
            }}
          >
            See All
          </Text>
        </Pressable>
      </View>
    );
  };

  if (!articles || !catagories) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: color.background,
          paddingHorizontal: spacing.l,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: color.textPrimary,
            }}
          >
            Loading.....
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color.background,
        paddingHorizontal: spacing.l,
      }}
    >
         <Date />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
      <Header header={"TechPuls"}/>
        <View style={{ flexDirection: "row" }}>
        
        
      

        <Icon
          name={
            themeMode === "light"
              ? "moon-outline"
              : "sunny-outline"
          }
          action={toggleTheme}
        />
         <Icon
          name="notifications-outline"
        />
        </View>
      </View>

     

      <Search
        search={search}
        setSearch={setSearch}
      />

      {newCat.length > 0 && (
        <Chips
          catagories={newCat}
          selectcatagory={selectedCatagories}
          setSelectcatagory={setSelectedCatagories}
        />
      )}

      <FlatList
        data={searchedArticles}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: color.textSecondary,
                fontSize: fsize.body,
              }}
            >
              No articles found for the selected catagories
            </Text>
          </View>
        )}
        ListHeaderComponent={
          <>
            

            {hederNew && (
               <Card item={hederNew} />
              
            )}
            <Listheader />
          </>
        }
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
           <ListViwe
                item={item}
              />
        
        )}
      />
    </SafeAreaView>
  );
};

const createStyles = (color, fsize, spacing) =>
  StyleSheet.create({
    continer: {
      backgroundColor: color.background,
      flex: 1,
      paddingHorizontal: 9,
    },
    textcolor: {
      color: color.textPrimary,
    },
  });

export default Index;