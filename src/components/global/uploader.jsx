// uploader.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// A generic upload handler that supports API upload or base64 fallback
async function handleUpload(file, apiUrl, onProgress) {
  return new Promise((resolve, reject) => {
    if (!file) return reject("No file selected");

    // --- If API URL exists → upload to server ---
    if (apiUrl) {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", apiUrl);

      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable && onProgress) {
          const progress = Math.round((e.loaded / e.total) * 100);
          onProgress(progress);
        }
      };

      xhr.onload = () => {
        try {
          const res = JSON.parse(xhr.responseText);
          resolve(res.url || null);
        } catch (err) {
          reject(err);
        }
      };

      xhr.onerror = () => reject("Upload failed");

      const formData = new FormData();
      formData.append("file", file);
      xhr.send(formData);
    }

    // --- Else fallback to Base64 ---
    else {
      const reader = new FileReader();

      reader.onload = () => {
        if (onProgress) onProgress(100);
        resolve(reader.result);
      };

      reader.onerror = () => reject("Base64 reading failed");
      reader.readAsDataURL(file);
    }
  });
}

// ---------- Image Uploader ----------

export function ImageUploader({ apiUrl, onUploaded, manualUpload = false , defaultPreview = null}) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState(defaultPreview);

  const onSelectFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setLoading(true);
    setProgress(0);
    const localPreview = URL.createObjectURL(file);
    setPreview(localPreview);

    try {
      if (manualUpload) {
        // فقط فایل برگردانده می‌شود، آپلود انجام نمی‌شود
        if (onUploaded) onUploaded(file);
      } else {
        // حالت قبلی: آپلود از طریق API
        const url = await handleUpload(file, apiUrl, setProgress);
        if (onUploaded) onUploaded(url);
      }
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="w-full text-right">
      <h2 className="text-lg font-bold mb-3 text-gray-800">افزودن تصویر</h2>

      <label className="w-full h-32 border-dashed border border-gray-400 flex items-center justify-center bg-(--background-bg) rounded-xl cursor-pointer text-gray-600 hover:bg-(--color-primary)/10 transition overflow-hidden">
        {preview ? (
          <img 
            src={preview} 
            alt="preview" 
            className="w-full h-full object-cover"
          />
        ) : (
          <span>انتخاب تصویر</span>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={onSelectFile}
          className="hidden"
        />
      </label>

      {fileName && <p className="text-sm text-gray-500 mt-2">{fileName}</p>}

      {!manualUpload && loading && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: progress + "%" }}
          className="h-2 bg-blue-600 rounded-full mt-4"
        />
      )}
    </div>
  );
}

// ---------- File Uploader ----------
export function FileUploader({ apiUrl, onUploaded }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const onSelectFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setLoading(true);
    setProgress(0);

    try {
      const url = await handleUpload(file, apiUrl, setProgress);
      if (onUploaded) onUploaded(url);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 text-right">
      <h2 className="text-lg font-bold mb-3 text-gray-800">آپلود فایل</h2>

      <label className="block w-full bg-gray-100 py-3 px-4 rounded-xl cursor-pointer text-gray-600 hover:bg-gray-200 transition">
        انتخاب فایل
        <input type="file" onChange={onSelectFile} className="hidden" />
      </label>

      {fileName && <p className="text-sm text-gray-500 mt-2">{fileName}</p>}

      {loading && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: progress + "%" }}
          className="h-2 bg-green-600 rounded-full mt-4"
        />
      )}
    </div>
  );
}

// ---------- Video Uploader ----------
export function VideoUploader({ apiUrl, onUploaded }) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const onSelectFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);
    setLoading(true);
    setProgress(0);

    try {
      const url = await handleUpload(file, apiUrl, setProgress);
      if (onUploaded) onUploaded(url);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl p-6 text-right">
      <h2 className="text-lg font-bold mb-3 text-gray-800">آپلود ویدئو</h2>

      <label className="block w-full bg-gray-100 py-3 px-4 rounded-xl cursor-pointer text-gray-600 hover:bg-gray-200 transition">
        انتخاب ویدئو
        <input type="file" accept="video/*" onChange={onSelectFile} className="hidden" />
      </label>

      {fileName && <p className="text-sm text-gray-500 mt-2">{fileName}</p>}

      {loading && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: progress + "%" }}
          className="h-2 bg-red-600 rounded-full mt-4"
        />
      )}
    </div>
  );
}
