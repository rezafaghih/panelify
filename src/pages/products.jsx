import { FaPen, FaTrash } from "react-icons/fa";
import Table from "../components/global/table";
import { EmptyButton } from "../components/global/buttons";
import React from "react";
import { Modal, ModalComponent, ModalHeader } from "../components/global/modal"
import { useModal } from "../components/modalProvider";
import { Input } from "../components/global/input";

export default function ProductsPage (){

    // use modal for display custom modal
    const {openModal} = useModal();

    const columns = [
        { key: "id", label: "شناسه", sortable: true },
        { key: "name", label: "نام مشتری", sortable: true },
        { key: "price", label: "مبلغ", sortable: true },
        {
        key: "method",
        label: "روش پرداخت",
        render: (value) => <span className="text-blue-600 font-medium">{value}</span>,
        },
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
        { id: "#95421", name: "علی رضایی", price: "$120", method: "VISA" },
        { id: "#95422", name: "سارا محمدی", price: "$220", method: "PayPal" },
        { id: "#95423", name: "مینا احمدی", price: "$310", method: "Mastercard" },
        ];

    return (
        <div className="w-[95%] mx-auto my-5">
        <div className="my-4 w-full flex justify-between items-center flex-row-reverse">
            <span className="font-bold text-2xl text-(--color-text)">
                محصولات
            </span>
            <EmptyButton onClick = {()=>openModal(<AddProductModal/>)} title = "افزودن محصول" color = "(--color-primary)"/>
        </div>
        <Table columns={columns} data={rows}/>
        </div>
    )

}


const AddProductModal = React.memo(()=>{
    return (
        <ModalComponent>
            <Modal>
                <ModalHeader title = "افزودن محصول"/>
                <div className="w-full my-3 flex flex-col items-center gap-2">
                    <Input label = "عنوان محصول" placeholder = "عنوان محصول را وارد کنید"/>
                    <Input label = "توضیحات کوتاه" placeholder = "عنوان محصول را وارد کنید"/>
                </div>
            </Modal>
        </ModalComponent>
    )
})

