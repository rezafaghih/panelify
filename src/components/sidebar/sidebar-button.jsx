import React, { memo } from "react"
import { Link } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import GlobalConfig from "../../configs/global.json"

export const SidebarButton = React.memo(({title, icon, path})=>{
    const location = useLocation();

    
    return (
        <Link className={`w-11/12 text-right flex items-center ${GlobalConfig.main_info.dir == "rtl"?"flex-row-reverse":"flex-row"} rounded-xl px-3 py-3 ${location.pathname==path?"bg-(--color-primary)/20 text-(--color-primary)":"text-(--color-text)"}`} to = {path}>
            {icon}
            {title}
        </Link>
    )
})