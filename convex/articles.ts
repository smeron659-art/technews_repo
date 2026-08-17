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
  args :{
 title: v.string(),
    content: v.string(),
    catagoryName: v.string(),
    ImageUrl :v.string(),
  },
  handler: async (ctx, args) => {
      const newArticles = await ctx.db.insert("articles" , args);
    return newArticles;
  },
}); 

  export  const  updateArticles=mutation({
    args:{
     id:v.id("articles"),
 title: v.optional(v.string()),
 content:v.optional(v.string()),
    catagoryName:v.optional(v.string()),
    ImageUrl :v.optional(v.string()),
  },
  handler:  async ( ctx ,args)=>{
    const updateArticles= await ctx.db.patch("articles" ,args.id ,args)
    return updateArticles;
  }
  });

 export  const deletArticles=mutation({
  args:{
    id:v.id("articles"),
 
  },
  handler: async (ctx,args)=>{
    const deletArticles=await  ctx.db.delete("articles",args.id);
    return deletArticles ;
  }
 })
 export const getArticlesById= query({
  args: {
    id: v.id("articles"),
  },
  handler: async (ctx, args) => {
    const article = await ctx.db.get(args.id);
    return article;
  },
});
  export  const getCatagories=query({
    args :{
      catagoryName:v.string(),
    },
    handler:async   (ctx, args) => {
       const articles = await ctx.db.query("articles").withIndex("by_catagoryName", (q)=>q.eq("catagoryName",args.catagoryName)).collect();
       return articles;
    },
  })
