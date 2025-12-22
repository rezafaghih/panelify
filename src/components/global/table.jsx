import React, { useState, useMemo } from "react";

/**
 * Table (RTL-ready)
 * Props:
 *  - columns: [
 *      { key: "id", label: "شناسه", sortable: true, render: (val,row)=>..., type?: "default"|"actions", actions?: [{ label, onClick, className?, icon? }] }
 *    ]
 *  - data: array of objects
 *
 * Notes:
 *  - برای اضافه کردن ستون عملیات، در columns یک ستون با type: "actions" تعریف کن.
 *  - هیچ prop اضافی برای actions وجود ندارد (تماما داخل columns).
 */
export default function Table({ columns = [], data = [] }) {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return data;
    // نُت: مقایسه ساده — اگر نیاز به مقایسه پیچیده (تاریخ، عدد فرمت شده) داشتی، توی columns یک accessor یا compare تعریف کن.
    const sorted = [...data].sort((a, b) => {
      const valA = a[sortConfig.key];
      const valB = b[sortConfig.key];
      if (valA == null && valB == null) return 0;
      if (valA == null) return 1;
      if (valB == null) return -1;
      if (typeof valA === "number" && typeof valB === "number") {
        return sortConfig.direction === "asc" ? valA - valB : valB - valA;
      }
      const aStr = String(valA).toLowerCase();
      const bStr = String(valB).toLowerCase();
      if (aStr < bStr) return sortConfig.direction === "asc" ? -1 : 1;
      if (aStr > bStr) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [data, sortConfig]);

  const handleSort = (col) => {
    if (!col.sortable) return;
    setSortConfig((prev) => ({
      key: col.key,
      direction: prev.key === col.key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  // فقط ستون‌هایی که در columns تعریف شده‌اند رندر می‌شوند — هیچ duplication وجود ندارد.
  return (
    <div className="w-full overflow-x-auto" dir="rtl">
      <table className="w-full border-collapse text-right">
        <thead>
          <tr className="bg-(--sidebar-bg)">
            {columns.map((col, index) => (
              <th
                key={col.key || `col-${index}`}
                onClick={() => handleSort(col)}
                className={`p-3 ${index === 0 ? "rounded-tr-xl" : ""} ${index === columns.length - 1 ? "rounded-tl-xl" : ""} font-medium text-(--color-text) text-sm cursor-pointer select-none ${col.sortable ? "hover:bg-(--sidebar-bg)" : ""}`}
              >
                <div className="flex items-center gap-2 justify-start">
                  <span>{col.label}</span>
                  {col.sortable && sortConfig.key === col.key && (
                    <span>{sortConfig.direction === "asc" ? "▲" : "▼"}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${rowIndex === sortedData.length - 1 ? "border-transparent" : "border-black/10"} border-b odd:bg-(--sidebar-bg)/70 text-(--color-text-sec) even:bg-(--color-primary)/5 transition`}
            >
              {columns.map((col, colIndex) => {
                // ستون از نوع actions
                if (col.type === "actions") {
                  const actions = Array.isArray(col.actions) ? col.actions : [];
                  return (
                    <td
                      key={col.key || `actions-${colIndex}`}
                      className={`p-3 text-sm flex gap-2 ${rowIndex === sortedData.length - 1 ? "rounded-bl-xl" : ""}`}
                    >
                      {actions.map((act, ai) => {
                        const cls = act.className || "px-2 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700";
                        return (
                          <button
                            key={ai}
                            className={cls}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (typeof act.onClick === "function") act.onClick(row);
                            }}
                            title={act.label}
                          >
                            {act.icon ? <span className="inline-block align-middle">{act.icon}</span> : act.label}
                          </button>
                        );
                      })}
                    </td>
                  );
                }

                // رندر معمولی ستون (با قابلیت render سفارشی)
                return (
                  <td
                    key={col.key || `td-${colIndex}`}
                    className={`p-3 text-sm ${rowIndex === sortedData.length - 1 && colIndex === 0 ? "rounded-br-xl" : ""} ${rowIndex === sortedData.length - 1 && colIndex === columns.length - 1 && !columns.some(c=>c.type==="actions") ? "rounded-bl-xl" : ""}`}
                  >
                    {typeof col.render === "function" ? col.render(row[col.key], row) : row[col.key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
