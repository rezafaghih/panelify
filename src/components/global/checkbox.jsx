import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { GlobalManagment } from "../../../lib/global";
import { GlobalContext } from "../../App";

export const BlurCheckbox = ({ label, avatar, progress, progressColor = "text-blue-500" }) => {
  const [checked, setChecked] = useState(false);
const {theme} = useContext( GlobalContext);
  const toggleCheck = () => {
    setChecked(prev => !prev);
  };

  // فقط اگر progress تعریف شده باشد محاسبه شود
  const radius = 20;
  const strokeWidth = 4;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const offset = progress !== undefined ? circumference - (progress / 100) * circumference : circumference;

  return (
    <div
      dir={GlobalManagment.GlobalConfig().main_info.dir}
      className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-(--sidebar-bg) bg-(--background-bg) cursor-pointer"
    >
      <div className="flex items-center" dir={GlobalManagment.GlobalConfig().main_info.dir}>
        <div
          onClick={toggleCheck}
          className={`w-5 h-5 border-2 rounded-lg flex items-center justify-center cursor-pointer
            ${checked ? " bg-(--sidebar-bg)" : "border-gray-300 bg-(--background-bg)"}
            transition-colors duration-300`}
        >
          {checked && (
            <svg
              className="w-3 h-3 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>

        <div className="flex mx-3 items-center gap-2">
          {avatar && <img src={avatar} alt="avatar" className="w-8 h-8 rounded-full object-cover" />}
          <span className={`transition-all text-(--color-text) duration-300 ${checked ? "blur-sm opacity-70" : "blur-0 opacity-100"}`}>
            {label}
          </span>
        </div>
      </div>

      {progress !== undefined && (
        <div className="relative flex items-center justify-center">
        <svg height={radius * 2} width={radius * 2} className="overflow-visible">
          {/* حلقه پس‌زمینه */}
          <circle
            stroke={theme=="light"?"#e5e7eb":"#4a4a4a"}
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* حلقه progress */}
          <motion.circle
            stroke="currentColor"
            className={progressColor} // tailwind color
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </svg>
        <span className="text-xs text-(--color-text) absolute">
            {progress}%
        </span>
        </div>
      )}
    </div>
  );
};
