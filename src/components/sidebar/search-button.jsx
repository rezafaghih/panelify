import React, {memo} from "react";
import { CiSearch } from "react-icons/ci";
import { FadeTransitionButton } from "../global/fade-transition-button";
import { useModal } from "../modalProvider";
import { Modal, ModalComponent, ModalHeader } from "../global/modal";
import { Input } from "../global/input";
import { Button } from "../global/buttons";

export const TopBarSearchButton = React.memo(()=>{
    const {openModal} = useModal();
    return (
        <div>
            <FadeTransitionButton onClick={()=>{openModal(<SearchModal/>)}}>
            <CiSearch  size = {30} className="text-(--color-text)"/>
            </FadeTransitionButton>
        </div>
    )
})

const SearchModal = ()=>{
    return (
        <ModalComponent>
            <Modal size = {"xl"}>
                <ModalHeader title = "جست و جو"/>

                <Input label = {"جست و جو"} placeholder = {"به دنبال چه چیزی میگردید؟"}/>

                <div className="flex justify-center w-3/4 mx-auto mt-5 items-center">
                <Button title = "جست و جو" size = "max"/>

                </div>
                 
            </Modal>
        </ModalComponent>
    )
}