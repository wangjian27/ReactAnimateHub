import type { ReactNode } from 'react'
import {
  FadeInOnView,
  FlipCard,
  GradientBorderButton,
  GradientText,
  LoadingDots,
  MagneticButton,
  OrbitDots,
  RingSpinner,
  RippleButton,
  ShineButton,
  SkeletonLines,
} from '.'

export type ComponentCategory = 'Buttons' | 'Loaders' | 'Text' | 'Cards' | 'Scroll / InView'

export interface ComponentDemo {
  id: string
  name: string
  category: ComponentCategory
  description: string
  renderThumb?: () => ReactNode
  renderPreview: () => ReactNode
}

export const componentDemos: ComponentDemo[] = [
  {
    id: 'magnetic-button',
    name: 'MagneticButton',
    category: 'Buttons',
    description: '磁吸按钮：鼠标靠近会轻微跟随，带柔和光晕。',
    renderThumb: () => <MagneticButton strength={10}>Hover me</MagneticButton>,
    renderPreview: () => (
      <div style={{ display: 'grid', gap: 12, placeItems: 'center' }}>
        <MagneticButton>Primary action</MagneticButton>
        <MagneticButton strength={22}>Stronger</MagneticButton>
        <MagneticButton disabled title="Disabled">
          Disabled
        </MagneticButton>
      </div>
    ),
  },
  {
    id: 'shine-button',
    name: 'ShineButton',
    category: 'Buttons',
    description: 'Hover 扫光：适合 CTA/提交按钮，短促但很“高级”。',
    renderThumb: () => <ShineButton>Shine</ShineButton>,
    renderPreview: () => (
      <div style={{ display: 'grid', gap: 12, placeItems: 'center' }}>
        <ShineButton>Get started</ShineButton>
        <ShineButton disabled>Disabled</ShineButton>
      </div>
    ),
  },
  {
    id: 'ripple-button',
    name: 'RippleButton',
    category: 'Buttons',
    description: '点击水波纹：用 pointer 位置生成 ripple，手感明显。',
    renderThumb: () => <RippleButton>Click</RippleButton>,
    renderPreview: () => (
      <div style={{ display: 'grid', gap: 12, placeItems: 'center' }}>
        <RippleButton>Click me</RippleButton>
        <RippleButton>Try different spots</RippleButton>
      </div>
    ),
  },
  {
    id: 'gradient-border-button',
    name: 'GradientBorderButton',
    category: 'Buttons',
    description: '流动渐变边框：conic-gradient 旋转，适合“重点操作”。',
    renderThumb: () => <GradientBorderButton>Border</GradientBorderButton>,
    renderPreview: () => (
      <div style={{ display: 'grid', gap: 12, placeItems: 'center' }}>
        <GradientBorderButton>Upgrade</GradientBorderButton>
        <GradientBorderButton disabled>Disabled</GradientBorderButton>
      </div>
    ),
  },
  {
    id: 'loading-dots',
    name: 'LoadingDots',
    category: 'Loaders',
    description: '3 点跳动加载态：适合按钮、卡片、页面骨架的局部 loading。',
    renderThumb: () => <LoadingDots />,
    renderPreview: () => (
      <div style={{ display: 'grid', gap: 12, placeItems: 'center' }}>
        <LoadingDots />
        <LoadingDots size={8} label="Loading small" />
        <LoadingDots size={14} label="Loading large" />
      </div>
    ),
  },
  {
    id: 'ring-spinner',
    name: 'RingSpinner',
    category: 'Loaders',
    description: '渐变环形 spinner：清晰、现代，适合全局/局部 loading。',
    renderThumb: () => <RingSpinner size={34} />,
    renderPreview: () => (
      <div style={{ display: 'grid', gap: 14, placeItems: 'center' }}>
        <RingSpinner />
        <RingSpinner size={32} label="Small loading" />
        <RingSpinner size={56} label="Large loading" />
      </div>
    ),
  },
  {
    id: 'orbit-dots',
    name: 'OrbitDots',
    category: 'Loaders',
    description: '三点轨道：节奏感强，适合等待时间稍长的场景。',
    renderThumb: () => <OrbitDots size={38} />,
    renderPreview: () => (
      <div style={{ display: 'grid', gap: 14, placeItems: 'center' }}>
        <OrbitDots />
        <OrbitDots size={36} />
        <OrbitDots size={58} />
      </div>
    ),
  },
  {
    id: 'skeleton-lines',
    name: 'SkeletonLines',
    category: 'Loaders',
    description: '骨架 shimmer：更适合内容加载，不会让用户“空等”。',
    renderThumb: () => <SkeletonLines lines={3} />,
    renderPreview: () => (
      <div style={{ width: 'min(560px, 100%)' }}>
        <SkeletonLines lines={4} />
      </div>
    ),
  },
  {
    id: 'gradient-text',
    name: 'GradientText',
    category: 'Text',
    description: '流动渐变文字：适合标题/强调信息（自动适配深浅色）。',
    renderThumb: () => <GradientText as="div">Gradient</GradientText>,
    renderPreview: () => (
      <div style={{ display: 'grid', gap: 10 }}>
        <GradientText as="h2" className="rah-previewTitle">
          Motion makes UI alive
        </GradientText>
        <p className="rah-paragraph" style={{ margin: 0 }}>
          把它当作标题或关键字高亮来用。
        </p>
      </div>
    ),
  },
  {
    id: 'flip-card',
    name: 'FlipCard',
    category: 'Cards',
    description: 'Hover 翻转：展示正反信息（如简介/详情、前后对比）。',
    renderThumb: () => (
      <div style={{ width: 220 }}>
        <FlipCard
          title="Flip card thumb"
          front={
            <div className="rah-flipContent">
              <div className="rah-flipBadge">FRONT</div>
              <div className="rah-flipText">Hover</div>
            </div>
          }
          back={
            <div className="rah-flipContent">
              <div className="rah-flipBadge">BACK</div>
              <div className="rah-flipText">Details</div>
            </div>
          }
        />
      </div>
    ),
    renderPreview: () => (
      <div style={{ width: 'min(520px, 100%)' }}>
        <FlipCard
          title="Flip card preview"
          front={
            <div className="rah-flipContent">
              <div className="rah-flipBadge">FRONT</div>
              <div className="rah-flipText">Hover to flip</div>
            </div>
          }
          back={
            <div className="rah-flipContent">
              <div className="rah-flipBadge">BACK</div>
              <div className="rah-flipText">Slot-based content</div>
            </div>
          }
        />
      </div>
    ),
  },
  {
    id: 'fade-in-on-view',
    name: 'FadeInOnView',
    category: 'Scroll / InView',
    description: '进入视口触发淡入：做落地页/列表动效很常用。',
    renderThumb: () => (
      <FadeInOnView threshold={0} once={false} from="none">
        <div className="rah-thumbPill">InView</div>
      </FadeInOnView>
    ),
    renderPreview: () => (
      <div className="rah-inViewPreview">
        <p className="rah-paragraph" style={{ margin: 0 }}>
          下面这个区域会在你滚动时触发（为了演示，这里放了一个可滚动容器）。
        </p>
        <div className="rah-inViewPreview__scroll">
          <div className="rah-inViewPreview__spacer" />
          <FadeInOnView once={false} from="up" rootMargin="0px 0px -20% 0px">
            <div className="rah-demoCard">
              <div className="rah-demoCard__title">FadeInOnView (up)</div>
              <div className="rah-demoCard__body">
                <p className="rah-paragraph">Scroll me into view</p>
              </div>
            </div>
          </FadeInOnView>
          <div className="rah-inViewPreview__spacer" />
          <FadeInOnView once={false} from="left" rootMargin="0px 0px -20% 0px">
            <div className="rah-demoCard">
              <div className="rah-demoCard__title">FadeInOnView (left)</div>
              <div className="rah-demoCard__body">
                <p className="rah-paragraph">Same component, different direction</p>
              </div>
            </div>
          </FadeInOnView>
          <div className="rah-inViewPreview__spacer" />
        </div>
      </div>
    ),
  },
]

