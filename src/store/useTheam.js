import { create } from "zustand";
import themes from "../utils/color";
import fsConstraint from "../utils/spacing";
import { setItem } from "../utils/storage";

const useTheme = create((set, get) => ({
  themeMode: "light",
  color: themes.light,
  fsize: fsConstraint.fontsize,
  spacing: fsConstraint.spacing,

  setTheme: async (theme) => {
    set({
      themeMode: theme,
      color: themes[theme],
    });
  },

  toggleTheme: async () => {
    const currentTheme = get().themeMode;

    const newTheme =
      currentTheme === "light" ? "dark" : "light";

    await setItem("themeMode", newTheme);

    set({
      themeMode: newTheme,
      color: themes[newTheme],
    });
  },
}));

export default useTheme;