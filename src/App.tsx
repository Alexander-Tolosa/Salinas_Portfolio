import { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function App() {
  const { pathname } = useLocation()
  const main = useRef<HTMLElement>(null)
  const prevPath = useRef(pathname)

  // Move focus to the page on route change so keyboard and screen-reader users land in the new content.
  useEffect(() => {
    if (prevPath.current === pathname) return
    prevPath.current = pathname
    main.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main" ref={main} tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  )
}
