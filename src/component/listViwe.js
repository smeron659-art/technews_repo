import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../store/useTheam';
import Tag from './tag';
import Caption from './caption';

const ListViwe = ({ imageurl, tagLable, title, postedtime, readtime }) => {
  const { color, fsize, spacing } = useTheme();

  return (
    <View style={[styles.continer, { paddingVertical: spacing.md }]}>
      <Image source={imageurl} style={styles.imageur} />

      <View style={styles.content}>
        <Tag tagLable={tagLable} />

        <Text
          numberOfLines={2}
          style={[
            styles.textstyle,
            {
              color: color.textPrimary,
              fontSize: fsize.body,
            },
          ]}
        >
          {title}
        </Text>

        <Caption
          postedtime={postedtime}
          readtime={readtime}
        />
      </View>

      <Ionicons
        name="bookmark-outline"
        size={24}
        color={color.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  continer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  imageur: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },

  content: {
    flex: 1,
    marginLeft: 12,
  },

  textstyle: {
    marginTop: 6,
  },
});

export default ListViwe;