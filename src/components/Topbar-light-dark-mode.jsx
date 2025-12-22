import { useContext, useState } from "react";
import { FadeTransitionButton } from "./global/fade-transition-button"
import { CiLight } from "react-icons/ci";
import { MdNightsStay } from "react-icons/md";
import { GlobalContext } from "../App";

export const TopbarThemeButton = ()=>{
    const {theme, setTheme} = useContext(GlobalContext)
    
    return (
        <FadeTransitionButton onClick = {()=>setTheme(theme=="light"?"dark":"light")}>
                        <div className="relative text-(--color-text) flex items-center justify-center">
                         {
                            theme=="light"?<MdNightsStay className="text-3xl"/>:<CiLight className="text-3xl"/>
                         }
                         
                        
                        </div>
        </FadeTransitionButton>
    )
}