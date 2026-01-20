import './skeleton-lines.less'

export interface SkeletonLinesProps {
  label?: string
  lines?: number
  className?: string
}

export function SkeletonLines({ label = 'Loading content', lines = 3, className }: SkeletonLinesProps) {
  const count = Math.max(1, Math.min(8, lines))
  return (
    <div
      className={['rah-skeleton', className].filter(Boolean).join(' ')}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rah-skeleton__line"
          style={{ width: i === count - 1 ? '62%' : i === 0 ? '92%' : '78%' }}
        />
      ))}
    </div>
  )
}

