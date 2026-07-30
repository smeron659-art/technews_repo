import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
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
 export const getArticlesById = query({
  args: {
    id: v.id("articles"),
  },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.id);
    return article;
  },
});
