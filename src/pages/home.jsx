import { StatisticCard } from "../components/global/page-items";
import { PiUserDuotone } from "react-icons/pi";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { PiChartPieSliceDuotone } from "react-icons/pi";
import ProChart from "../components/global/chart";
import TextEditor from "../components/global/textEditor";
import { ProductBox } from "../components/global/content-box";


export default function HomePage (){
    const datasets = {
        "7 روزه": [
        { name: "شنبه", value: 41000 },
        { name: "یکشنبه", value: 13000 },
        { name: "دوشنبه", value: 60000 },
        { name: "سه‌شنبه", value: 60000 },
        { name: "چهارشنبه", value: 30000 },
        { name: "پنج‌شنبه", value: 30000 },
        { name: "جمعه", value: 20000 },
        ],
        
        
        "15 روزه": [
        { name: "روز 1", value: 20000 },
        { name: "روز 2", value: 35000 },
        { name: "روز 3", value: 18000 },
        { name: "روز 4", value: 50000 },
        { name: "روز 5", value: 42000 },
        ],
        
        
        "30 روزه": [
        { name: "Day 1", value: 12000 },
        { name: "Day 2", value: 18000 },
        { name: "Day 3", value: 9000 },
        { name: "Day 4", value: 27000 },
        { name: "Day 5", value: 31000 },
        { name: "Day 1", value: 12000 },
        { name: "Day 2", value: 18000 },
        { name: "Day 3", value: 9000 },
        { name: "Day 4", value: 27000 },
        { name: "Day 5", value: 31000 },
        { name: "Day 1", value: 12000 },
        { name: "Day 2", value: 18000 },
        { name: "Day 3", value: 9000 },
        { name: "Day 4", value: 27000 },
        { name: "Day 5", value: 31000 },
        { name: "Day 1", value: 12000 },
        { name: "Day 2", value: 18000 },
        { name: "Day 3", value: 9000 },
        { name: "Day 4", value: 27000 },
        { name: "Day 5", value: 31000 },
        { name: "Day 1", value: 12000 },
        { name: "Day 2", value: 18000 },
        { name: "Day 3", value: 9000 },
        { name: "Day 4", value: 27000 },
        { name: "Day 5", value: 31000 },
        { name: "Day 1", value: 12000 },
        { name: "Day 2", value: 18000 },
        { name: "Day 3", value: 9000 },
        { name: "Day 4", value: 27000 },
        { name: "Day 5", value: 31000 },
        { name: "Day 1", value: 12000 },
        { name: "Day 2", value: 18000 },
        { name: "Day 3", value: 9000 },
        { name: "Day 4", value: 27000 },
        { name: "Day 5", value: 31000 },
        ],
        };

    return (
        <div className="w-[95%] mx-auto my-2">
            <div className="w-full flex items-center gap-2">
            <StatisticCard href = "/orders" title = "فروش 7 روز گذشته" size = "screen" theValue = "23،000،000 تومان" icon = {<PiChartPieSliceDuotone size = {24}/>}/>
            
            <StatisticCard href = "/orders" title = "فروش امروز" size = "screen" theValue = "3،000،000 تومان" icon = {<PiShoppingCartSimpleDuotone size = {24}/>}/>

            <StatisticCard href = "/users" title = "تعداد کل کاربران" theValue = "4،350" size = "screen" icon = {<PiUserDuotone size = {24}/>}/>
            </div>

            <div className="w-full flex items-center gap-2 my-4">
            <ProChart title="آمار فروش ماه اخیر"
datasets={datasets}
dataKey="value"/>
            </div>

            <div className="w-full flex items-center gap-2 my-4 flex-col p-2 rounded-lg">
                <h2 className="w-full text-right font-bold text-xl">
                    پرفروش‌ترین محصولات
                </h2>

                <div className="w-full my-5 flex justify-between items-center flex-wrap">
                    <ProductBox smallTag={"4 فروش"} description={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"} title = "آجیل مخلوط" image = {"https://kashaninuts.com/wp-content/uploads/2021/02/AJ70-768x768.jpg"} color = "#a42d32"/>

                    <ProductBox smallTag={"4 فروش"} description={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"} title = "آجیل مخلوط" image = {"https://kashaninuts.com/wp-content/uploads/2021/02/AJ70-768x768.jpg"} color = "#a42d32"/>


                    <ProductBox smallTag={"4 فروش"} description={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"} title = "آجیل مخلوط" image = {"https://kashaninuts.com/wp-content/uploads/2021/02/AJ70-768x768.jpg"} color = "#a42d32"/>


                    <ProductBox smallTag={"4 فروش"} description={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است"} title = "آجیل مخلوط" image = {"https://kashaninuts.com/wp-content/uploads/2021/02/AJ70-768x768.jpg"} color = "#a42d32"/>



                </div>
            </div>

            
        </div>
    )
}