import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaBold, FaHeading, FaItalic, FaLink, FaListOl, FaListUl, FaUnderline } from "react-icons/fa";
import { BsImage, BsTypeH1, BsTypeH2, BsTypeH3, BsTypeH4, BsTypeH5, BsTypeH6 } from "react-icons/bs";
import { VscQuote } from "react-icons/vsc";
import { LuCodeXml } from "react-icons/lu";
import { Modal, ModalComponent, ModalHeader } from "./modal";
import { Input, Select } from "./input";
import { useModal } from "../modalProvider";
import { Button, TextButton } from "./buttons";
import { useEffect, useRef, useState } from "react";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import { HexColorPicker } from "react-colorful";
import { IoColorPaletteOutline } from "react-icons/io5";
import { ImLtr, ImRtl } from "react-icons/im";


export default function TextEditor({ value, onChange }) {
    const {openModal} = useModal();
    const [savedColor, setSavedColor] = useState("#000000");


    const editor = useEditor({
        extensions: [
          StarterKit,
          Image,
          Link,
          TextStyle,
          Color,
          Highlight.configure({ multicolor: true }),
          TextAlign.configure({
            types: ["heading", "paragraph"],
          }),
        ],
        content: value,
        onUpdate: ({ editor }) => onChange(editor.getHTML()),
    });

  if (!editor) return null;

  const addImage = () => {
    const url = prompt("Image URL:");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const setLink = () => {
    const url = prompt("Link URL:");
    if (url) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  };

  return (
    <div className="text-editor-container bg-(--sidebar-bg)/70 rounded-xl min-h-56">
      <div className="toolbar bg-(--sidebar-bg) border-b border-black/20 p-2 rounded-lg  flex justify-between items-center">
        <button
          className={editor.isActive("bold") ? "active" : ""}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <FaBold />
        </button>

        <button
          className={editor.isActive("italic") ? "active" : ""}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <FaItalic/>
        </button>

        <button
          className={editor.isActive("underline") ? "active" : ""}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <FaUnderline/>
        </button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
          <BsTypeH1/>
        </button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
        <BsTypeH2/>

        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
        <BsTypeH3/>

        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}>
        <BsTypeH4/>

        </button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}>
        <BsTypeH5/>

        </button>

        <button onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}>
        <BsTypeH6/>
        </button>

        <button onClick={() => editor.chain().focus().toggleBulletList().run()}>
        <FaListUl />
        </button>

        <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        <FaListOl />
        </button>

        <button onClick={() => editor.chain().focus().toggleBlockquote().run()}>
        <VscQuote />
        </button>

        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
            <LuCodeXml/>
        </button>
        <button onClick={()=>{openModal(<ColorModal savedColor={savedColor} setSavedColor={setSavedColor} editor={editor}/>)}}><IoColorPaletteOutline />        </button>


        <button onClick={()=>{openModal(<LinkModal editor={editor}/>)}}><FaLink />        </button>

        <button onClick={()=>{openModal(<ImageModal editor={editor}/>)}}><BsImage/></button>


        <button onClick={() => editor.chain().focus().setTextAlign("left").run()}>
        <FaAlignLeft />

            </button>

            <button onClick={() => editor.chain().focus().setTextAlign("center").run()}>
            <FaAlignCenter />

            </button>

            <button onClick={() => editor.chain().focus().setTextAlign("right").run()}>
            <FaAlignRight />

            </button>

            <button onClick={() => editor.chain().focus().setTextAlign("justify").run()}>
            <FaAlignJustify />

            </button>


            

  {/* <input type="color" onChange={(e) =>
    editor.chain().focus().setColor(e.target.value).run()
   />

  <input type="color" onChange={(e) =>
    editor.chain().focus().setHighlight({ color: e.target.value }).run()
   /> */}

             {/* RTL / LTR */}
  <button onClick={() => editor.view.dom.setAttribute("dir", "rtl")}>
    <ImRtl/>
  </button>
  <button onClick={() => editor.view.dom.setAttribute("dir", "ltr")}>
  <ImLtr/>

  </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}

const LinkModal = ({editor})=>{
    const {closeModal} = useModal();
    const url = useRef();
    const selectRef = useRef();

    const handleAddLink = ()=>{
        let followType = selectRef.current.value==1?"follow":'nofollow';
        

        editor.chain().focus().extendMarkRange("link").setLink({ href: url.current.value, rel : followType }).run();
        closeModal()
    }

    return (
        <ModalComponent>

            <Modal>
                <ModalHeader title = "افزودن لینک"/>

                <Input ref={url} label = "لینک" placeholder = "لینک خود را وارد کنید"/>

                <Select
                    ref={selectRef}
                    label="نوع follow"
                    placeholder="انتخاب کنید"
                    options={[
                        { label: "follow", value: 1 },
                        { label: "nofollow", value: 2 },
                    ]}
                    />
                <div className="w-full mt-6 flex justify-between items-center">
                    <Button onClick={handleAddLink} title = "افزودن لینک"/>
                    <TextButton  title = "بستن" type = "danger" onClick = {closeModal}/>
                </div>
            </Modal>
        </ModalComponent>
    )
}


const ImageModal = ({editor})=>{
    const {closeModal} = useModal();

    const alt = useRef();
    const imageUrl = useRef();

    const handleAddImage = ()=>{
        if (imageUrl.current.value) editor.chain().focus().setImage({ src: imageUrl.current.value, alt : alt.current.value, title:alt.current.value }).run();
        closeModal();
    }

    return (
        <ModalComponent>

            <Modal>
                <ModalHeader title = "افزودن تصویر"/>

                <Input ref={imageUrl} label = "Url" placeholder = "آدرس تصویر را وارد کنید"/>
                <Input ref={alt} label = "عنوان تصویر" placeholder = "عنوان تصویر را بنویسید"/>

                
                <div className="w-full mt-6 flex justify-between items-center">
                    <Button onClick={handleAddImage} title = "افزودن لینک"/>
                    <TextButton  title = "بستن" type = "danger" onClick = {closeModal}/>
                </div>
            </Modal>
        </ModalComponent>
    )
}

const ColorModal = ({editor, savedColor, setSavedColor})=>{
    const {closeModal} = useModal();
    const [color, setColor] = useState(savedColor);

    const handleAddImage = ()=>{
        closeModal();

        editor.chain().focus().setColor(color).run()
    }

    useEffect(()=>{

        setSavedColor(color);
    }, [color])

    return (
        <ModalComponent>

            <Modal>
                <ModalHeader title = "ویرایش رنگ"/>

                <div className="w-full p-3 bg-white ">
  <HexColorPicker color={color} onChange={setColor} />
</div>
                
                <div className="w-full mt-6 flex justify-between items-center">
                    <Button onClick={handleAddImage} title = "اعمال رنگ"/>
                    <TextButton  title = "بستن" type = "danger" onClick = {closeModal}/>
                </div>
            </Modal>
        </ModalComponent>
    )
}