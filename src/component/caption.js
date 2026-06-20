import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../store/useTheam';

const Caption = ({ author, readtime }) => {
  const { color, fsize } = useTheme();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.author,
          {
            fontSize: fsize.caption,
          },
        ]}
      >
        {author}
      </Text>

      <View
        style={[
          styles.dot,
          {
            backgroundColor: color.overlayLight,
          },
        ]}
      />

      <Ionicons
        name="time-outline"
        size={14}
        color="#FFFFFF"
      />

      <Text
        style={[
          styles.time,
          {
            fontSize: fsize.caption,
          },
        ]}
      >
        {readtime}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  author: {
    color: '#FFFFFF',
    fontWeight: '500',
  },

  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 8,
  },

  time: {
    color: '#FFFFFF',
    marginLeft: 5,
  },
});

export default Caption;