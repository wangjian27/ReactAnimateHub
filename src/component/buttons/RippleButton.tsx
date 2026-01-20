import './ripple-button.less'

export interface RippleButtonProps {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
  title?: string
  disabled?: boolean
}

export function RippleButton({ children, onClick, className, title, disabled }: RippleButtonProps) {
  const onPointerDown: React.PointerEventHandler<HTMLButtonElement> = (e) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const ripple = document.createElement('span')
    ripple.className = 'rah-rippleBtn__ripple'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    btn.appendChild(ripple)

    ripple.addEventListener(
      'animationend',
      () => {
        ripple.remove()
      },
      { once: true },
    )
  }

  return (
    <button
      type="button"
      className={['rah-rippleBtn', className].filter(Boolean).join(' ')}
      onClick={onClick}
      onPointerDown={onPointerDown}
      title={title}
      disabled={disabled}
    >
      <span className="rah-rippleBtn__content">{children}</span>
    </button>
  )
}

