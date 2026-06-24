---
name: react-design
description: React 19 + Vite + TanStack Router + shadcn/ui 脚手架的工程规范（路由、依赖、沙箱约束）。
allowed_create_modes:
  - create-desktop
  - create-mobile
---

# React Design 项目规范

> 视觉与设计规范由系统 reminder 注入。
> 模板文件列表与正文在 skill 加载时**首轮**注入（`shareFiles`），后续轮次靠对话历史携带，压缩后可能丢失。
> `src/components/ui/`、`src/routeTree.gen.ts` 等内容未进 shareFiles，仅列路径——规则见下。

## 未注入模板的文件

| 路径 | 处理方式 |
|------|----------|
| `src/components/ui/**` | 46 个 shadcn 已预置；日常 `import from "@/components/ui/{name}"`，**不要 Read 全文**；仅自定义 shadcn 源码时 Read 单个文件 |
| `src/routeTree.gen.ts` | **禁止手改**；新建 `src/routes/*.tsx` 后跑 `pnpm run dev` 自动生成 |

## 工程红线

- `package.json` / `index.html` 中 `meoo-app-name` 占位符勿改（用户明确要求改标题除外）
- `vite.config.ts` 关键字段勿改：`server.port` / `strictPort` / `host` / `build.outDir` / `build.assetsDir`（细则见已注入的 vite.config.ts）
- 依赖：改 `package.json` 后 `pnpm install`；禁止 `pnpm i <pkg>` 单装；shadcn/Radix 已预置，禁止重复安装
- 动效：CSS keyframes 或 `tw-animate-css`；禁止 framer-motion 等
- 单文件软上限约 260 行；新 UI 写 `src/components/`，文件名唯一

## 路由

- 新页面：`src/routes/{name}.tsx` + `createFileRoute`
- 根布局：只改 `__root.tsx`；多页面勿堆进 `index.tsx`
- 首页：`index.tsx` 是占位页（shareFiles 中有说明），须**整体替换**

## 组件

- 扩展 shadcn：用 `cva` + `cn()`（`src/lib/utils.ts`）；禁止内联条件 class 堆砌
- 图标：`lucide-react`（已内置）
