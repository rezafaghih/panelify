import React, { memo } from "react"
import { TopBarSearchButton } from "./sidebar/search-button"
import { Modal, ModalComponent, ModalHeader } from "./global/modal"
import { useModal } from "./modalProvider"
import { Input } from "./global/input"
import { Button, ProfileButton } from "./global/buttons"



export const TobBar = ()=>{
    const {openModal} = useModal();
    return (
        <div className="w-[95%] mt-2 rounded-xl mx-auto h-14 bg-(--sidebar-bg) flex flex-row-reverse items-center p-3">

            <div className="w-2/4 flex justify-end items-center">
            <TopBarSearchButton />

            </div>
            <div className="w-2/4 flex  justify-start items-center">
            <ProfileButton profileImage = {"https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg"}/>

            </div>
        </div>
    )
}