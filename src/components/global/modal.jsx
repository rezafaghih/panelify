import React from "react";
import GlobalConfig from "../../configs/global.json"
import { CgClose, CgSpinner } from "react-icons/cg";
import { useModal } from "../modalProvider";

export const ModalComponent = React.memo(({children, loading = true})=>{
    return (
        <div className="w-full h-screen flex items-center justify-center fixed left-0 top-0 z-20 backdrop-blur-sm bg-(--background-bg)/10">
            {
                loading? children :<CgSpinner className="text-3xl animate-spin"/>
            }
        </div>
    )
})

/**
 * size can be md, lg, xl, screen
 */
export const Modal = React.memo(({size = "md", children})=>{
    let widthSize = "";

    size=="md"&&widthSize==""?widthSize="w-96":"";
    size=="lg"&&widthSize==""?widthSize="w-[450px]":"";
    size=="xl"&&widthSize==""?widthSize="w-[650px]":"";
    size=="screen"&&widthSize==""?widthSize="w-11/12":"";

    return (
        <div className={`${widthSize} max-h-[95vh] overflow-y-auto p-2 bg-(--sidebar-bg) rounded-xl drop-shadow-2xl drop-shadow-black/10`}>
            {/* {
                loading? children :<CgSpinner className="text-3xl animate-spin"/>
            } */}
            {children}
        </div>  
    )
})


export const ModalHeader = React.memo (({title})=>{
    const {closeModal} = useModal();
    return (
        <div className={`w-full border-b border-black/10 justify-between  p-2 flex ${GlobalConfig.main_info.dir == "rtl"?"flex-row-reverse":"flex-row"} text-(--color-text) items-center`}>
            <span className="text-lg " dir = {GlobalConfig.main_info.dir}>
                {title}
            </span>

            <CgClose className="text-xl" onClick = {()=>{closeModal()}}/>
        </div>
    )
})