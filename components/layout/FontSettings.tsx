"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  FONT_SIZE_CLASSES,
  FONT_SIZE_SEQUENCE,
  contrastToStorage,
  decreaseFontSize,
  increaseFontSize,
  storageToContrast,
  storageToFontSize,
} from "./fontSettingsLogic.mjs";

const FONT_SIZE_KEY = "okmd:font-size";
const CONTRAST_KEY = "okmd:contrast";

type FontSize = (typeof FONT_SIZE_SEQUENCE)[number];

type ButtonConfig = {
  id: string;
  label: string;
  title: string;
  action: () => void;
  isActive: boolean;
  text: string;
  disabled?: boolean;
};

export default function FontSettings() {
  const [fontSize, setFontSize] = useState<FontSize>("base");
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedSize = storageToFontSize(window.localStorage.getItem(FONT_SIZE_KEY));
    const storedContrast = storageToContrast(window.localStorage.getItem(CONTRAST_KEY));
    setFontSize(storedSize);
    setHighContrast(storedContrast);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    FONT_SIZE_SEQUENCE.forEach((size) => {
      root.classList.remove(FONT_SIZE_CLASSES[size]);
    });
    root.classList.add(FONT_SIZE_CLASSES[fontSize]);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(FONT_SIZE_KEY, fontSize);
    }
  }, [fontSize]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    root.classList.toggle("contrast-high", highContrast);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(CONTRAST_KEY, contrastToStorage(highContrast));
    }
  }, [highContrast]);

  const handleDecrease = useCallback(() => {
    setFontSize((current) => decreaseFontSize(current));
  }, []);

  const handleReset = useCallback(() => {
    setFontSize("base");
  }, []);

  const handleIncrease = useCallback(() => {
    setFontSize((current) => increaseFontSize(current));
  }, []);

  const handleContrast = useCallback(() => {
    setHighContrast((current) => !current);
  }, []);

  const buttons: ButtonConfig[] = useMemo(
    () => [
      {
        id: "decrease",
        label: "ลดขนาดตัวอักษร",
        title: "ลดขนาดตัวอักษร",
        action: handleDecrease,
        isActive: fontSize === "small",
        text: "A-",
        disabled: fontSize === "small",
      },
      {
        id: "reset",
        label: "ขนาดมาตรฐาน",
        title: "ตั้งค่าขนาดตัวอักษรเป็นมาตรฐาน",
        action: handleReset,
        isActive: fontSize === "base",
        text: "A",
      },
      {
        id: "increase",
        label: "เพิ่มขนาดตัวอักษร",
        title: "เพิ่มขนาดตัวอักษร",
        action: handleIncrease,
        isActive: fontSize === "large",
        text: "A+",
        disabled: fontSize === "large",
      },
      {
        id: "contrast",
        label: "โหมดคอนทราสต์สูง",
        title: "สลับโหมดคอนทราสต์สูง",
        action: handleContrast,
        isActive: highContrast,
        text: "คอนทราสต์",
      },
    ],
    [fontSize, handleContrast, handleDecrease, handleIncrease, handleReset, highContrast]
  );

  const baseButtonClass =
    "flex h-8 items-center justify-center rounded-full border border-slate-300 px-3 text-xs font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 aria-pressed:bg-blue-600 aria-pressed:text-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600";

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 text-xs font-medium text-slate-700 md:gap-3">
      {buttons.map((button) => (
        <button
          key={button.id}
          type="button"
          className={`${baseButtonClass} ${button.id === "contrast" ? "contrast-toggle" : ""}`}
          aria-label={button.label}
          aria-pressed={button.isActive}
          title={button.title}
          onClick={button.action}
          disabled={button.disabled}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
}
