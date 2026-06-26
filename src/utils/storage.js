import AsyncStorage from "@react-native-async-storage/async-storage";

// SAVE
export const setItem = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log("Error saving data:", error);
  }
};

// GET
export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value);
    }

    // IMPORTANT: bookmarks must always be array
    if (key === "bookmarks") return [];

    return null;
  } catch (error) {
    console.log("Error reading data:", error);

    if (key === "bookmarks") return [];

    return null;
  }
};

// REMOVE KEY
export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log("Error removing data:", error);
  }
};