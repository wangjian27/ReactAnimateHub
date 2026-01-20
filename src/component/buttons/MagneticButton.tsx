import { useEffect, useMemo, useRef, useState } from 'react'
import './magnetic-button.less'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  strength?: number
  disabled?: boolean
  title?: string
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(media.matches)
    onChange()
    media.addEventListener?.('change', onChange)
    return () => media.removeEventListener?.('change', onChange)
  }, [])

  return reduced
}

export function MagneticButton({
  children,
  onClick,
  className,
  strength = 14,
  disabled,
  title,
}: MagneticButtonProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const ref = useRef<HTMLButtonElement | null>(null)

  const max = useMemo(() => Math.max(0, strength), [strength])

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion || disabled) return

    let raf = 0
    const reset = () => {
      el.style.setProperty('--mx', '0px')
      el.style.setProperty('--my', '0px')
    }

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5

      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${px * max}px`)
        el.style.setProperty('--my', `${py * max}px`)
      })
    }

    const onLeave = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(reset)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)
    reset()

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [disabled, max, prefersReducedMotion])

  return (
    <button
      ref={ref}
      type="button"
      className={['rah-magneticBtn', className].filter(Boolean).join(' ')}
      onClick={onClick}
      disabled={disabled}
      title={title}
    >
      <span className="rah-magneticBtn__inner">{children}</span>
    </button>
  )
}

