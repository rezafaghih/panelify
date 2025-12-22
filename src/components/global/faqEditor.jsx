import React, { useState, useEffect } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";


/**
 * FaqEditor is a simple component to create FAQEditor system in your dashboard for example if you want to add faq to your product you can use this component it will return an json
 * 
 * props : 
 *  - onChange : statue function for get faq json  
 * 
 */

export default function FAQEditor({ onChange, defaultValue = [] }) {
  const [faqs, setFaqs] = useState([]);

  // مقداردهی اولیه از defaultValue فقط یک بار
  useEffect(() => {
    if (Array.isArray(defaultValue) && defaultValue.length > 0) {
      setFaqs(defaultValue);
    }
  }, [defaultValue]);

  const handleAdd = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleDelete = (index) => {
    const newFaqs = faqs.filter((_, i) => i !== index);
    setFaqs(newFaqs);
  };

  const handleChange = (index, key, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][key] = value;
    setFaqs(newFaqs);
  };

  // هر بار تغییر کرد، مقدار نهایی را بده
  useEffect(() => {
    onChange?.(faqs);
  }, [faqs]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="w-full gap-2 flex-row-reverse text-right flex items-center"
        >
          <input
            type="text"
            placeholder="سوال را وارد کنید"
            value={faq.question}
            onChange={(e) => handleChange(index, "question", e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            placeholder="پاسخ را وارد کنید"
            value={faq.answer}
            onChange={(e) => handleChange(index, "answer", e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            className="text-red-500 cursor-pointer hover:text-red-700"
            onClick={() => handleDelete(index)}
          >
            <FaTrash />
          </button>
        </div>
      ))}

      <div className="w-full flex justify-start">
        <button
          className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all text-sm"
          onClick={handleAdd}
        >
          <FaPlus />
          افزودن سوال متداول
        </button>
      </div>
    </div>
  );
}


/**
 * OptionEditor
 * 
 * props:
 * - fields: [
 *     { name: "key", placeholder: "عنوان" },
 *     { name: "value", placeholder: "مقدار" },
 *     { name: "extra", placeholder: "اطلاعات اضافی" }
 *   ]
 *
 * - buttonTitle
 * - onChange
 *
 * پیشفرض: فقط دو فیلد key و value
 */
export const OptionEditor = ({
  onChange,
  buttonTitle = "افزودن مقدار",
  fields = [
    { name: "key", placeholder: "عنوان" },
    { name: "value", placeholder: "مقدار" }
  ],
  defaultValue = []   // اضافه شد
}) => {

  const [options, setOptions] = useState([]);

  const createEmptyOption = () => {
    const obj = {};
    fields.forEach((f) => (obj[f.name] = ""));
    return obj;
  };

  // 🔵 مقداردهی اولیه با defaultValue — فقط یک بار
  useEffect(() => {
    if (Array.isArray(defaultValue) && defaultValue.length > 0) {
      // فیلتر: فقط مقادیر معتبر را نگه‌دار
      const sanitized = defaultValue.map((item) => {
        const obj = {};
        fields.forEach((f) => {
          obj[f.name] = item[f.name] ?? ""; // اگر نبود خالی
        });
        return obj;
      });

      setOptions(sanitized);
    }
  }, [defaultValue]);

  const handleAdd = () => {
    setOptions([...options, createEmptyOption()]);
  };

  const handleDelete = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const newOptions = [...options];
    newOptions[index][field] = value;
    setOptions(newOptions);
  };

  // ارسال خروجی به والد
  useEffect(() => {
    onChange?.(options);
  }, [options]);

  return (
    <div className="flex flex-col gap-4 w-full text-right">

      {options.map((item, index) => (
        <div
          key={index}
          className="w-full flex lg:bg-transparent bg-gray-100 p-3 lg:p-0 rounded-lg items-center gap-3 flex-col lg:flex-row-reverse"
        >
          {/* 🔵 حلقه روی تمام فیلدهای داینامیک */}
          {fields.map((field, fIndex) => (
            <input
              key={fIndex}
              type="text"
              placeholder={field.placeholder}
              value={item[field.name]}
              dir="rtl"
              onChange={(e) => handleChange(index, field.name, e.target.value)}
              className="w-full border border-gray-300 rounded-md text-(--color-text) p-2 focus:ring-2 focus:ring-blue-400"
            />
          ))}

          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(index)}
          >
            <FaTrash />
          </button>
        </div>
      ))}

      <div className="w-full flex justify-start">
        <button
          className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          onClick={handleAdd}
        >
          <FaPlus /> {buttonTitle}
        </button>
      </div>
    </div>
  );
};

