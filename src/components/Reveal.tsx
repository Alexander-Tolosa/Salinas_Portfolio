import { useLayoutEffect, useRef, type ElementType, type ReactNode } from 'react'
import { gsap, NO_REDUCED_MOTION } from '@/lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

/**
 * Scroll reveal: a hairline `[data-rule]` draws in left to right, then `[data-item]`
 * children (or the wrapper itself) rise in. Does nothing under reduced motion.
 */
export default function Reveal({ children, className, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const mm = gsap.matchMedia()
    mm.add(NO_REDUCED_MOTION, () => {
      const rule = el.querySelector('[data-rule]')
      const items = el.querySelectorAll('[data-item]')
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 88%', once: true } })
      if (rule) tl.fromTo(rule, { scaleX: 0 }, { scaleX: 1, duration: 1, ease: 'expo.out' }, 0)
      tl.fromTo(
        items.length ? items : el,
        { autoAlpha: 0, y: 28 },
        { autoAlpha: 1, y: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08 },
        0.1,
      )
    })
    return () => mm.revert()
  }, [])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
