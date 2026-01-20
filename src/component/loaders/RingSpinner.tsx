import './ring-spinner.less'

export interface RingSpinnerProps {
  label?: string
  size?: number
  className?: string
}

export function RingSpinner({ label = 'Loading', size = 44, className }: RingSpinnerProps) {
  const px = Math.max(18, size)
  return (
    <div
      className={['rah-ringSpinner', className].filter(Boolean).join(' ')}
      role="status"
      aria-live="polite"
      aria-label={label}
      style={{ ['--size' as never]: `${px}px` }}
    />
  )
}

