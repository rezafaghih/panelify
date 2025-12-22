import React, { useState, forwardRef, memo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
export const Input = memo(
  forwardRef(function InputComponent(
    { placeholder, size = "normal", label, type = "text", color = "main", displayCharacters = false ,defaultValue = "", sub = '', ...rest },
    ref
  ) {

    const [countOfCharacters, setCountOfCharacters] = useState(0);

    const handleChangeCharacters = (e) => {
      if (!displayCharacters) return;
    
      const value = e?.target?.value || ""; // اگر خالی بود "" قرار بده
      setCountOfCharacters(value.length);
    };

    return (
      <div className="w-full flex flex-col my-1 gap-1">
        {label && (
          <label className="w-full flex  items-center text-right text-(--color-text) px-2">
            {label}
            <sub className="mx-2 text-red-500">
              {sub}
            </sub>
          </label>
        )}


        <div className="relative w-full flex items-center justify-center">

        
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          onChange={handleChangeCharacters}
          defaultValue={defaultValue} // مقدار پیش‌فرض قابل ویرایش
          {...rest}
          className={`px-2 text-right py-3 rounded-xl text-(--color-text) transition-all ${color == "main"?"bg-(--background-bg)":"bg-(--sidebar-bg)"} w-full outline-none focus:border-(--color-primary)/30 border-2 border-transparent ${
            size === "normal" ? "h-fit" : "h-32"
          }`}
        />

        {displayCharacters?<span className="flex text-gray-400 items-center justify-center absolute left-2">{countOfCharacters}</span>:""}
        </div>
      </div>
    );
  })
);


export const Select = memo(
  forwardRef(function SelectComponent(
    { label, placeholder, options = [], sub='',defaultValue = null },
    ref
  ) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(defaultValue);

    const containerRef = useRef(null);

    // اگر ref وجود نداشت خودش بسازد
    const internalRef = useRef({ value: defaultValue });
    const finalRef = ref || internalRef;

    // ست کردن مقدار داخل ref روی مقدار انتخاب‌شده
    useEffect(() => {
      finalRef.current = {
        value: selected,
      };
    }, [selected]);

    // بستن با کلیک بیرون
    useEffect(() => {
      const handler = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
      <div
        dir="rtl"
        className="w-full flex flex-col my-1 gap-1 relative"
        ref={containerRef}
      >
        {label && (
          <label className="w-full flex flex-row items-center text-right text-(--color-text) px-2">
          {label}
          <sub className="mx-2 text-red-500">
            {sub}
          </sub>
        </label>
        )}

        {/* SELECT BOX */}
        <div
          onClick={() => setOpen((p) => !p)}
          className="px-2 py-3 rounded-xl text-(--color-text) transition-all bg-(--background-bg)
                     outline-none focus:border-(--color-primary)/30 border-2 border-transparent
                     cursor-pointer flex justify-between items-center"
        >
          <span>
            {selected
              ? options.find((o) => o.value === selected)?.label
              : placeholder}
          </span>

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-(--color-text)"
          >
            ▼
          </motion.span>
        </div>

        {/* OPTIONS */}
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full max-h-60 overflow-y-auto mt-1 w-full bg-(--background-bg) shadow-xl
                         rounded-xl z-50 overflow-hidden border border-(--color-primary)/10"
            >
              {options.map((opt) => (
                <li
                  key={opt.value}
                  onClick={() => {
                    setSelected(opt.value); // مقدار داخلی
                    setOpen(false);
                  }}
                  className={`px-3 py-2 cursor-pointer text-right 
                    hover:bg-(--color-primary)/10 transition ${
                      selected === opt.value ? "bg-(--color-primary)/20" : ""
                    }`}
                >
                  {opt.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  })
);
