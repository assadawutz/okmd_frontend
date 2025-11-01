'use client'

import { useEffect, useMemo, useState } from 'react'

type FontScale = 'sm' | 'md' | 'lg'

const FONT_SCALE_STORAGE_KEY = 'okmd-font-scale'
const CONTRAST_STORAGE_KEY = 'okmd-contrast-mode'
const FONT_SCALE_CLASSES: Record<FontScale, string> = {
  sm: 'font-scale-sm',
  md: 'font-scale-md',
  lg: 'font-scale-lg',
}

const controls = [
  { label: 'A-', aria: 'ลดขนาดตัวอักษร' },
  { label: 'A', aria: 'รีเซ็ตขนาดตัวอักษร' },
  { label: 'A+', aria: 'เพิ่มขนาดตัวอักษร' },
]

export default function FontSettings() {
  const [fontScale, setFontScale] = useState<FontScale>('md')
  const [highContrast, setHighContrast] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  const fontOptions = useMemo(
    () => [
      { label: 'A-', value: 'sm' as FontScale, description: 'ลดขนาดตัวอักษร' },
      { label: 'A', value: 'md' as FontScale, description: 'ขนาดมาตรฐาน' },
      { label: 'A+', value: 'lg' as FontScale, description: 'เพิ่มขนาดตัวอักษร' },
    ],
    [],
  )

  useEffect(() => {
    setHydrated(true)
    if (typeof window === 'undefined') return

    const storedScale = window.localStorage.getItem(FONT_SCALE_STORAGE_KEY) as FontScale | null
    const storedContrast = window.localStorage.getItem(CONTRAST_STORAGE_KEY)

    if (storedScale && storedScale in FONT_SCALE_CLASSES) {
      setFontScale(storedScale)
      applyFontScale(storedScale)
    } else {
      applyFontScale('md')
    }

    if (storedContrast === 'high') {
      setHighContrast(true)
      applyContrastMode(true)
    } else {
      applyContrastMode(false)
    }
  }, [])

  useEffect(() => {
    if (!hydrated || typeof window === 'undefined') return
    applyFontScale(fontScale)
    window.localStorage.setItem(FONT_SCALE_STORAGE_KEY, fontScale)
  }, [fontScale, hydrated])

  useEffect(() => {
    if (!hydrated || typeof window === 'undefined') return
    applyContrastMode(highContrast)
    window.localStorage.setItem(CONTRAST_STORAGE_KEY, highContrast ? 'high' : 'normal')
  }, [highContrast, hydrated])

  const handleFontScaleChange = (value: FontScale) => {
    setFontScale(value)
  }

  const handleContrastToggle = () => {
    setHighContrast((prev) => !prev)
  }

  if (!hydrated) {
    return (
      <div className="flex items-center gap-1 text-xs text-white/80" aria-hidden="true">
        {fontOptions.map((option) => (
          <span
            key={option.value}
            className="inline-flex h-8 w-8 items-center justify-center rounded border border-white/20 bg-white/10"
          >
            {option.label}
          </span>
        ))}
        <span className="inline-flex h-8 items-center justify-center rounded border border-white/20 bg-white/10 px-3">
          Contrast
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2 text-white" aria-label="ตั้งค่าการแสดงผล">
      <div className="flex items-center gap-1" role="group" aria-label="ปรับขนาดตัวอักษร">
        {fontOptions.map((option) => {
          const isActive = fontScale === option.value
          return (
            <button
              key={option.value}
              type="button"
              className={`inline-flex h-8 w-8 items-center justify-center rounded border text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                isActive ? 'border-white bg-white text-sky-900 shadow' : 'border-white/40 bg-white/10 hover:bg-white/20'
              }`}
              aria-pressed={isActive}
              aria-label={option.description}
              title={option.description}
              onClick={() => handleFontScaleChange(option.value)}
            >
              {option.label}
            </button>
          )
        })}
      </div>
      <button
        type="button"
        className={`inline-flex h-8 items-center justify-center gap-2 rounded border px-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
          highContrast ? 'border-amber-300 bg-amber-300 text-sky-900 shadow' : 'border-white/40 bg-white/10 hover:bg-white/20'
        }`}
        aria-pressed={highContrast}
        aria-label={highContrast ? 'ปิดโหมด contrast สูง' : 'เปิดโหมด contrast สูง'}
        title={highContrast ? 'ปิดโหมด contrast สูง' : 'เปิดโหมด contrast สูง'}
        onClick={handleContrastToggle}
      >
        <span className="text-xs font-bold uppercase tracking-wide">Contrast</span>
        <span className="sr-only">{highContrast ? 'เปิดใช้งานอยู่' : 'ยังไม่เปิดใช้งาน'}</span>
        <span
          className={`h-2.5 w-6 rounded-full border ${
            highContrast ? 'border-sky-900 bg-sky-900' : 'border-white/40 bg-white/30'
          }`}
          aria-hidden="true"
        >
          <span
            className={`block h-2 w-2 rounded-full bg-white transition-transform ${
              highContrast ? 'translate-x-3' : 'translate-x-0'
            }`}
          />
        </span>
      </button>
    </div>
  )
}

function applyFontScale(scale: FontScale) {
  if (typeof document === 'undefined') return
  const { classList } = document.documentElement
  Object.values(FONT_SCALE_CLASSES).forEach((className) => {
    if (classList.contains(className)) {
      classList.remove(className)
    }
  })
  classList.add(FONT_SCALE_CLASSES[scale])
}

function applyContrastMode(enabled: boolean) {
  if (typeof document === 'undefined') return
  document.documentElement.classList.toggle('high-contrast', enabled)
}
