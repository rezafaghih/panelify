import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import GlobalConfig from "../../configs/global.json";
import { FaAngleDown } from "react-icons/fa6";

export const SidebarButton = React.memo(({ title, icon, path, submenu = [] }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const isActive = location.pathname === path || submenu.some(item => item.path === location.pathname);

  // انیمیشن خط اتصال
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // انیمیشن container زیرمنو برای stagger
  const submenuContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  // انیمیشن آیتم‌های زیرمنو
  const submenuItem = {
    hidden: { opacity: 0, x: GlobalConfig.main_info.dir === "rtl" ? 20 : -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="w-11/12 mx-auto relative" dir = {GlobalConfig.main_info.dir}>
      {/* دکمه اصلی */}
      {submenu.length > 0 ? (
        <button
          onClick={toggleSubmenu}
          className={`w-full flex items-center justify-between rounded-xl px-3 py-3 mb-1
            ${isActive ? "bg-(--color-primary)/20 text-(--color-primary)" : "text-(--color-text)"}
          `}
        >
          <div className="flex items-center gap-2">
            {icon}
            <span>{title}</span>
          </div>
          <motion.span
            animate={{ rotate: isOpen ? 0 : -90 }}
            transition={{ duration: 0.3 }}
          >
            <FaAngleDown/>
          </motion.span>
        </button>
      ) : (
        <Link
          to={path}
          className={`w-full flex items-center rounded-xl px-3 py-3 mb-1
            ${isActive ? "bg-(--color-primary)/20 text-(--color-primary)" : "text-(--color-text)"}
            
          `}
        >
          {icon}
          <span className="ml-2">{title}</span>
        </Link>
      )}

      {/* خط اتصال انیمیشنی */}
      {submenu.length > 0 && (
        <motion.div
          className={`absolute ${GlobalConfig.main_info.dir === "rtl" ? "right-4" : "left-4"} top-[50px] w-0.5 bg-blue-400 origin-top`} 
          style={{ height: submenu.length * 42 }} // ارتفاع واقعی بر اساس تعداد آیتم‌ها
          variants={lineVariants}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
        />
      )}

      {/* زیرمنو با AnimatePresence و stagger */}
      <AnimatePresence>
        {isOpen && submenu.length > 0 && (
          <motion.ul
            className="ml-6 flex flex-col overflow-hidden"
            variants={submenuContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {submenu.map((item) => {
              const isSubActive = location.pathname === item.path;
              return (
                <motion.li
                  key={item.path}
                  variants={submenuItem}
                  className="flex flex-col w-11/12  mx-auto"
                >
                  <Link
                    to={item.path}
                    dir="rtl"
                    className={`py-2 px-2  w-full rounded-lg mb-1 ${isSubActive ? "bg-(--color-primary)/20 text-(--color-primary)" : "text-(--color-text)"} hover:bg-(--color-primary)/20`}
                  >
                    {item.title}
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
});
