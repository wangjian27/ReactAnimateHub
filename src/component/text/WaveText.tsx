import './wave-text.less'

export interface WaveTextProps {
  children: string
  className?: string
  as?: 'span' | 'div' | 'h1' | 'h2' | 'p'
  amplitudePx?: number
  durationMs?: number
  staggerMs?: number
}

export function WaveText({
  children,
  className,
  as = 'span',
  amplitudePx = 10,
  durationMs = 900,
  staggerMs = 45,
}: WaveTextProps) {
  const Comp = as
  const amp = Math.max(0, amplitudePx)
  const dur = Math.max(200, durationMs)
  const stagger = Math.max(0, staggerMs)

  return (
    <Comp
      className={['rah-waveText', className].filter(Boolean).join(' ')}
      style={
        {
          ['--amp' as never]: `${amp}px`,
          ['--dur' as never]: `${dur}ms`,
          ['--stagger' as never]: `${stagger}ms`,
        } as React.CSSProperties
      }
      aria-label={children}
    >
      {children.split('').map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className="rah-waveText__ch"
          style={{ ['--i' as never]: i } as React.CSSProperties}
          aria-hidden="true"
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </Comp>
  )
}

