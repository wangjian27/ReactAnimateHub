import { useEffect, useMemo, useState } from 'react'
import './typewriter-text.less'

export interface TypewriterTextProps {
  text: string
  className?: string
  as?: 'span' | 'div' | 'h1' | 'h2' | 'p'
  startDelayMs?: number
  charIntervalMs?: number
  loop?: boolean
  loopDelayMs?: number
  showCaret?: boolean
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

export function TypewriterText({
  text,
  className,
  as = 'span',
  startDelayMs = 0,
  charIntervalMs = 55,
  loop = false,
  loopDelayMs = 900,
  showCaret = true,
}: TypewriterTextProps) {
  const Comp = as
  const prefersReducedMotion = usePrefersReducedMotion()

  const safeStartDelay = Math.max(0, startDelayMs)
  const safeInterval = Math.max(16, charIntervalMs)
  const safeLoopDelay = Math.max(0, loopDelayMs)

  const chars = useMemo(() => text.split(''), [text])
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    setIdx(0)
  }, [text])

  useEffect(() => {
    if (prefersReducedMotion) return

    let t1: number | undefined
    let t2: number | undefined

    const start = () => {
      setIdx(0)
      const tick = () => {
        setIdx((prev) => {
          const next = Math.min(prev + 1, chars.length)
          if (next >= chars.length) {
            if (loop) {
              t2 = window.setTimeout(start, safeLoopDelay)
            }
            return next
          }
          t1 = window.setTimeout(tick, safeInterval)
          return next
        })
      }
      t1 = window.setTimeout(tick, safeInterval)
    }

    t2 = window.setTimeout(start, safeStartDelay)

    return () => {
      if (t1) window.clearTimeout(t1)
      if (t2) window.clearTimeout(t2)
    }
  }, [chars.length, loop, prefersReducedMotion, safeInterval, safeLoopDelay, safeStartDelay])

  const shown = prefersReducedMotion ? text : chars.slice(0, idx).join('')

  return (
    <Comp className={['rah-typewriter', className].filter(Boolean).join(' ')}>
      <span className="rah-typewriter__text" aria-label={text}>
        {shown}
      </span>
      {showCaret && !prefersReducedMotion ? <span className="rah-typewriter__caret" aria-hidden /> : null}
    </Comp>
  )
}

