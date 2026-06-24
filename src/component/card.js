import React from 'react';
import { StyleSheet, Pressable, ImageBackground, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import useTheme from '../store/useTheam';
import HeroTitle from './heroTitle';
import Tag from './tag';
import Caption from './caption';

const source = require('../../assets/heritage.jpg');

const Card = () => {
  const { spacing } = useTheme();

  return (
    <Pressable
      onPress={() => alert('Card pressed')}
      style={[
        styles.card,
        {
          borderRadius: spacing.l,
          marginHorizontal: spacing.m,
          marginVertical: spacing.s,
        },
      ]}
    >
      <ImageBackground
        source={source}
        style={styles.image}
        imageStyle={{ borderRadius:20 }}
      >
        <LinearGradient
          colors={[
            'rgba(0,0,0,0)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.9)',
          ]}
          style={[styles.gradient, { padding: spacing.l }]}
        >
          <Tag tagLabel="LIVE" />

          <View style={styles.content}>
            <HeroTitle title="OpenAI Universal GPT-5" />

            <Caption
              author="Maya Chen"
              readtime="5 min read"
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 210,
    overflow: 'hidden',
     marginTop:2,

    elevation: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
  },

  image: {
    flex: 1,
  },

  gradient: {
    flex: 1,
    justifyContent: 'space-between',
  },

  content: {
    gap: 8,
  },
});

export default Card;