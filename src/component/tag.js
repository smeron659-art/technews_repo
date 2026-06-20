import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import useTheme from '../store/useTheam';

const Tag = ({ tagLabel }) => {
  const { color, spacing } = useTheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color.liveBadge,
          paddingHorizontal: spacing.m,
          paddingVertical: spacing.s,
        },
      ]}
    >
      <View style={styles.dot} />

      <Text style={styles.text}>
        {tagLabel}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    borderRadius: 50,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8d1717',
    marginRight: 8,
  },

  text: {
    color: '#6f0c0c',
    fontWeight: '700',
    fontSize: 12,
  },
});

export default Tag;