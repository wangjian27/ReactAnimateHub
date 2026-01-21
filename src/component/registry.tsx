import type { ReactNode } from 'react'
import {
  FadeInOnView,
  FlipCard,
  GradientBorderButton,
  GradientText,
  WaveText,
  LoadingDots,
  MagneticButton,
  OrbitDots,
  RingSpinner,
  RippleButton,
  ShineButton,
  SkeletonLines,
} from '.'

export type ComponentCategory = 'Buttons' | 'Loaders' | 'Text' | 'Cards' | 'Scroll / InView'

export interface ComponentPropMeta {
  name: string
  type: string
  description: string
  defaultValue?: string
}

export interface ComponentDemo {
  id: string
  name: string
  category: ComponentCategory
  description: string
  useCases: string[]
  mainProps: ComponentPropMeta[]
  renderThumb?: () => ReactNode
  renderPreview: () => ReactNode
}

export const componentDemos: ComponentDemo[] = [
  {
    id: 'magnetic-button',
    name: 'MagneticButton',
    category: 'Buttons',
    description: '磁吸按钮：鼠标靠近会轻微跟随，带柔和光晕。',
    useCases: ['CTA/提交按钮的 hover 强化', '导航/卡片操作的微交互', '品牌感按钮/营销页重点动作'],
    mainProps: [
      { name: 'children', type: 'ReactNode', description: '按钮内容' },
      { name: 'strength', type: 'number', defaultValue: '14', description: '磁吸强度（偏移幅度）' },
      { name: 'disabled', type: 'boolean', description: '禁用状态' },
      { name: 'onClick', type: '(e) => void', description: '点击事件' },
      { name: 'className', type: 'string', description: '附加样式类' },
      { name: 'title', type: 'string', description: '原生 title（鼠标悬浮提示）' },
    ],
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
    useCases: ['CTA/提交按钮', '功能入口按钮（需要强调但不喧宾夺主）', '营销页 “开始/立即体验”'],
    mainProps: [
      { name: 'children', type: 'ReactNode', description: '按钮内容' },
      { name: 'disabled', type: 'boolean', description: '禁用状态' },
      { name: 'onClick', type: '(e) => void', description: '点击事件' },
      { name: 'className', type: 'string', description: '附加样式类' },
      { name: 'title', type: 'string', description: '原生 title（鼠标悬浮提示）' },
    ],
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
    useCases: ['移动端/触摸设备按钮反馈', '工具栏/操作按钮的点击回馈', '需要“按下感”的交互'],
    mainProps: [
      { name: 'children', type: 'ReactNode', description: '按钮内容' },
      { name: 'disabled', type: 'boolean', description: '禁用状态' },
      { name: 'onClick', type: '(e) => void', description: '点击事件' },
      { name: 'className', type: 'string', description: '附加样式类' },
      { name: 'title', type: 'string', description: '原生 title（鼠标悬浮提示）' },
    ],
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
    useCases: ['Upgrade/购买等关键动作', '需要“高级感”的主要按钮', '强调但不想用纯色高对比'],
    mainProps: [
      { name: 'children', type: 'ReactNode', description: '按钮内容' },
      { name: 'disabled', type: 'boolean', description: '禁用状态' },
      { name: 'onClick', type: '(e) => void', description: '点击事件' },
      { name: 'className', type: 'string', description: '附加样式类（可用于覆写 CSS 变量）' },
      { name: 'title', type: 'string', description: '原生 title（鼠标悬浮提示）' },
      { name: '--border', type: 'CSS var', defaultValue: '2px', description: '边框厚度（在 class 上覆写）' },
      { name: '--radius', type: 'CSS var', defaultValue: '14px', description: '圆角（在 class 上覆写）' },
    ],
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
    useCases: ['按钮内部 loading', '列表/卡片的局部加载', '轻量等待（< 2s）'],
    mainProps: [
      { name: 'label', type: 'string', defaultValue: 'Loading', description: '无障碍提示文本' },
      { name: 'size', type: 'number', defaultValue: '10', description: '点大小（px）' },
      { name: 'className', type: 'string', description: '附加样式类' },
    ],
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
    useCases: ['页面级 loading', '弹窗/卡片中等待', '偏“系统感”的加载态'],
    mainProps: [
      { name: 'label', type: 'string', defaultValue: 'Loading', description: '无障碍提示文本' },
      { name: 'size', type: 'number', defaultValue: '44', description: '整体尺寸（px）' },
      { name: 'className', type: 'string', description: '附加样式类' },
    ],
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
    useCases: ['等待时间稍长（> 2s）', '更“活泼”的加载态', '品牌化动效'],
    mainProps: [
      { name: 'label', type: 'string', defaultValue: 'Loading', description: '无障碍提示文本' },
      { name: 'size', type: 'number', defaultValue: '46', description: '整体尺寸（px）' },
      { name: 'className', type: 'string', description: '附加样式类' },
    ],
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
    useCases: ['列表/文章/详情页内容加载', '图片/富文本数据请求', '提升体感速度（避免空白）'],
    mainProps: [
      { name: 'label', type: 'string', defaultValue: 'Loading content', description: '无障碍提示文本' },
      { name: 'lines', type: 'number', defaultValue: '3', description: '行数（1~8）' },
      { name: 'className', type: 'string', description: '附加样式类' },
    ],
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
    useCases: ['页面标题/hero 文案', '关键字强调', '品牌色点缀（避免整页过花）'],
    mainProps: [
      { name: 'children', type: 'ReactNode', description: '文本内容' },
      { name: 'as', type: "'span' | 'div' | 'h1' | 'h2' | 'p'", defaultValue: "'span'", description: '渲染的标签' },
      { name: 'className', type: 'string', description: '附加样式类' },
    ],
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
    id: 'wave-text',
    name: 'WaveText',
    category: 'Text',
    description: '文字波浪：逐字上下浮动，适合轻量强调与趣味标题。',
    useCases: ['Hero 标题/短句点缀', '空状态/引导文案', '按钮旁的小提示（不宜太长）'],
    mainProps: [
      { name: 'children', type: 'string', description: '要做波浪动效的文本' },
      { name: 'as', type: "'span' | 'div' | 'h1' | 'h2' | 'p'", defaultValue: "'span'", description: '渲染的标签' },
      { name: 'amplitudePx', type: 'number', defaultValue: '10', description: '波浪振幅（px）' },
      { name: 'durationMs', type: 'number', defaultValue: '900', description: '单个字符动画时长（ms）' },
      { name: 'staggerMs', type: 'number', defaultValue: '45', description: '字符间延迟（ms）' },
      { name: 'className', type: 'string', description: '附加样式类' },
    ],
    renderThumb: () => <WaveText amplitudePx={7}>WAVE</WaveText>,
    renderPreview: () => (
      <div style={{ display: 'grid', gap: 12, placeItems: 'center' }}>
        <WaveText as="h2" amplitudePx={10} durationMs={900} staggerMs={55} className="rah-previewTitle">
          Hello Wave Text
        </WaveText>
        <WaveText amplitudePx={6} durationMs={700} staggerMs={40}>
          Subtle motion, better vibe.
        </WaveText>
      </div>
    ),
  },
  {
    id: 'flip-card',
    name: 'FlipCard',
    category: 'Cards',
    description: 'Hover 翻转：展示正反信息（如简介/详情、前后对比）。',
    useCases: ['产品特性正反说明', '人员卡片/信息卡片', '对比类内容（Before/After）'],
    mainProps: [
      { name: 'front', type: 'ReactNode', description: '正面内容' },
      { name: 'back', type: 'ReactNode', description: '背面内容' },
      { name: 'title', type: 'string', description: '无障碍 label（推荐填写）' },
      { name: 'className', type: 'string', description: '附加样式类' },
    ],
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
    useCases: ['落地页段落/卡片滚动进入', '列表项渐进展示', '减少首屏压迫感'],
    mainProps: [
      { name: 'children', type: 'ReactNode', description: '需要做 in-view 动效的内容' },
      { name: 'from', type: "'up' | 'down' | 'left' | 'right' | 'none'", defaultValue: "'up'", description: '进入方向' },
      { name: 'once', type: 'boolean', defaultValue: 'true', description: '是否只触发一次' },
      { name: 'threshold', type: 'number', defaultValue: '0.15', description: 'IntersectionObserver threshold' },
      { name: 'rootMargin', type: 'string', defaultValue: "'0px 0px -10% 0px'", description: 'IntersectionObserver rootMargin' },
      { name: 'className', type: 'string', description: '附加样式类' },
    ],
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

