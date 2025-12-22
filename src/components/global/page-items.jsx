import React from "react"
import GlobalConfig from "../../configs/global.json"
import { Link } from "react-router-dom";

export const StatisticCard = React.memo(({title , theValue , description, icon, color , size = "screen", href = "#"})=>{
    let StaticSize = "";

    size=="xl"&&StaticSize==""?StaticSize="w-11/12 lg:w-96":'';
    size=="lg"&&StaticSize==""?StaticSize="w-11/12 lg:w-72":'';
    size=="md"&&StaticSize==""?StaticSize="w-11/12 lg:w-52":'';

    return (
        <Link to = {href} className={`${size=="screen"?"w-full":StaticSize}  p-2 bg-(--sidebar-bg) rounded-xl`}>
            <div className="w-full flex items-center justify-between" dir = {GlobalConfig.main_info.dir}>
                <span className="text-sm text-(--color-text-sec)">
                    {title}
                </span>
                <div className="text-3xl bg-(--color-primary)/20 text-(--color-primary) rounded-full w-10 h-10 flex items-center justify-center">
                {icon}
                </div>
            </div>

            <div className="w-full flex items-center my-2 justify-between" dir = {GlobalConfig.main_info.dir}>
                <span className="font-bold text-xl text-(--color-text)">
                    {theValue}
                </span>
                {description}

            </div>
        </Link>
    )
})