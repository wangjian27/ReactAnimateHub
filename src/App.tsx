import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { GradientText, MagneticButton } from './component'
import { componentDemos } from './component/registry'

function App() {
  const DIRECTORY_SCROLL_KEY = 'rah:directoryScrollY'
  const [hash, setHash] = useState(() => window.location.hash)
  const comingBackToDirectoryRef = useRef(false)
  const prevActiveIdRef = useRef<string | null>(null)

  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const activeId = useMemo(() => {
    const m = hash.match(/^#\/component\/([^/]+)$/)
    return m?.[1] ?? null
  }, [hash])

  const active = useMemo(
    () => (activeId ? componentDemos.find((d) => d.id === activeId) ?? null : null),
    [activeId],
  )

  useEffect(() => {
    document.title = active ? `${active.name} • React Animate Hub` : 'React Animate Hub'
  }, [active])

  useEffect(() => {
    const prev = prevActiveIdRef.current
    // Browser back button: #/component/... -> '' should restore scroll.
    if (prev && !activeId) comingBackToDirectoryRef.current = true
    prevActiveIdRef.current = activeId
  }, [activeId])

  useLayoutEffect(() => {
    if (activeId) {
      // When entering a preview page, start from the top.
      window.scrollTo({ top: 0 })
      return
    }

    if (!comingBackToDirectoryRef.current) return
    comingBackToDirectoryRef.current = false

    const raw = sessionStorage.getItem(DIRECTORY_SCROLL_KEY)
    const y = raw ? Number(raw) : 0
    if (!Number.isFinite(y) || y <= 0) return

    // Wait a frame so layout/height is settled.
    requestAnimationFrame(() => window.scrollTo({ top: y }))
  }, [activeId])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof componentDemos>()
    for (const d of componentDemos) {
      const list = map.get(d.category) ?? []
      list.push(d)
      map.set(d.category, list)
    }
    return Array.from(map.entries())
  }, [])

  const goHome = () => {
    comingBackToDirectoryRef.current = true
    window.location.hash = ''
  }

  const goPreview = (id: string) => {
    sessionStorage.setItem(DIRECTORY_SCROLL_KEY, String(window.scrollY))
    window.location.hash = `#/component/${id}`
  }

  if (active) {
    return (
      <div className="rah-app">
        <header className="rah-header">
          <div className="rah-header__title">
            <GradientText as="h1">{active.name}</GradientText>
            <p className="rah-subtitle">{active.description}</p>
          </div>
          <div className="rah-header__cta">
            <MagneticButton onClick={goHome} title="Back to directory">
              ← 返回目录
            </MagneticButton>
          </div>
        </header>

        <main className="rah-main">
          <section className="rah-section">
            <div className="rah-section__head">
              <h2>Preview</h2>
              <p>
                分类：<code className="rah-inlineCode">{active.category}</code>
              </p>
            </div>
            <div className="rah-detailGrid">
              <div className="rah-detailCard">
                <div className="rah-detailCard__title">适用场景</div>
                <ul className="rah-list">
                  {active.useCases.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="rah-detailCard">
                <div className="rah-detailCard__title">主要参数</div>
                <div className="rah-tableWrap">
                  <table className="rah-table">
                    <thead>
                      <tr>
                        <th>name</th>
                        <th>type</th>
                        <th>default</th>
                        <th>desc</th>
                      </tr>
                    </thead>
                    <tbody>
                      {active.mainProps.map((p) => (
                        <tr key={p.name}>
                          <td>
                            <code>{p.name}</code>
                          </td>
                          <td>
                            <code>{p.type}</code>
                          </td>
                          <td>{p.defaultValue ? <code>{p.defaultValue}</code> : '-'}</td>
                          <td>{p.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="rah-preview">{active.renderPreview()}</div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="rah-app">
      <header className="rah-header">
        <div className="rah-header__title">
          <GradientText as="h1">React Animate Hub</GradientText>
          <p className="rah-subtitle">把动效当成组件来收集、分类、复用。</p>
        </div>
        <div className="rah-header__cta">
          <MagneticButton
            onClick={() => {
              document.getElementById('directory')?.scrollIntoView({ behavior: 'smooth' })
            }}
            title="Scroll to gallery"
          >
            开始浏览 <span className="rah-arrow">→</span>
          </MagneticButton>
        </div>
      </header>

      <main id="directory" className="rah-main">
        {grouped.map(([category, demos]) => (
          <section key={category} className="rah-section">
            <div className="rah-section__head">
              <h2>{category}</h2>
              <p>点击条目进入预览。</p>
            </div>
            <div className="rah-grid">
              {demos.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  className="rah-entry"
                  onClick={() => goPreview(d.id)}
                  aria-label={`Preview ${d.name}`}
                >
                  <div className="rah-entry__top">
                    <div className="rah-entry__name">{d.name}</div>
                    <div className="rah-entry__pill">Preview →</div>
                  </div>
                  <div className="rah-entry__desc">{d.description}</div>
                  <div className="rah-entry__thumb">{d.renderThumb?.()}</div>
                </button>
              ))}
            </div>
          </section>
        ))}

        <footer className="rah-footer">
          <span>Next: 你可以继续往</span>
          <code className="rah-inlineCode">src/component/</code>
          <span>里加更多分类组件。</span>
        </footer>
      </main>
    </div>
  )
}

export default App
