"use client";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import clsx from "clsx";

interface ApiFile {
  path: string;
  name: string;
}

interface DropzoneInputProps {
  value?: File[]; // ✔ ไฟล์ใหม่จากผู้ใช้
  onChange?: (files: File[]) => void; // ✔ ส่งไฟล์กลับ
  disabled?: boolean;
  multiple?: boolean;
  className?: string;
  accept?: string;
  maxWidth?: number;
  label?:string
  apiFiles?: ApiFile[]; // ✔ ไฟล์จาก API
  onApiFilesChange?: (files: ApiFile[]) => void;
}

export default function DropzoneInput({
  value = [],
  onChange,
  disabled = false,
  multiple = true,
  accept = ".png,.jpg,.jpeg,.pdf,.doc,.docx",
  maxWidth = 800,
  className = "",
  label="",
  apiFiles = [],
  onApiFilesChange,
}: DropzoneInputProps) {
  const [files, setFiles] = useState<File[]>(value);
  const [oldFiles, setOldFiles] = useState<ApiFile[]>(apiFiles);
  const baseUrl = "/api/uploads/";

  /** โหลดค่าเริ่มต้นจาก props */
  useEffect(() => {
    if (value.length > 0 || files.length === 0) {
      setFiles(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  // useEffect(() => setOldFiles(apiFiles), [apiFiles]);

  /** Resize รูป */
  const resizeImage = (file: File) =>
    new Promise<File>((resolve) => {
      if (!file.type.startsWith("image/")) return resolve(file);

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const scale = Math.min(maxWidth / img.width, 1);
          const canvas = document.createElement("canvas");
          canvas.width = img.width * scale;
          canvas.height = img.height * scale;
          const ctx = canvas.getContext("2d");
          if (!ctx) return resolve(file);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(
            (blob) => {
              if (!blob) return resolve(file);
              resolve(
                new File([blob], file.name, {
                  type: file.type,
                  lastModified: Date.now(),
                }),
              );
            },
            file.type,
            0.8,
          );
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    });

  /** handle drop */
  const onDrop = async (acceptedFiles: File[]) => {
    if (disabled) return;

    const resized = await Promise.all(acceptedFiles.map((f) => resizeImage(f)));

    const newList = multiple ? [...files, ...resized] : [resized[0]];

    setFiles(newList);
    onChange?.(newList);
  };

  /** handle remove new file */
  const removeFile = (index: number) => {
    const updated = files.filter((_, i) => i !== index);

    setFiles(updated);
    onChange?.(updated);
  };

  /** handle remove API file */
  const removeApiFile = (index: number) => {
    const updated = oldFiles.filter((_, i) => i !== index);
    setOldFiles(updated);
    onApiFilesChange?.(updated);
  };

  /** accepted MIME */
  const extToMime: Record<string, string> = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp",
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  };

  const acceptedMimes = accept
    .split(",")
    .map((ext) => ext.replace(".", "").trim().toLowerCase())
    .map((ext) => extToMime[ext])
    .filter(Boolean) as string[];

  const acceptObject =
    acceptedMimes.length > 0
      ? acceptedMimes.reduce<Record<string, string[]>>((obj, mime) => {
          obj[mime] = [];
          return obj;
        }, {})
      : undefined;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    disabled,
    multiple,
    accept: acceptObject,
  });

  /** generate preview list */
  const previews = [
    ...oldFiles.map((f) => ({
      name: f.name,
      src: baseUrl + f.path,
      isApi: true,
      size: null,
      type: f.name.split(".").pop() || "",
    })),
    ...files.map((f) => ({
      name: f.name,
      src: URL.createObjectURL(f),
      isApi: false,
      size: f.size,
      type: f.type,
    })),
  ];

  const formatSize = (size: number | null) => {
    if (!size) return "";
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / 1024 / 1024).toFixed(2)} MB`;
  };

  return (
    <div className={clsx("space-y-2 w-full", className)}>
      <div className="mb-2 text-left">
        {label}
      </div>
      <div
        {...getRootProps()}
        className={`border border-dashed rounded-xl p-4 min-h-[150px] flex flex-wrap gap-4 justify-center items-start text-center relative transition
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${isDragActive ? "border-blue-500 bg-gray-100" : "border-gray-300 bg-gray-50"}
        `}
      >
        <input {...getInputProps()} />

        {previews.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-600 py-4">
            <div className="text-3xl mb-2">📁</div>
            <p>
              {isDragActive
                ? "ปล่อยไฟล์ที่นี่"
                : "ลาก & วางไฟล์ หรือคลิกเพื่อเลือก"}
            </p>
          </div>
        ) : (
          previews.map((f, i) => {
            const isImage = f.type.includes("image");
            return (
              <div
                key={i}
                className="relative w-28 h-36 border bg-white rounded-lg shadow-sm overflow-hidden flex flex-col text-xs group"
              >
                {isImage ? (
                  <img src={f.src} alt={f.name} className="w-full h-24 object-cover" />
                ) : (
                  <div className="w-full h-24 bg-gray-200 flex items-center justify-center">
                    📄 {f.name.split(".").pop()?.toUpperCase()}
                  </div>
                )}

                <div className="px-1 py-1 text-center truncate">{f.name}</div>
                {f.size && (
                  <div className="px-1 text-[10px] text-gray-500 text-center">
                    {formatSize(f.size)}
                  </div>
                )}

                {!disabled && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (f.isApi) {
                        removeApiFile(i);
                      } else {
                        removeFile(i - oldFiles.length);
                      }
                    }}
                    className="absolute top-1 right-1 bg-black/70 text-white rounded-full w-5 h-5 text-[10px] flex items-center justify-center opacity-0 group-hover:opacity-100"
                  >
                    ✕
                  </button>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
