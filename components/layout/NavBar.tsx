'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useMemo, useRef, useState } from 'react'

import FontSettings from './FontSettings'

const focusableSelectors = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

export default function NavBar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null)

  const primaryLinks = useMemo(
    () => [
      { href: '/', label: 'หน้าแรก' },
      { href: '/about', label: 'เกี่ยวกับเรา' },
      { href: '/projects', label: 'โครงการ' },
      { href: '/services', label: 'บริการ' },
      { href: '/news', label: 'ข่าวสาร' },
    ],
    [],
  )

  useEffect(() => {
    if (!mobileOpen) {
      return
    }

    const menuNode = mobileMenuRef.current
    if (!menuNode) {
      return
    }

    const previousFocus = document.activeElement as HTMLElement | null
    const focusable = Array.from(
      menuNode.querySelectorAll<HTMLElement>(focusableSelectors),
    )

    if (!focusable.length) {
      menuNode.focus()
    } else {
      focusable[0].focus()
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setMobileOpen(false)
        return
      }

      if (event.key !== 'Tab' || !focusable.length) {
        return
      }

      const firstElement = focusable[0]
      const lastElement = focusable[focusable.length - 1]

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement.focus()
        }
        return
      }

      if (document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (previousFocus) {
        previousFocus.focus()
      } else if (toggleButtonRef.current) {
        toggleButtonRef.current.focus()
      }
    }
  }, [mobileOpen])

  const closeMobileMenu = () => setMobileOpen(false)

  return (
    <header className='bg-sky-900 text-sky-50 shadow-lg'>
      <div className='border-b border-sky-800 bg-sky-900'>
        <div className='mx-auto flex h-12 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center gap-3'>
            <Link href='/' className='flex items-center gap-2 text-base font-semibold tracking-wide text-white hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300'>
              <span className='inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-700 text-sm font-bold uppercase'>OK</span>
              <span className='hidden sm:inline'>Office of Knowledge Management</span>
            </Link>
            <span className='hidden text-xs font-medium text-sky-200 lg:inline'>สร้างองค์ความรู้เพื่อทุกคน</span>
          </div>
          <div className='flex items-center gap-4'>
            <FontSettings />
            <button
              type='button'
              className='hidden h-9 items-center rounded-full border border-sky-700 px-4 text-sm font-medium text-sky-100 transition-colors hover:border-sky-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 lg:inline-flex'
            >
              ค้นหา
            </button>
            <a
              href='/contact'
              className='hidden h-9 items-center rounded-full bg-sky-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:inline-flex'
            >
              ติดต่อเรา
            </a>
          </div>
        </div>
      </div>
      <div className='bg-sky-800'>
        <div className='mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <nav className='hidden items-center gap-6 text-sm font-medium md:flex'>
            {primaryLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md px-1 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-sky-100 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <a
            href='/donate'
            className='hidden rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-sky-900 transition-colors hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200 md:inline-flex'
          >
            สนับสนุนเรา
          </a>
          <button
            ref={toggleButtonRef}
            type='button'
            className='inline-flex items-center justify-center rounded-md border border-sky-700 p-2 text-sky-100 transition-colors hover:border-sky-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 md:hidden'
            aria-expanded={mobileOpen}
            aria-controls='mobile-navigation'
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className='sr-only'>เปิดเมนูหลัก</span>
            <span className='flex h-5 w-5 flex-col justify-between'>
              <span className={`block h-[2px] w-full rounded-full bg-current transition-transform ${mobileOpen ? 'translate-y-[6px] rotate-45' : ''}`}></span>
              <span className={`block h-[2px] w-full rounded-full bg-current transition-opacity ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-[2px] w-full rounded-full bg-current transition-transform ${mobileOpen ? '-translate-y-[6px] -rotate-45' : ''}`}></span>
            </span>
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <div
          id='mobile-navigation'
          ref={mobileMenuRef}
          tabIndex={-1}
          className='md:hidden border-t border-sky-700 bg-sky-900 px-4 pb-6 pt-4 shadow-inner sm:px-6'
        >
          <nav className='flex flex-col gap-2 text-base font-medium'>
            {primaryLinks.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-md px-3 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 ${
                    isActive
                      ? 'bg-sky-800 text-white'
                      : 'text-sky-100 hover:bg-sky-800 hover:text-white'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className='mt-4 flex flex-col gap-2'>
            <button
              type='button'
              className='h-10 rounded-full border border-sky-700 px-4 text-sm font-medium text-sky-100 transition-colors hover:border-sky-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300'
            >
              ค้นหา
            </button>
            <a
              href='/contact'
              className='h-10 rounded-full bg-sky-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300'
              onClick={closeMobileMenu}
            >
              ติดต่อเรา
            </a>
            <a
              href='/donate'
              className='h-10 rounded-full bg-amber-400 px-4 text-sm font-semibold text-sky-900 transition-colors hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-200'
              onClick={closeMobileMenu}
            >
              สนับสนุนเรา
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
