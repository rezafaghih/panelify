import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";

/**
 * Popover Component
 * --------------------------------------------------
 * A lightweight floating panel that is anchored
 * to a trigger element (button, icon, etc).
 *
 * Common use cases:
 * - Notifications menu
 * - Profile dropdown
 * - Action menus
 *
 * Props:
 * @param {ReactNode} children
 *   The trigger element (button, icon, etc).
 *
 * @param {ReactNode} menu
 *   The content rendered inside the popover.
 *
 * @param {"left" | "right"} position
 *   Determines popover alignment relative to trigger.
 *   Default: "left"
 *
 * @param {boolean} isOpen
 *   Controls visibility of the popover.
 *   Default: false
 */

export const Popover = ({ children, menu, position = "left", isOpen, setIsOpen }) => {
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
        console.log("HGI")
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false); // فقط وقتی بیرون کلیک شد، بسته شود
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div className="relative inline-block" ref={popoverRef}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <PopoverContainer position={position}>
            {menu}
          </PopoverContainer>
        )}
      </AnimatePresence>
    </div>
  );
};


/**
 * Internal Popover Container
 * Handles positioning & animation
 */
const PopoverContainer = ({ children, position }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className={`
        absolute top-full mt-2
        ${position === "right" ? "left-0" : "right-0"}
        bg-(--sidebar-bg)
        border border-(--sidebar-bg)
        rounded-xl
        shadow-lg
        z-[9999]
        overflow-hidden
        py-3
      `}
    >
      {children}
    </motion.div>
  );
};
