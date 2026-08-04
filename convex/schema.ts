import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    role: v.union(v.literal("admin"), v.literal("user")),
    Imageurl: v.optional(v.string()),
  }),

  articles: defineTable({
    title: v.string(),
    content: v.string(),
    catagoryName: v.string(),
    ImageUrl: v.string(),
    readtime: v.string(),
  }),
  catagories:defineTable({
iconName:v.string(),
iconColor:v.optional(v.string()),
iconBackground:v.optional(v.string()),
categoryName:v.string(),
articleCount:v.optional(v.string()),
  })
});        