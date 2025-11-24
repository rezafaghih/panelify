import { StatisticCard } from "../components/global/page-items";
import { PiUserDuotone } from "react-icons/pi";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { PiChartPieSliceDuotone } from "react-icons/pi";


export default function HomePage (){
    return (
        <div className="w-[95%] mx-auto my-2">
            <div className="w-full flex items-center gap-2">
            <StatisticCard  title = "فروش 7 روز گذشته" size = "screen" theValue = "23،000،000 تومان" icon = {<PiChartPieSliceDuotone size = {24}/>}/>
            <StatisticCard title = "فروش امروز" size = "screen" theValue = "3،000،000 تومان" icon = {<PiShoppingCartSimpleDuotone size = {24}/>}/>
            <StatisticCard title = "تعداد کل کاربران" theValue = "4،350" size = "screen" icon = {<PiUserDuotone size = {24}/>}/>
            </div>
        </div>
    )
}