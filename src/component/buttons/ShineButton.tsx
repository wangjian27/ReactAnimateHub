import './shine-button.less'

export interface ShineButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  title?: string
  disabled?: boolean
}

export function ShineButton({ children, onClick, className, title, disabled }: ShineButtonProps) {
  return (
    <button
      type="button"
      className={['rah-shineBtn', className].filter(Boolean).join(' ')}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      <span className="rah-shineBtn__content">{children}</span>
    </button>
  )
}

