import { StatisticCard } from "../components/global/page-items";
import { PiUserDuotone } from "react-icons/pi";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { PiChartPieSliceDuotone } from "react-icons/pi";
import ProChart from "../components/global/chart";
import TextEditor from "../components/global/textEditor";
import { ProductBox } from "../components/global/content-box";
import { Link } from "react-router-dom";
import { GlobalManagment } from "../../lib/global";
import { BlurCheckbox } from "../components/global/checkbox";
import { BsEye } from "react-icons/bs";
import { PiPen } from "react-icons/pi";


import { FaCartPlus } from "react-icons/fa";
import OrbitSphere from "../components/global/OrbitSphere";
import { GridLayout } from "../components/global/layout_components";
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
            <GridLayout countOfCols={3} gapX={4} mobileCountOfCols={1}>
              <StatisticCard 
              description = {
                  <span className="text-sm text-green-500">
                      17% رشد
                  </span>
              }
              href = "/orders" 
              title = "فروش 7 روز گذشته" size = "screen" theValue = "23،000،000 تومان" icon = {<PiChartPieSliceDuotone size = {24}/>}/>
              
              <StatisticCard
              description = {
                  <span className="text-sm text-green-500">
                      12% رشد
                  </span>
              }
              href = "/orders" title = "فروش امروز" size = "screen" theValue = "3،000،000 تومان" icon = {<PiShoppingCartSimpleDuotone size = {24}/>}/>

            <StatisticCard
              description = {
                  <span className="text-sm text-red-500">
                      4% کسر
                  </span>
              }
              href = "/users" title = "تعداد کل کاربران" theValue = "4،350" size = "screen" icon = {<PiUserDuotone size = {24}/>}/>
            </GridLayout>
           

            <div className="w-full flex items-center gap-2 my-4">
            <ProChart title="آمار فروش ماه اخیر"
datasets={datasets}
dataKey="value"/>
            </div>

            <div className="w-full flex items-center gap-2 my-4 flex-col p-2 rounded-lg">
                
                <GridLayout gapX={2} countOfCols={2} mobileCountOfCols={1}>
                <div className="w-full gap-2 p-3 flex flex-col items-center bg-(--sidebar-bg) rounded-xl">
                        <div className="w-full border-b border-gray-500/30 flex justify-between" dir = {GlobalManagment.GlobalConfig().main_info.dir}>
                            <h2 className=" text-right text-(--color-text) font-bold text-xl">
                                پروژه ها
                            </h2>
                            <Link to = "" className="text-blue-500">
                                تمامی تسک ها
                            </Link>
                        </div>

                        <BlurCheckbox progress={60} progressColor="text-red-500" label = "پروژه شماره یک" avatar={"https://hivoo.ir/assets/img/logo.png"}/>
                        <BlurCheckbox progress={24} progressColor="text-blue-500" label = "پروژه شماره سه" avatar={"https://hivoo.ir/assets/img/logo.png"}/>
                        <BlurCheckbox progress={67} progressColor="text-orange-500" label = "پروژه شماره چهار" avatar={"https://hivoo.ir/assets/img/logo.png"}/>
                        <BlurCheckbox progress={11} progressColor="text-green-500" label = "پروژه شماره پنج" avatar={"https://hivoo.ir/assets/img/logo.png"}/>
                    </div>


                    <div className="w-full gap-2 p-3 flex flex-col items-center bg-(--sidebar-bg) rounded-xl">
                        <div className="w-full border-b border-gray-500/30 flex justify-between" dir = {GlobalManagment.GlobalConfig().main_info.dir}>
                            <h2 className=" text-right text-(--color-text) font-bold text-xl">
                                تسک های امروز
                            </h2>
                            <Link to = "" className="text-blue-500">
                                تمامی تسک ها
                            </Link>
                        </div>

                        <BlurCheckbox label = "تسک امروز که باید انجام شود" avatar={"https://hivoo.ir/assets/img/logo.png"}/>
                        <BlurCheckbox label = "تسک امروز که باید انجام شود" avatar={"https://hivoo.ir/assets/img/logo.png"}/>
                        <BlurCheckbox label = "تسک امروز که باید انجام شود" avatar={"https://hivoo.ir/assets/img/logo.png"}/>
                        <BlurCheckbox label = "تسک امروز که باید انجام شود" avatar={"https://hivoo.ir/assets/img/logo.png"}/>
                    </div>
                </GridLayout>
                
            </div>

            <div className="w-full flex items-center gap-2 my-4 flex-col p-2 rounded-lg">
                <h2 className="w-full text-right font-bold text-(--color-text) text-xl">
                    پرفروش‌ترین محصولات
                </h2>

                <div className="w-full my-5 flex justify-between items-center flex-wrap">
                <ProductBox
        image="https://hivoo.ir/files/course/66d087d532370.webp"
        href="/admin/products/react-course"
        title="دوره جامع React"
        description="آموزش کامل React از صفر تا سطح پیشرفته به همراه پروژه‌های واقعی"
        
        tags={[
          { label: "Active", color: "green" },
          { label: "Premium", color: "blue" },
        ]}

        stats={[
          {
            title: "Sales",
            value: 231,
            icon: <FaCartPlus />,
          },
          {
            title: "Views",
            value: 1420,
            icon: <BsEye />,
          },
        ]}

        actions={[
          {
            icon: <PiPen />,
            color: "#0e6dc7",
            onClick: () => console.log("Edit product"),
          },
          {
            icon: <BsEye />,
            color: "#c7960e",
            onClick: () => console.log("Preview product"),
          },
        ]}
      />

