import Table from "../components/global/table";
import { SimpleHeadingTitle } from "../components/global/title";
import { FaPen, FaTrash } from "react-icons/fa";
export default function ArticlesPage (){

    const columns = [
            { key: "id", label: "شناسه", sortable: true },
            { key: "title", label: "عنوان مقاله", sortable: true },
            { key: "category", label: "دسته بندی", sortable: true },
            { key: "date", label: "تاریخ انتشار", sortable: true },
            { key: "views", label: "بازدید", sortable: true },
            { key: "likes", label: "پسندیده", sortable: true },
           
            {
                key: "ops",
                label: "عملیات",
                type: "actions",
                actions: [
                  { label: <FaPen/>, onClick: (row) => console.log("view", row), className: "px-2 py-1 rounded-lg bg-green-500/20 text-green-600" },
                  { label: <FaTrash/>, onClick: (row) => console.log("delete", row), className: "px-2 py-1 rounded-lg bg-red-500/20 text-red-600" },
                ],
              },
            ];
            
            
            const rows = [
                { id: "#95421", title: "بهترین داشبوردهای React در سال 2025", category: "React", date: "1404/05/01", views: 2450, likes: 34 },
                { id: "#95422", title: "مقایسه React و Vue برای پروژه‌های واقعی", category: "Frontend", date: "1404/05/02", views: 1980, likes: 27 },
                { id: "#95423", title: "10 اشتباه رایج برنامه‌نویسان React", category: "React", date: "1404/05/03", views: 3120, likes: 56 },
                { id: "#95424", title: "ساخت داشبورد ادمین مدرن با Tailwind", category: "UI / UX", date: "1404/05/04", views: 1760, likes: 22 },
                { id: "#95425", title: "بهینه‌سازی Performance در پروژه‌های React", category: "Performance", date: "1404/05/05", views: 2890, likes: 41 },
                { id: "#95426", title: "معماری کامپوننت‌ها در React حرفه‌ای", category: "Architecture", date: "1404/05/06", views: 1540, likes: 19 },
                { id: "#95427", title: "ساخت Sidebar داینامیک با Framer Motion", category: "Animation", date: "1404/05/07", views: 2210, likes: 33 },
                { id: "#95428", title: "مدیریت State در React بدون Redux", category: "State Management", date: "1404/05/08", views: 2670, likes: 38 },
                { id: "#95429", title: "بهترین الگوهای طراحی در Frontend", category: "Design Patterns", date: "1404/05/09", views: 1430, likes: 17 },
                { id: "#95430", title: "چگونه یک داشبورد سریع و مقیاس‌پذیر بسازیم", category: "Best Practices", date: "1404/05/10", views: 3250, likes: 61 },
              ];
              

    return (
        <div className="mx-auto w-[95%]">
            <div className="w-full my-5">
            <SimpleHeadingTitle heading = {2} title = "مقالات منتشر شده"/>
            </div>

            <div className="w-full my-5">
            <Table data={rows} columns={columns}/>
            </div>
        </div>
    )
}