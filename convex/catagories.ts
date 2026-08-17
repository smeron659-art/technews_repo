
import { mutation,query } from "./_generated/server";
import { Categories } from "./cat";
import { v } from "convex/values";
 export  const getCatagories =query({
handler:async(ctx)=>{
const catagory=await ctx.db.query("catagories").collect();
return catagory;
}

 });
export const  creatCatagories=mutation({
    args:{ 
        iconName: v.string(),
        iconColor: v.optional(v.string()),
        iconBackground: v.optional(v.string()),
        categoryName: v.string(),
    },
 handler:async(ctx,args)=>{
     const creatCatagories= await  ctx.db.insert("catagories" ,args)
     return creatCatagories;
    }

});
 export const updateCatagories =mutation({
    args:{
        id:v.id("catagories"),
        iconName: v.string(),
        iconColor: v.optional(v.string()),
        iconBackground: v.optional(v.string()),
        categoryName: v.string(),

    },
    handler : async (ctx ,args)=>{
        const updateCatagories= await  ctx.db.patch("catagories" ,args.id ,args)
        return updateCatagories;
    }
 }) ;

  export  const deletCatagories= mutation({
     args:{
        id:v.id("catagories")
  },
  handler:async (ctx ,args)=>{
    const deletCatagories= await ctx.db.delete("catagories" ,args.id)
    return deletCatagories
  }

  })

