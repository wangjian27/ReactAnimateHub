import './gradient-border-button.less'

export interface GradientBorderButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  title?: string
  disabled?: boolean
}

export function GradientBorderButton({
  children,
  onClick,
  className,
  title,
  disabled,
}: GradientBorderButtonProps) {
  return (
    <button
      type="button"
      className={['rah-gradientBorderBtn', className].filter(Boolean).join(' ')}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      <span className="rah-gradientBorderBtn__inner">{children}</span>
    </button>
  )
}

