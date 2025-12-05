import React, { useState, forwardRef, memo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Input = memo(
  forwardRef(function InputComponent(
    { placeholder, label, type = "text", ...rest },
    ref
  ) {
    return (
      <div className="w-full flex flex-col my-1 gap-1">
        <label className="w-full text-right text-(--color-text) px-2">
          {label}
        </label>

        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          {...rest}
          className={`px-2 text-right py-3 rounded-xl text-(--color-text) transition-all bg-(--background-bg) outline-none focus:border-(--color-primary)/30 border-2 border-transparent`}
        />
      </div>
    );
  })
);


export const Select = memo(
    forwardRef(function SelectComponent(
      { label, placeholder, options = [] },
      ref
    ) {
      const [open, setOpen] = useState(false);
      const [selected, setSelected] = useState(null);
  
      const containerRef = useRef(null);
  
      // اگر ref وجود نداشت خودش بسازد
      const internalRef = useRef({ value: null });
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
        <div dir = "rtl" className="w-full flex flex-col my-1 gap-1 relative" ref={containerRef}>
          <label dir = "rtl" className="w-full text-right text-(--color-text) px-2">
            {label}
          </label>
  
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
                className="absolute top-full mt-1 w-full bg-(--background-bg) shadow-xl
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