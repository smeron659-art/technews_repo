import {defineSchema ,defineTable } from "convex/server";
import {v} from "convex/values" ;
 const schema=defineSchema({
    users:defineTable({
        name:v.string(),
        email:v.string(),
        role:v.union(v.literal("admin"),v.literal("user")),
        ImageUrl:v.optional(v.string())
    }),
    articles:defineTable({
        title:v.string(),
        content:v.string(),
        catagoryName:v.string(),
      ImageUrl: v.string(),
        timePosted:v.string(),
    })
 })
  export default schema;