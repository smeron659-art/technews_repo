import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeroTitle = ({ title }) => {
  return (
    <Text style={styles.title}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    marginTop: 12,
  },
});

export default HeroTitle;