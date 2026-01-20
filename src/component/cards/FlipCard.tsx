import './flip-card.less'

interface FlipCardProps {
  front: React.ReactNode
  back: React.ReactNode
  className?: string
  title?: string
}

export function FlipCard({ front, back, className, title }: FlipCardProps) {
  return (
    <div className={['rah-flipCard', className].filter(Boolean).join(' ')} aria-label={title}>
      <div className="rah-flipCard__inner">
        <div className="rah-flipCard__face rah-flipCard__face--front">{front}</div>
        <div className="rah-flipCard__face rah-flipCard__face--back">{back}</div>
      </div>
    </div>
  )
}

