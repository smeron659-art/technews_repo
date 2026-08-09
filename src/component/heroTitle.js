import React from 'react';
import { Text, StyleSheet } from 'react-native';
import useTheme from '../store/useTheam';
 const {color,fsize,spacing}=useTheme()
const HeroTitle = ({ title,noItemFound }) => {
  return (
    <Text style={[styles.title, { color: noItemFound? color.textPrimary: 'white'}]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
  
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginTop: 12,
  },
});

export default HeroTitle;