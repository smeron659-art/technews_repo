import { mutation,query } from "./_generated/server";
import {v} from 'convex/values';
   export const getAllArticles=query({
    handler:async(ctx)=>{
        const allArticles=await ctx.db.query("articles").collect();
        return allArticles
    }
  })
    export const creatArticles=mutation({
    handler:async(ctx)=>{
        const creatPost=await ctx.db.insert('articles',{
           
    title: ' the ethiopa calteral  place   that is the  hertage place  that is   found in the ethiopa in the culaterl placse ',
  catagoryName:'  ethipoa',
timePosted  :'3 hour',
 content :'5 houre',
 ImageUrl: '"https://website.com/image.jpg"'
        });
        return creatPost;
    }
   })