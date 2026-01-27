import './hollow-text.less'

export interface HollowTextProps {
  children: React.ReactNode
  className?: string
  as?: 'span' | 'div' | 'h1' | 'h2' | 'p'
}

export function HollowText({
  children,
  className,
  as = 'span',
}: HollowTextProps) {
  const Comp = as

  return (
    <Comp
      className={['rah-hollowText', className].filter(Boolean).join(' ')}
    >
      {children}
    </Comp>
  )
}