<ProductBox
        image="https://hivoo.ir/files/course/66d087d532370.webp"
        href="/admin/products/react-course"
        title="دوره جامع React"
        description="آموزش کامل React از صفر تا سطح پیشرفته به همراه پروژه‌های واقعی"
        
        tags={[
          { label: "Active", color: "green" },
          { label: "Premium", color: "blue" },
        ]}

        stats={[
          {
            title: "Sales",
            value: 231,
            icon: <FaCartPlus />,
          },
          {
            title: "Views",
            value: 1420,
            icon: <BsEye />,
          },
        ]}

        actions={[
          {
            icon: <PiPen />,
            color: "#0e6dc7",
            onClick: () => console.log("Edit product"),
          },
          {
            icon: <BsEye />,
            color: "#c7960e",
            onClick: () => console.log("Preview product"),
          },
        ]}
      />

<ProductBox
        image="https://hivoo.ir/files/course/66d087d532370.webp"
        href="/admin/products/react-course"
        title="دوره جامع React"
        description="آموزش کامل React از صفر تا سطح پیشرفته به همراه پروژه‌های واقعی"
        
        tags={[
          { label: "Active", color: "green" },
          { label: "Premium", color: "blue" },
        ]}

        stats={[
          {
            title: "Sales",
            value: 231,
            icon: <FaCartPlus />,
          },
          {
            title: "Views",
            value: 1420,
            icon: <BsEye />,
          },
        ]}

        actions={[
          {
            icon: <PiPen />,
            color: "#0e6dc7",
            onClick: () => console.log("Edit product"),
          },
          {
            icon: <BsEye />,
            color: "#c7960e",
            onClick: () => console.log("Preview product"),
          },
        ]}
      />

<ProductBox
        image="https://hivoo.ir/files/course/66d087d532370.webp"
        href="/admin/products/react-course"
        title="دوره جامع React"
        description="آموزش کامل React از صفر تا سطح پیشرفته به همراه پروژه‌های واقعی"
        
        tags={[
          { label: "Active", color: "green" },
          { label: "Premium", color: "blue" },
        ]}

        stats={[
          {
            title: "Sales",
            value: 231,
            icon: <FaCartPlus />,
          },
          {
            title: "Views",
            value: 1420,
            icon: <BsEye />,
          },
        ]}

        actions={[
          {
            icon: <PiPen />,
            color: "#0e6dc7",
            onClick: () => console.log("Edit product"),
          },
          {
            icon: <BsEye />,
            color: "#c7960e",
            onClick: () => console.log("Preview product"),
          },
        ]}
      />



                </div>
            </div>
            
        </div>
    )
}