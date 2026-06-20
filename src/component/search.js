import React from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import Icon from './icon';
import useTheme from '../store/useTheam';

const Search = ({ value, onChangeText }) => {
  const { color, fsize, spacing } = useTheme();

  const searchingTopic = () => {
    Alert.alert(
      'Searching',
      `You searched for: ${value || 'Nothing entered'}`
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color.surfaceSecondary,
          borderRadius: spacing.m,
          marginTop: spacing.m,
          paddingHorizontal: spacing.m,
        },
      ]}
    >
      <Icon
        name="search-outline"
        action={searchingTopic}
      />

      <TextInput
        style={[
          styles.input,
          {
            color: color.textPrimary,
            fontSize: fsize.body,
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search news, topics, authors..."
        placeholderTextColor={color.textSecondary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
  },

  input: {
    flex: 1,
    marginLeft: 10,
  },
});

export default Search;