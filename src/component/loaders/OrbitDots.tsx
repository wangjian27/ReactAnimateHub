import './orbit-dots.less'

export interface OrbitDotsProps {
  label?: string
  size?: number
  className?: string
}

export function OrbitDots({ label = 'Loading', size = 46, className }: OrbitDotsProps) {
  const px = Math.max(22, size)
  return (
    <div
      className={['rah-orbitDots', className].filter(Boolean).join(' ')}
      role="status"
      aria-live="polite"
      aria-label={label}
      style={{ ['--size' as never]: `${px}px` }}
    >
      <span className="rah-orbitDots__dot rah-orbitDots__dot--a" />
      <span className="rah-orbitDots__dot rah-orbitDots__dot--b" />
      <span className="rah-orbitDots__dot rah-orbitDots__dot--c" />
    </div>
  )
}

