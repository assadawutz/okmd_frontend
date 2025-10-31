import React from 'react'

const controls = [
  { label: 'A-', aria: 'ลดขนาดตัวอักษร' },
  { label: 'A', aria: 'รีเซ็ตขนาดตัวอักษร' },
  { label: 'A+', aria: 'เพิ่มขนาดตัวอักษร' },
]

export default function FontSettings() {
  return (
    <div className='flex items-center gap-1 text-xs font-medium text-sky-100'>
      <span className='hidden text-sky-200 lg:inline'>Font</span>
      {controls.map((item) => (
        <button
          key={item.label}
          type='button'
          aria-label={item.aria}
          className='flex h-8 w-8 items-center justify-center rounded border border-sky-700 bg-sky-800 text-xs font-semibold transition-colors hover:border-sky-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300'
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
