import { Outlet } from "react-router-dom"
import Sidebar from "./sitebar"
import GlobalConfig from "../configs/global.json"
import { TobBar } from "./Topbar"

export const Layout = ()=>{
    return (
        <div className={`bg-(--background-bg) w-full h-screen flex ${GlobalConfig.main_info.dir=="rtl"?"flex-row-reverse":"flex-row"} `}>
            <Sidebar/>
            <div className="w-4/5 h-full overflow-auto">
            <TobBar/>
            <Outlet/>
            </div>
        </div>
    )
}