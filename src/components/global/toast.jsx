import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { FiCheckCircle, FiXCircle, FiAlertTriangle, FiInfo, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

/** Toast Context */
const ToastContext = createContext();
export const useToast = () => useContext(ToastContext);

/** Provider */
export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const sendMessage = useCallback(({ type = "info", message = "", duration = 4000 }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message, duration }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast: { sendMessage } }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

/** Container */
const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-5 right-5 z-9999 flex flex-col gap-3 w-80 max-w-full">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} {...toast} removeToast={removeToast} />
        ))}
      </AnimatePresence>
    </div>
  );
};

/** Icons by type */
const icons = {
  success: <FiCheckCircle className="text-green-600" size={22} />, 
  error: <FiXCircle className="text-red-600" size={22} />, 
  warning: <FiAlertTriangle className="text-yellow-600" size={22} />, 
  info: <FiInfo className="text-blue-600" size={22} />,
};

/** Toast Item */
const ToastItem = ({ id, type, message, duration, removeToast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
      className="relative rounded-xl p-4 shadow-lg border bg-white flex items-center gap-3"
      dir = "rtl"
    >
      {/* Icon */}
      <div className="">{icons[type]}</div>

      {/* Message */}
      <div className="flex-1 text-sm text-gray-800">{message}</div>

      {/* Close button */}
      <button
        onClick={() => removeToast(id)}
        className="text-gray-400 hover:text-gray-600 transition"
      >
        <FiX size={18} />
      </button>

      {/* Progress Bar */}
      <motion.div
        initial={{ width: "98%" }}
        animate={{ width: 0 }}
        transition={{ duration: duration / 1000, ease: "linear" }}
        className={
          "absolute bottom-1 left-[1%] h-[3px] rounded-b-xl " +
          (type === "success"
            ? "bg-green-500"
            : type === "error"
            ? "bg-red-500"
            : type === "warning"
            ? "bg-yellow-500"
            : "bg-blue-500")
        }
      />
    </motion.div>
  );
};

/** Usage Example in App.jsx

import { ToastProvider, useToast } from "./ToastSystem";

function App() {
  const { toast } = useToast();

  return (
    <div>
      <button onClick={() => toast.sendMessage({ type: "success", message: "عملیات موفق بود" })}>
        Show Toast
      </button>
    </div>
  );
}

export default function Root() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}

*/