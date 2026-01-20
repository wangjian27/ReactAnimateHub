import './gradient-text.less'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  as?: 'span' | 'div' | 'h1' | 'h2' | 'p'
}

export function GradientText({ children, className, as = 'span' }: GradientTextProps) {
  const Comp = as
  return <Comp className={['rah-gradientText', className].filter(Boolean).join(' ')}>{children}</Comp>
}

