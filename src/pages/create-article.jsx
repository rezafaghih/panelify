import { useState } from "react";
import { GlobalManagment } from "../../lib/global";
import { Input, Select } from "../components/global/input";
import { ImageUploader } from "../components/global/uploader";
import TextEditor from "../components/global/textEditor";
import { OptionEditor } from "../components/global/faqEditor";

export default function CreateArticle (){
    const mainConfig = GlobalManagment.GlobalConfig();
    const [content, setContent] = useState('');

    return (
        <div className="w-[95%] mx-auto my-5 p-2 bg-(--sidebar-bg) rounded-xl">
            <ImageUploader/>

            <div className="w-full flex lg:flex-row flex-col gap-2 my-5" dir = {mainConfig.main_info.dir}>
                <Input label = "عنوان مقاله" displayCharacters = {true} placeholder = "عنوان مقاله"/>
                <Input label = "آدرس Slug" placeholder = "آدرس Slug"/>
                <Select label = "دسته بندی" placeholder = "دسته بندی محصولات" options = {
                    [
                        {label:"محصولات فرهنگی", value:1},
                        {label:"محصولات دیجیتال", value:2},
                        {label:"کالای فیزیکی", value:3},
                        {label:"هوش مصنوعی", value:4},

                    ]
                }/>
            </div>

            <div className="w-full flex gap-2 my-5" dir = {mainConfig.main_info.dir}>
                <Input displayCharacters = {true} size = {"textArea"} label = "توضیحات کوتاه" placeholder = "توضیحات کوتاه را بنویسید"/>
                
            </div>

            <TextEditor value = {content} onChange={setContent}/>


            <div className="w-full flex gap-2 my-5" dir = {mainConfig.main_info.dir}>
                <h2 className="text-xl text-(--color-text) font-bold">
                    مقالات مرتبط
                </h2>  
            </div>
            <OptionEditor buttonTitle="افزودن مقاله مرتبط" fields={[
                {name:"title", placeholder:"عنوان"},
                {name:"url", placeholder:"آدرس مقاله"},
            ]}/>
        </div>
    )
}