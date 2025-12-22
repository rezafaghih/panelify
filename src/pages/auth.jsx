import { Request } from "../../lib/request"
import { useEffect, useRef } from "react";
import { GlobalManagment } from "../../lib/global";
import { Input } from "../components/global/input";
import { Button } from "../components/global/buttons";
import { useToast } from "../components/global/toast";
import { useAuth } from "../components/authContext";
import { Navigate } from "react-router-dom";

export default function BasicAuthPage (){
    const GlobalConfig = GlobalManagment.GlobalConfig();
    const {toast} = useToast();
    const {isAuth, setIsAuth} = useAuth();
    const refs = [
        useRef(), // username
        useRef(), // password
    ]

    const handleSubmit = (event)=>{
        event.preventDefault();

        const username = refs[0].current.value;
        const password = refs[1].current.value;


        if (!username || !password){
            toast.sendMessage({type:"error", message:"لطفا تمامی اطلاعات مورد نیاز را وارد کنید"});
            return false;
        }

        const CountOfRequest = GlobalManagment.GetCookie("login_request") || 0;  
        if (CountOfRequest >= GlobalConfig.auth.request_limit){
            toast.sendMessage({type:"error", message:"تعداد درخواست شما بیش از حد مجاز ، لطفا پس از 5 دقیقه مجدد تلاش کنید"});
            

            return false;
        }
        
        GlobalManagment.SetCookie("login_request", CountOfRequest+1, 1, false, "/");

        toast.sendMessage({type:"success", message:"فرم با موفقیت ایجاد شده است ، جهت تکمیل فرم از فایل auth.jsx درخواست خود را به سمت API ارسال کنید و آن را در تابع handleSubmit قرار بدهید", duration:10000})

        setIsAuth(true)

    }

    if (isAuth){
        return <Navigate to="/" replace/>
    }
    return (
        <div className="w-full h-screen flex items-center justify-center bg-(--background-bg)">
            <form onSubmit={handleSubmit} className="bg-(--sidebar-bg) w-96 flex flex-col items-center p-3 rounded-xl">
                <h1 className="w-full px-2 text-(--color-text) font-bold text-xl mb-2" dir = {GlobalConfig.main_info.dir}>
                    {GlobalConfig.auth.form_main_title}
                </h1>

                <h1 className="w-full px-2 text-sm text-(--color-text-sec)" dir = {GlobalConfig.main_info.dir}>
                    {GlobalConfig.auth.form_description?GlobalConfig.auth.form_description:""}
                </h1>

                <div className="w-full my-5">
                <Input ref = {refs[0]} placeholder = "نام کاربری خود را وارد کنید" label = "نام کاربری"/>
                <Input type = "password" ref={refs[1]} placeholder = "رمزعبور خود را وارد کنید" label = "رمزعبور"/>
                </div>

                <div className="w-3/4 ">
                <Button size = "screen" title = "ورود به حساب" />
                </div>

                             
            </form>
        </div>
    )
}