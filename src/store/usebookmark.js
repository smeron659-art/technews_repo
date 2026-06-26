import { create } from "zustand";
import { setItem, getItem } from "../utils/storage";

const useBookmark = create((set, get) => ({
  bookmark: [],

  loadBookmarks: async () => {
    const data = await getItem("bookmark");

    if (data) {
      set({
        bookmark: JSON.parse(data),
      });
    }
  },

  addBookmark: async (bookmark) => {
    const updateBookmark = [...get().bookmark, bookmark];

    set({
      bookmark: updateBookmark,
    });

    await setItem(
      "bookmark",
      JSON.stringify(updateBookmark)
    );
  },

  removeBookmark: async (bookmarkId) => {
    const updateBookmark = get().bookmark.filter(
      (b) => b.id !== bookmarkId
    );

    set({
      bookmark: updateBookmark,
    });

    await setItem(
      "bookmark",
      JSON.stringify(updateBookmark)
    );
  },
}));

export default useBookmark;