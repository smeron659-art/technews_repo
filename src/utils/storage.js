import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log("Error saving data:", error);
  }
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value);
    }

    return null;
  } catch (error) {
    console.log("Error reading data:", error);
    return null;
  }
};