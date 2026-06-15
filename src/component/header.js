import React from 'react';
import { StyleSheet, Text } from 'react-native';
import useTheme from '../store/useTheam';
import { useFonts, Syne_400Regular, Syne_500Medium, Syne_600SemiBold, Syne_700Bold, Syne_800ExtraBold, } from "@expo-google-fonts/syne";

const Header = ({ header }) => {
  const { color, fsize, spacing } = useTheme();

  const styles = createStyles(color, fsize, spacing);

  return (
    <Text style={styles.headerText}>
      {header}
    </Text>
  );
};

const createStyles = (color, fsize, spacing) =>
  StyleSheet.create({
    headerText: {
      fontSize: fsize.heading,
      fontFamily:'Syne_500Medium',
    
      color: color.textPrimary,
      fontWeight: '500', // Use this until custom fonts are working
    },
  });

export default Header;