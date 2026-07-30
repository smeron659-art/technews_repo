import { mutation,query } from "./_generated/server";
import { Categories } from "./cat";

 export  const getCatagories =query({
handler:async(ctx)=>{
const catagory=await ctx.db.query("catagories").collect();
return catagory;
}

 });
export const  creatCatagories=mutation({
 handler:async(ctx)=>{
    for(let i=0;i< Categories.length;i++){
        await ctx.db.insert("catagories", Categories[i]);
    }
    return "catagories inserted successfully"
 }
});

