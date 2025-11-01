'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import FontSettings from './FontSettings'

type NavLink = {
  label: string
  href: string
}

type AuthLink = NavLink & {
  variant: 'ghost' | 'primary'
}

const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ')

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null)

  const navLinks = useMemo<NavLink[]>(
    () => [
      { label: 'หน้าแรก', href: '/' },
      { label: 'ภารกิจหลัก', href: '#mission' },
      { label: 'บริการความรู้', href: '#services' },
      { label: 'ข่าวและกิจกรรม', href: '#news' },
      { label: 'คลังสื่อ', href: '#media' },
    ],
    [],
  )

  const authLinks = useMemo<AuthLink[]>(
    () => [
      { label: 'เข้าสู่ระบบ', href: '/login', variant: 'ghost' },
      { label: 'สมัครสมาชิก', href: '/register', variant: 'primary' },
    ],
    [],
  )

  useEffect(() => {
    if (!mobileOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!mobileOpen) return

      if (event.key === 'Escape') {
        event.preventDefault()
        setMobileOpen(false)
        toggleButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const container = menuRef.current
      if (!container) return

      const focusable = Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors))
      if (focusable.length === 0) return

      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]
      const isShift = event.shiftKey
      const activeElement = document.activeElement as HTMLElement | null

      if (!isShift && activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }

      if (isShift && activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileOpen])

  useEffect(() => {
    if (mobileOpen) {
      const container = menuRef.current
      const focusable = container?.querySelectorAll<HTMLElement>(focusableSelectors)
      focusable?.[0]?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobileMenu = () => {
    setMobileOpen(false)
    toggleButtonRef.current?.focus()
  }

  return (
    <header className="w-full bg-white shadow-lg">
      <div className="bg-sky-900 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded bg-amber-300 text-base font-black text-sky-900">
              OK
            </span>
            <div className="text-xs sm:text-sm">
              <p className="font-semibold leading-tight">สำนักงานบริหารและพัฒนาองค์ความรู้</p>
              <p className="text-white/80">Office of Knowledge Management and Development</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <FontSettings />
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  link.variant === 'primary'
                    ? 'bg-amber-300 text-sky-900 shadow hover:bg-amber-200'
                    : 'border border-white/40 bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="hidden sm:inline">ค้นหา</span>
              <span className="sm:hidden">ค้นหา</span>
            </button>
            <a
              href="tel:021054000"
              className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-300 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-sky-900 transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              ติดต่อ 02-105-4000
            </a>
          </div>
        </div>
      </div>

      <div className="bg-sky-700 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              ref={toggleButtonRef}
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-white/40 p-2 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? 'ปิดเมนูหลัก' : 'เปิดเมนูหลัก'}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              <span className="sr-only">เมนู</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                )}
              </svg>
            </button>
            <span className="hidden text-lg font-semibold md:inline-flex">OKMD Portal</span>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-2 py-1 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  link.variant === 'primary'
                    ? 'bg-amber-300 text-sky-900 shadow hover:bg-amber-200'
                    : 'border border-white/40 bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-amber-300 px-4 py-2 text-sm font-bold text-sky-900 shadow transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              สมัครร่วมโครงการ
            </Link>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        ref={menuRef}
        className={`md:hidden ${
          mobileOpen ? 'pointer-events-auto max-h-screen opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        } overflow-hidden bg-sky-800 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="space-y-4 px-4 py-4">
          <nav className="flex flex-col gap-2 text-base font-semibold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded px-3 py-2 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            {authLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-center rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  link.variant === 'primary'
                    ? 'bg-amber-300 text-sky-900 shadow hover:bg-amber-200'
                    : 'border border-white/40 bg-white/10 text-white hover:bg-white/20'
                }`}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href="#join"
            className="flex items-center justify-center rounded-full bg-amber-300 px-4 py-2 text-sm font-bold text-sky-900 shadow transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            onClick={closeMobileMenu}
          >
            สมัครร่วมโครงการ
          </Link>
          <a
            href="tel:021054000"
            className="flex items-center justify-center rounded-full border border-amber-300 bg-transparent px-4 py-2 text-sm font-semibold text-amber-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            ติดต่อ 02-105-4000
          </a>
        </div>
      </div>
    </header>
  )
}
