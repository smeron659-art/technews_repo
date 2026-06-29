import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View, Text } from 'react-native';
import useTheme from '../store/useTheam';
import { Catagories } from '../app/data/catagori';

const Chips = () => {
  const { color, fsize, spacing } = useTheme();
  const [selectcatagory, setSelectcatagory] = useState("Catagories[0].catagoryname");

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ margin: spacing.l, flexGrow: 0 }}
    >
      {Catagories.map((cat) => (
        <Pressable
          key={cat.id}
          onPress={() => setSelectcatagory(cat.catagoryname)}
          style={{
            backgroundColor:
              selectcatagory === cat.catagoryname ? color.primary : color.back,
            marginRight: spacing.ms,
            paddingVertical: spacing.md,
            paddingHorizontal: spacing.lg,
            borderRadius: spacing.l,
      
          }}
        >
          <Text
            style={{
              color: selectcatagory === cat.catagoryname ? 'white' : color.textSecondary, fontSize:spacing.lg
            }}
          >
            {cat.catagoryname}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Chips;