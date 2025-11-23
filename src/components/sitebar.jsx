import SidebarConfing from "../configs/sidebar.json"
import { useContext } from "react"
import { GlobalContext } from "../App"
import { SidebarButton } from "./sidebar/sidebar-button"
import { getIconByName } from "./iconMapper"
import GlobalConfig from "../configs/sidebar.json"

export default function Sidebar (){
    const {theme, setTheme} = useContext(GlobalContext)

    return (
        <aside className={`w-1/5 rounded-l-3xl h-full bg-(--sidebar-bg) flex flex-col items-center`}>
            <div className="w-11/12 py-4 justify-center flex flex-row-reverse items-center">
                <img className="w-2/4" src = {theme=="light"?GlobalConfig.main_info.light_mode_logo:GlobalConfig.main_info.dark_mode_logo}/>
            </div>
            <div className="w-full flex flex-col items-center my-4 gap-3">
            {
                (SidebarConfing.buttons).map((value)=>{
                    const Icon = getIconByName(value.icon)

                    return (<SidebarButton icon = {<Icon className = "-translate-y-px" size = {23}/>} key = {value['uniqID']?value['uniqID']:value['title']} title = {value['title']} path = {value['path']}/>)
                })
            }
            </div>
          

           
        </aside>
    )
}