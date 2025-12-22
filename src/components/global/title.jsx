import React from "react";
import { GlobalManagment } from "../../../lib/global";

export const TitleAndDescription = React.memo(({title, description, align = "center"})=>{
    align=="right"?align="end":'';
    align=="left"?align="start":'';
    return (
    <div className={`w-full flex flex-col items-${align}`}>
            <span className="text-lg">
                {title}
            </span>
            <span className="text-sm text-gray-500">
                {description}
            </span>
        </div>
    )
})

export const TitleAndList = React.memo(({title, list, align = "center"})=>{
    align=="right"?align="end":'';
    align=="left"?align="start":'';
    return (
    <div className={`w-full flex flex-col items-${align}`}>
            <span className="text-lg">
                {title}
            </span>
            <div className="flex gap-3 mt-2">
                {list&&list.length>0?list.map((value)=>{
                    return (
                        <span className="py-1 px-3 rounded-lg bg-blue-500/20 text-blue-500" key = {value}>
                            {value['title']}
                            {value['sub']?<span className="text-xs mx-1">( {value["sub"]} )</span>:""}
                        </span>
                    )
                }):""}
            </div>
        </div>
    )
})



const headingClasses = {
    1: "text-3xl font-bold text-(--color-text)",
    2: "text-2xl font-bold text-(--color-text)",
    3: "text-xl font-semibold text-(--color-text)",
    4: "text-lg font-semibold text-(--color-text)",
    5: "text-base font-medium text-(--color-text)",
    6: "text-sm font-medium text-(--color-text)",
  };
  
  export const SimpleHeadingTitle = React.memo(({ title, heading = 1 }) => {
    const safeHeading = Math.min(Math.max(heading, 1), 6);
    const Tag = `h${safeHeading}`;
  
    return (
      <Tag dir = {GlobalManagment.GlobalConfig().main_info.dir} className={headingClasses[safeHeading]}>
        {title}
      </Tag>
    );
  });