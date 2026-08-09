import { formatDistanceToNow } from "date-fns";
 export  const ago=(data) =>{
    if(!data) return null;
    return formatDistanceToNow(new Date(data), {addSuffix:true});
 }