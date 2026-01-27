import { useEffect, useState } from 'react'
import './erase-text.less'

export type EraseDirection = 'ltr' | 'rtl'

export interface EraseTextProps {
  text: string
  className?: string
  as?: 'span' | 'div' | 'h1' | 'h2' | 'p'
  startDelayMs?: number
  durationMs?: number
  lineStaggerMs?: number
  direction?: EraseDirection
  loop?: boolean
}


export function EraseText({
  text,
  className,
  as = 'div',
  startDelayMs = 0,
  durationMs = 1400,
  lineStaggerMs = 220,
  direction = 'ltr',
  loop = false,
}: EraseTextProps) {
  const Comp = as

  const safeStart = Math.max(0, startDelayMs)
  const safeDur = Math.max(240, durationMs)
  const safeStagger = Math.max(0, lineStaggerMs)

  return (
    <Comp
      className={[
        'rah-eraseText',
        loop ? 'rah-eraseText--loop' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      data-rah-dir={direction}
      style={
        {
          ['--start' as never]: `${safeStart}ms`,
          ['--dur' as never]: `${safeDur}ms`,
          ['--stagger' as never]: `${safeStagger}ms`,
        } as React.CSSProperties
      }
      aria-label={text}
    >
      <p>
        Here is a summary in English of the main content of Martin Luther King Jr.'s "I Have a Dream" speech:
        Call to American Ideals
        King references the U.S. Declaration of Independence, emphasizing that all men are created equal and that America must fulfill its promises of liberty and justice.
        Condemnation of Racial Injustice
        He describes the discrimination, segregation, and unfair treatment against African Americans, urging an end to racial injustice.
        Advocacy for Nonviolent Protest
        The speech promotes achieving freedom and equality through peaceful and nonviolent means, rejecting hatred and physical violence.
        Expression of Dreams and Hopes
        The iconic "I have a dream" section includes:
        A vision that one day, Americans of all races will live together in equality and harmony.
        A hope that his children will be judged by their character, not the color of their skin.
        A desire for justice and freedom to ring throughout the United States.
        Call for Unity and Hope
        King urges all Americans to join together to make the dream of freedom and equality a reality, spreading faith, hope, and brotherhood throughout the nation.
        The speech, delivered with passion and conviction, became a key moment in the Civil Rights Movement and contributed profoundly to the progress of social justice in the United States.
      </p>
      <p className='eraser'>
        <span className='eraser__text'>
          Here is a summary in English of the main content of Martin Luther King Jr.'s "I Have a Dream" speech:
          Call to American Ideals
          King references the U.S. Declaration of Independence, emphasizing that all men are created equal and that America must fulfill its promises of liberty and justice.
          Condemnation of Racial Injustice
          He describes the discrimination, segregation, and unfair treatment against African Americans, urging an end to racial injustice.
          Advocacy for Nonviolent Protest
          The speech promotes achieving freedom and equality through peaceful and nonviolent means, rejecting hatred and physical violence.
          Expression of Dreams and Hopes
          The iconic "I have a dream" section includes:
          A vision that one day, Americans of all races will live together in equality and harmony.
          A hope that his children will be judged by their character, not the color of their skin.
          A desire for justice and freedom to ring throughout the United States.
          Call for Unity and Hope
          King urges all Americans to join together to make the dream of freedom and equality a reality, spreading faith, hope, and brotherhood throughout the nation.
          The speech, delivered with passion and conviction, became a key moment in the Civil Rights Movement and contributed profoundly to the progress of social justice in the United States.
        </span>
      </p>
    </Comp>
  )
}

