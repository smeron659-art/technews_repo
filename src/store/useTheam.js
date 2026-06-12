import { create } from "zustand";
import themes from "../utils/color";
import fsConstraint from "../utils/spacing";

const useTheme = create((set) => ({
  themeMode: "light",
  color: themes.light,
  fsize: fsConstraint.fontsize,
  spacing: fsConstraint.spacing,

  toggleTheme: () =>
    set((state) => {
      if (state.themeMode === "dark") {
        return {
          themeMode: "light",
          color: themes.light,
        };
      } else {
        return {
          themeMode: "dark",
          color: themes.dark,
        };
      }
    }),
}));

export default useTheme;