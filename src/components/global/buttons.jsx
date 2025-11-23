import React, { useState } from "react";

export const Button = React.memo(({title, onClick, size = "fit",color = "bg-(--color-primary)"})=>{
    return (
        <button className={` ${color} rounded-xl text-white ${size=="fit"?"px-2  py-3":"w-full py-3"}`} onClick={onClick}>
            {title}
        </button>
    )
})


export const ProfileBox = React.memo (({profileImage})=>{
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-32 h-32 rounded-full">
        </div>
    )
})