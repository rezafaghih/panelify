import { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import GlobalConfig from "../../configs/global.json";

/*
Props structure example:
{
  title: "مجموع فروش",
  datasets: {
    "7days": [{ name: "شنبه", value: 41000 }, ...],
    "15days": [...],
    "30days": [...]
  },
  dataKey: "value" // the key to read from objects
}
*/

export default function ProChart({ title, datasets, dataKey }) {
  const dataTypes = Object.keys(datasets);
  const [activeType, setActiveType] = useState(dataTypes[0]);

  return (
    <div className="bg-white p-4 flex flex-col gap-4 rounded-xl w-full shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between flex-row-reverse">
        <span className="font-bold text-lg">{title}</span>
      </div>

      {/* Dynamic Dataset Selector Buttons */}
      {dataTypes.length > 1 && (
        <div className="flex gap-2 justify-end flex-wrap">
          {dataTypes.map((type) => (
            <button
              key={type}
              dir = "rtl"
              onClick={() => setActiveType(type)}
              className={`px-3 py-1 rounded-xl text-sm border transition-all duration-200 shadow-sm ${
                activeType === type
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      )}

      {/* Chart */}
      <div className="w-full h-72 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={datasets[activeType]}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />

            <Area
              type="monotone"
              dataKey={dataKey}
              stroke={GlobalConfig.colors.color_primary}
              fill="#00000012"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}