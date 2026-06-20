import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet } from 'react-native';
import useTheme from '../store/useTheam';

export default function Icon({ name, action }) {
  const { color, spacing } = useTheme();
  const styles = createStyles(color, spacing);

  return (
    <Pressable style={styles.container} onPress={action}>
      <Ionicons
        name={name}
        size={24}
        color={color.textSecondary}
      />
    </Pressable>
  );
}

const createStyles = (color, spacing) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.lowerback,
      height: 50,
      width: 50,
      margin: spacing.sm,
      borderRadius: 11,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });