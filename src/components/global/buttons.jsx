import React, { useState } from "react";
import { FadeTransitionButton } from "./fade-transition-button";
import {motion} from "motion/react"
import { PiUserDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";
import { PiTicketDuotone } from "react-icons/pi";
import { AiTwotoneNotification } from "react-icons/ai";

export const Button = React.memo(({title, onClick, size = "fit",color = "bg-(--color-primary)"})=>{
    return (
        <button className={` ${color} rounded-xl text-white ${size=="fit"?"px-2  py-3":"w-full py-3"}`} onClick={onClick}>
            {title}
        </button>
    )
})


export const EmptyButton =React.memo(({title, onClick, size = "fit",color = "(--color-primary)"})=>{
    return (
        <button className={` border-${color} border-2 rounded-xl text-${color} ${size=="fit"?"px-2  py-3":"w-full py-3"}`} onClick={onClick}>
            {title}
        </button>
    
)})

export const ProfileButton = React.memo (({profileImage})=>{
    const [isOpen, setIsOpen] = useState(false);
    return (
        <FadeTransitionButton>
        <div className="w-10 relative h-10 rounded-full">
            <img onClick={()=>setIsOpen(!isOpen)} src = {profileImage} className="w-10 h-10 z-10 object-cover rounded-full"/>

            {
                isOpen?<motion.div initial = {{opacity:0}} whileInView={{opacity:1}} className="w-80 bg-(--sidebar-bg) inset-0 z-0 absolute left-0 top-[120%] p-2 rounded-2xl rounded-t-none border-2 border-(--color-text)/2 h-fit">
                    <div className={`w-full flex py-2 border-b border-(--color-text-sec)/20 flex-row-reverse items-center`}>
                    <img src = {profileImage} className="w-16 h-16 z-10 object-cover rounded-full"/>
                        <div className="flex flex-col items-end px-2">
                            <span className="text-lg text-(--color-text) font-bold">
                                رضافقیه
                            </span>
                            <p className="text-(--color-text-sec) text-sm">
                                connect.rezafaghih@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="my-5">
                        <Link to = "" className="w-full text-right gap-1 py-2 flex items-center justify-start flex-row-reverse">
                            <PiUserDuotone size = {24} className="-translate-y-[3px]"/>
                            <span>
                                تنظیمات حساب
                            </span>
                        </Link>

                        <Link to = "" className="w-full text-right gap-1 py-2 flex items-center justify-start flex-row-reverse">
                            <PiTicketDuotone size = {24} className="-translate-y-[3px]"/>
                            <span>
                                تیکت ها
                            </span>
                        </Link>

                        <Link to = "" className="w-full text-right gap-1 py-2 flex items-center justify-start flex-row-reverse">
                            <AiTwotoneNotification size = {24} className="-translate-y-[3px]"/>
                            <span>
                                اعلان ها
                            </span>
                        </Link>
                    </div>
                    <div className="my-5">
                        <EmptyButton title = {"خروج از حساب"} size = {'screen'} color = {"[#f33333]"}/>
                    </div>
                </motion.div>:""
            }
            
        </div>
        </FadeTransitionButton>
    )
})