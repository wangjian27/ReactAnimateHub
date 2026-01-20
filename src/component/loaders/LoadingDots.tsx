import './loading-dots.less'

interface LoadingDotsProps {
  label?: string
  size?: number
  className?: string
}

export function LoadingDots({ label = 'Loading', size = 10, className }: LoadingDotsProps) {
  const px = Math.max(6, size)
  return (
    <div
      className={['rah-loadingDots', className].filter(Boolean).join(' ')}
      role="status"
      aria-live="polite"
      aria-label={label}
      style={{ ['--dot' as never]: `${px}px` }}
    >
      <span className="rah-loadingDots__dot" />
      <span className="rah-loadingDots__dot" />
      <span className="rah-loadingDots__dot" />
    </div>
  )
}

