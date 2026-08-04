import {formatDistanceToNow} from "data-fns";
 export  const ago=(data) =>{
    if(!data) return null;
    return formatDistanceToNow(new Date(data), {addSuffix:true});
 }