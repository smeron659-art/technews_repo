import { create } from "zustand";
import themes from "../utils/color";
import fsConstraint, { Spacing } from "../utils/spacing";

 const useTheam = create((set)=>{
    return{
         theamMode:'light',
         Color:themes.light,
         fSize:fsConstraint.fontsize,
         spacing:fsConstraint.spacing,
         toggleTheam: () =>set((currentMode) =>{
            if(currentMode.theamMode==='dark'){
                return{theamMode:'light',color : themes.light};}
                else{
                    return{theamMode:'dark',color : themes.dark};
                }
            
         })
        }
 });
 export default useTheam;