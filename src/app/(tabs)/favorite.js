import React, { useEffect } from "react";
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



        const parseBookmark =
          storedBookmark
          ? JSON.parse(storedBookmark)
          : [];



        setBookmarks(parseBookmark);



        console.log(
          "Saved bookmarks:",
          parseBookmark
        );



      } catch(error) {


        console.log(
          "Load bookmark error:",
          error
        );


      }


    };



    loadBookmarks();


  }, []);






  return (

    <SafeAreaView style={styles.container}>


      <Header
        style={styles.textcolor}
        header="Saved"
      />

      <Text
        style={{
          color: color.textPrimary,
          fontSize:fsize.body
        }}
      >

        {bookmarks.length} critical reads saved

      </Text>


      <Chips />






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

            data={bookmarks}


            keyExtractor={(item)=>item.title}


            renderItem={({item})=>(

<View style={{paddingHorizontal:spacing.l}}>
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
)=> StyleSheet.create({


  container:{


    backgroundColor:color.background,

    flex:1,

    padding:spacing.l,


  },


  textcolor:{


    color:color.textPrimary,


  },


});