import { Link } from "react-router-dom"
import { Button, IconButton } from "./buttons"
import { PiPen } from "react-icons/pi"
import { BsEye } from "react-icons/bs"

export const ProductBox = ({image, href, title, description ,smallTag = null})=>{
    return (
        <div className="w-72 p-2 relative rounded-xl overflow-hidden bg-(--sidebar-bg) flex flex-col items-center">
            <img src = {image} className="w-3/4" alt = ""/>
            <Link to = {href} className="w-full text-right font-bold text-lg my-2" dir = "rtl">
                {title}
            </Link>
            <p className="text-sm text-right text-gray-400 line-clamp-2 my-2" dir="rtl">
                {description}
            </p>

            <div className="w-full flex flex-row-reverse gap-2">
                <span dir = "rtl" className="text-green-700 absolute left-5 top-5 backdrop-blur-lg bg-green-500/20 rounded-3xl border border-green-600 px-2 py-1">
                   {smallTag}
                </span>
            </div>
           
            <div className="w-full mt-5 flex justify-start gap-2 items-center">
                <IconButton color = {"#0e6dc7"} icon = {<PiPen/>}/>
                <IconButton color = {"#c7960e"} icon = {<BsEye/>}/>
            </div>
        </div>
    )
}

export const TicketBox = ()=>{

}
