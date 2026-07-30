import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import useTheme from "../store/useTheam";

const Profilcared = () => {
  const { color, spacing, fsize } = useTheme();

  const user = useQuery(api.users.getUserByEmail, {
    email: "AbebeKebede@gmail.com",
  });

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: color.lowerback,
          height: 100,
        },
      ]}
    >
      <Image
        source={{ uri: user.Imageurl }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
        }}
      />

      <View
        style={{
          padding: spacing.ml,
          marginLeft: 14,
        }}
      >
        <Text
          style={{
            color: color.surface,
            fontSize: fsize.titleSmall,
            marginBottom: 6,
          }}
        >
          {user.name}
        </Text>

        <Text
          style={{
            color: color.surface,
            marginBottom: 6,
          }}
        >
          {user.email}
        </Text>

        <View
          style={{
            backgroundColor: color.rprimary,
            height: 20,
            width: 100,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: color.primary,
            }}
          >
            {user.role}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 10,
    width: "100%",
    borderRadius: 13,
  },
});

export default Profilcared;