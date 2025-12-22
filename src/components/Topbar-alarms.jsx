import { useState } from "react";
import { createContext } from "react";
import { FadeTransitionButton } from "./global/fade-transition-button";
import { IoNotificationsOutline, IoWarning } from "react-icons/io5";
import { Popover } from "./global/Popover";
import { Link } from "react-router-dom";
import { GlobalManagment } from "../../lib/global";
import { BsCheck2, BsInfo } from "react-icons/bs";

export const AlarmContext = createContext();


export const TopbarAlamrs =()=>{
    const [countOfAlarms, setCountOfAlarms] = useState(4);
    const [displayPopover, setDisplayPopover] = useState(false);

    return (
        <AlarmContext.Provider value={{countOfAlarms, setCountOfAlarms}}>
            <Popover menu={<PopOverMenu/>} isOpen = {displayPopover} setIsOpen = {setDisplayPopover}>
            <FadeTransitionButton onClick = {()=>setDisplayPopover(!displayPopover)}>
                <div className="relative  flex items-center text-(--color-text) justify-center">
                <IoNotificationsOutline className="text-3xl animate-bounce"/>
                <span className="bottom-0 left-[60%] rounded-full absolute w-4 h-4 bg-linear-to-br from-red-400/50 backdrop-blur-sm to-red-600 text-white flex items-center justify-center text-xs font-light">{countOfAlarms}</span>
                </div>
            </FadeTransitionButton>
            </Popover>
        </AlarmContext.Provider>
    )
}

const PopOverMenu = ()=>{
    return (
        <div className=" w-80 px-2 gap-3 flex flex-col items-center overflow-hidden">
           <div className="w-full flex py-2 border-b border-gray-500/10 justify-between items-center" dir = {GlobalManagment.GlobalConfig().main_info.dir}>
                <span className="text-(--color-text)">
                    اعلان ها
                </span>

                <Link to = "/" className="text-sm text-blue-400">
                    اعلان ها
                </Link>
           </div>
           <AlarmItem icon = {<IoWarning/>} title = "اعلان خطا" description={"یک کاربر با خطای سرور مواجه شده است لطفا وضعیت پایداری سرور را بررسی کنید"}/>
           <AlarmItem color = "#379e37" icon = {<BsCheck2/>} title = "خرید جدید" description={"یک خرید جدید ثبت شد ، لطفا آن را بررسی کنید"}/>

           <AlarmItem icon = {<BsInfo/>} color="#37979e" title = "اطلاعات کاربری ناقص" description={"یکی از کاربران اطلاعات خود را ناقص تکمیل کرده است"}/>
        </div>
    )
}

const AlarmItem = ({icon, title, description, color = "#f33333", to = "#"})=>{
    
    const bg_low_opacity = GlobalManagment.applyOpacity(color, 0.3);
    const theColor = GlobalManagment.applyOpacity(color, 1);
    
    return (
    <Link dir = {GlobalManagment.GlobalConfig().main_info.dir} to = {to} className="w-full flex flex-row items-start p-1 rounded-lg hover:bg-(--color-primary)/10 py-2">
        
        <span style={{backgroundColor:bg_low_opacity, color:theColor}} className={`w-8 rounded-full text-2xl mx-2 h-8 flex items-center justify-center`}>
            {icon}
        </span>
        <div className="w-full text-(--color-text) flex items-start flex-col" >
        <span >
            {title}
        </span>
        <p className="text-sm text-(--color-text-sec)">
            {description}
        </p>
        </div>
        
    </Link>
    )
}