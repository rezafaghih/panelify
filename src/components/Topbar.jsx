import React, { memo } from "react"
import { TopBarSearchButton } from "./sidebar/search-button"
import { Modal, ModalComponent, ModalHeader } from "./global/modal"
import { useModal } from "./modalProvider"
import { Input } from "./global/input"
import { Button, ProfileButton } from "./global/buttons"



export const TobBar = ()=>{
    const {openModal} = useModal();
    return (
        <div onClick = {()=>{openModal(
            // <ModalComponent>
            //     <Modal size = {"md"}>
            //         <ModalHeader title = {"جست و جو سریع"}/>
            //         <Input label = "عنوان" placeholder = "عنوان محصول یا مقاله"/>
                    
            //         <div className="w-full flex justify-start gap-2 flex-row mt-5">
            //         <Button onClick = {()=>{alert("Hello world")}} title = "جست و جو"/>
            //         <Button onClick = {()=>{alert("Hello world")}} title = "بستن" color = "bg-[#f33333]"/>

            //         </div>
            //     </Modal>
            // </ModalComponent>
        )}} className="w-[95%] mt-2 rounded-xl mx-auto h-14 bg-(--sidebar-bg) flex flex-row-reverse items-center p-3">

            <div className="w-2/4 flex justify-end items-center">
            <TopBarSearchButton />

            </div>
            <div className="w-2/4 flex  justify-start items-center">
            <ProfileButton profileImage = {"https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg"}/>

            </div>
        </div>
    )
}