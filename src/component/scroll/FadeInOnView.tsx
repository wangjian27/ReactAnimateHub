import { useEffect, useId, useRef, useState } from 'react'
import './fade-in-on-view.less'

interface FadeInOnViewProps {
  children: React.ReactNode
  className?: string
  once?: boolean
  threshold?: number
  rootMargin?: string
  from?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export function FadeInOnView({
  children,
  className,
  once = true,
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
  from = 'up',
}: FadeInOnViewProps) {
  const id = useId()
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return (
    <div
      ref={ref}
      data-rah-inview={inView ? 'true' : 'false'}
      data-rah-from={from}
      className={['rah-fadeInOnView', className].filter(Boolean).join(' ')}
      aria-describedby={id}
    >
      <span id={id} className="rah-srOnly">
        Animated on view
      </span>
      {children}
    </div>
  )
}

