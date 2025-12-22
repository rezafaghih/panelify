import SidebarConfing from "../configs/sidebar.json"
import { useContext, useState } from "react"
import { GlobalContext } from "../App"
import { SidebarButton } from "./sidebar/sidebar-button"
import { getIconByName } from "./iconMapper"
import GlobalConfig from "../configs/sidebar.json"
import { GlobalManagment } from "../../lib/global"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function Sidebar (){
    const {theme, setTheme} = useContext(GlobalContext)
    const [isOpen, setIsOpen] = useState(false);

    const groupedButtons = SidebarConfing.buttons.reduce(
        (acc, btn) => {
          if (btn.family) {
            if (!acc.families[btn.family]) {
              acc.families[btn.family] = [];
            }
            acc.families[btn.family].push(btn);
          } else {
            acc.noFamily.push(btn);
          }
          return acc;
        },
        { families: {}, noFamily: [] }
      );

      
    return (
        <aside className={`${isOpen?"right-0 lg:right-0":"-right-3/4 lg:right-0"} lg:w-1/5 lg:relative fixed top-0 h-screen rounded-l-3xl lg:h-full z-9999 w-3/4 bg-(--sidebar-bg) flex flex-col items-center`}>
            {
              isOpen?<IoClose onClick={()=>{setIsOpen(false)}} className="right-full absolute mx-2 text-4xl text-(--color-text)"/>:<IoMenu onClick={()=>{setIsOpen(true)}} className="right-full absolute text-4xl mx-2 text-(--color-text)"/>
            }
            
            <div className="w-11/12 py-4 justify-center flex flex-row-reverse items-center">
                <img className="w-2/4" src = {theme=="light"?GlobalConfig.main_info.light_mode_logo:GlobalConfig.main_info.dark_mode_logo}/>
            </div>
            <div className="w-full flex flex-col items-center my-4 gap-4">
  
  {/* دکمه‌های دارای family */}
  {Object.entries(groupedButtons.families).map(([familyName, buttons]) => (
    <div key={familyName} className="w-full flex flex-col gap-3">
      
      {/* عنوان family */}
      <span dir = {GlobalManagment.GlobalConfig().main_info.dir} className="px-4 text-xs font-semibold text-gray-400">
        {familyName}
      </span>

      {/* دکمه‌ها */}
      {buttons.map((value) => {
        const Icon = getIconByName(value.icon);

        return (
          <SidebarButton
            key={value.uniqID ?? value.title}
            submenu={value.subItems?.length ? value.subItems : []}
            icon={<Icon className="-translate-y-px" size={23} />}
            title={value.title}
            path={value.path}
          />
        );
      })}
    </div>
  ))}

  {/* دکمه‌های بدون family */}
  {groupedButtons.noFamily.length > 0 && (
    <div className="w-full flex flex-col gap-3 mt-2">
      {groupedButtons.noFamily.map((value) => {
        const Icon = getIconByName(value.icon);

        return (
          <SidebarButton
            key={value.uniqID ?? value.title}
            submenu={value.subItems?.length ? value.subItems : []}
            icon={<Icon className="-translate-y-px" size={23} />}
            title={value.title}
            path={value.path}
          />
        );
      })}
    </div>
  )}
</div>

          

           
        </aside>
    )
}