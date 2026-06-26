import { create } from "zustand";
import { setItem, getItem } from "../utils/storage";

const useBookmark = create((set, get) => ({
  bookmarks: [],

  loadBookmarks: async () => {
    const data = await getItem("bookmarks");
    set({ bookmarks: data || [] });
  },

  addBookmark: async (item) => {
    const current = get().bookmarks;

    const exists = current.some((b) => b.title === item.title);

    if (!exists) {
      const updated = [...current, item];

      set({ bookmarks: updated });
      await setItem("bookmarks", updated);
    }
  },

  removeBookmark: async (title) => {
    const updated = get().bookmarks.filter(
      (b) => b.title !== title
    );

    set({ bookmarks: updated });
    await setItem("bookmarks", updated);
  },
}));

export default useBookmark;