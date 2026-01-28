# React Animate Hub

一个用于**收集/沉淀动效组件**的小型站点：提供组件目录页 + 详情预览页，方便你把各种动画效果按类别整理成可复用组件。

## 本地启动

```bash
pnpm install
pnpm dev
```

构建：

```bash
pnpm build
pnpm preview
```

## 项目结构

```text
src/
  component/                # 动效组件库（按类别划分）
    buttons/
    loaders/
    text/
    cards/
    scroll/
    index.ts                # 统一导出
    registry.tsx            # 组件目录/预览元数据（核心入口）
  App.tsx                   # 目录页 + 详情页（hash 路由）
  App.css                   # 站点 UI（目录卡片、详情页信息区等）
```

## 如何新增一个组件（推荐流程）

1) 在 `src/component/<category>/` 新建组件文件（例如 `MyEffect.tsx`）和样式（`.less`）。
2) 在该类别的 `index.ts` 里导出组件。
3) 在 `src/component/registry.tsx` 的 `componentDemos` 数组中新增一条配置：
   - `id/name/category/description`
   - `useCases`：适用场景（数组）
   - `mainProps`：主要参数（name/type/default/desc）
   - `renderThumb`：目录页缩略预览
   - `renderPreview`：详情页大预览

完成后会自动出现在首页目录，点击即可进入详情页预览。

## 样式与 Less

- 本项目使用 **Less**（组件样式文件以 `.less` 为主），Vite 会自动处理。
- 建议每个组件自带样式文件并在组件内 `import './xxx.less'`，保持组件自包含。

## 交互与路由

- 详情页使用 hash 路由：`#/component/<id>`
- 从详情返回目录时会恢复目录页滚动位置（提升浏览体验）

## 可访问性约定

- 尽量为动效添加 `prefers-reduced-motion` 降级（用户开启“减少动态效果”时关闭动画）
- Loader 类组件使用 `role="status"` + `aria-label` 提供无障碍提示
