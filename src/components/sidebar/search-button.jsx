import React, {memo} from "react";
import { CiSearch } from "react-icons/ci";
import { FadeTransitionButton } from "../global/fade-transition-button";

export const TopBarSearchButton = React.memo(()=>{
    return (
        <div>
            <FadeTransitionButton>
            <CiSearch size = {30} className="text-(--color-text)"/>
            </FadeTransitionButton>
        </div>
    )
})