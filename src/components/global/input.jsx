import React, { memo, useMemo } from "react";

export const Input = React.memo(({placeholder, label, type = "text"})=>{
    return (
        <div className="w-full flex flex-col my-1 gap-1">
            <label className="w-full text-right text-(--color-text) px-2">
                {label}
            </label>
            <input type = {type} placeholder = {placeholder} className = {`px-2 text-right py-3 rounded-xl text-(--color-text) transition-all bg-(--background-bg) outline-none focus:border-(--color-primary)/30 border-2 border-transparent`}/>
        </div>
    )
})