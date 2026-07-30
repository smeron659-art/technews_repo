import { mutation, query } from "./_generated/server";
import { DATA } from "./news";

export const getAllArticles = query({
  handler: async (ctx) => {
    const allArticles = await ctx.db.query("articles").collect();
    return allArticles;
  },
});

export const createArticles = mutation({
  handler: async (ctx) => {
    for (let i = 0; i < DATA.length; i++) {
      await ctx.db.insert("articles", DATA[i]);
    }

    return "Articles inserted successfully";
  },
}); 