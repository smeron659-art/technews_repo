import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View, Text } from 'react-native';
import useTheme from '../store/useTheam';
import { Categories } from '../app/data/catagori';
import CategoryCard from './catagorycard';

const Chips = () => {
  const { color, fsize, spacing } = useTheme();
  const [selectcatagory, setSelectcatagory] = useState(Categories[0].categoryName)

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ margin: spacing.l, flexGrow: 0 }}
    >
      {Categories.map((cat) => (
        <Pressable
          key={cat.id}
          onPress={() => setSelectcatagory(cat.categoryName)}
          style={{
            backgroundColor:
              selectcatagory === cat.categoryName ? color.primary : color.back,
            marginRight: spacing.ms,
            paddingVertical: spacing.md,
            paddingHorizontal: spacing.lg,
            borderRadius: spacing.l,
      
          }}
        >
          <Text
            style={{
              color: selectcatagory === cat.categoryName ? 'white' : color.textSecondary, fontSize:spacing.lg
            }}
          >
            {cat.categoryName}
          </Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default Chips;