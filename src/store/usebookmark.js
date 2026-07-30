import { create } from "zustand";
import { setItem, getItem } from "../utils/storage";

const useBookmark = create((set, get) => ({
  bookmarks: [],
 
  setBookmarks: (bookmarks) => set({ bookmarks }),

  loadBookmarks: async () => {
    try {
      const data = await getItem("bookmarks");

      set({
        bookmarks: Array.isArray(data) ? data : [],
      });

    } catch (error) {
      console.log("Load bookmark error:", error);
      set({ bookmarks: [] });
    }
  }, 

  addBookmark: async (item) => {
    try {
      const current = get().bookmarks || [];

      const exists = current.some(
        (b) => b._id === item._id
      );

      if (!exists) {
        const updated = [...current, item];

        set({ bookmarks: updated });

        await setItem("bookmarks", updated);
      }

    } catch (error) {
      console.log("Add bookmark error:", error);
    }
  },

  removeBookmark: async (id) => {
    try {
      const current = get().bookmarks || [];

      const updated = current.filter(
        (b) => b._id !== id
      );

      set({ bookmarks: updated });

      await setItem("bookmarks", updated);

    } catch (error) {
      console.log("Remove bookmark error:", error);
    }
  },
}));

export default useBookmark;