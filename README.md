# 程序员个人介绍网站

陈可挺的个人介绍网站，用于展示个人信息、技术能力、项目经历、实习经历和联系方式。

项目使用 `Vue3 + TypeScript + Vite + CSS` 构建，为纯前端单页静态网站，可直接部署到 Vercel。

## 页面模块

- 首页介绍与求职方向
- 关于我
- 技术能力
- 项目经历
- 实习经历
- 联系方式与邮箱点击复制

## 本地运行

```bash
npm install
npm run dev
```

打开终端中显示的本地地址，通常是 `http://localhost:5173`。

## 修改个人信息

主要内容集中在 `src/data/portfolio.ts`：

- 个人姓名、简介、邮箱和社交链接
- 项目经历
- 技能列表
- 实习经历

页面结构位于 `src/App.vue`，整体视觉样式位于 `src/styles.css`。

## AI 使用说明

本项目在需求拆解、页面设计、Vue3 代码实现、交互功能编写、问题排查和 README 整理过程中使用了 Codex 与 ChatGPT。详细说明见 `AI使用说明.md`。

## 构建

```bash
npm run build
```

构建产物会生成在 `dist` 目录。可以通过以下命令预览：

```bash
npm run preview
```

## 部署到 Vercel

1. 将项目推送到 GitHub、GitLab 或 Bitbucket。
2. 登录 Vercel，点击 **Add New Project** 并导入仓库。
3. Vercel 会自动识别 Vite，构建命令使用 `npm run build`，输出目录使用 `dist`。
4. 点击 **Deploy**。

也可以安装 Vercel CLI 后在项目目录运行：

```bash
npm i -g vercel
vercel
```

## 项目结构

```text
src/
├─ components/
│  ├─ ProjectCard.vue
│  ├─ SectionHeading.vue
│  └─ SiteHeader.vue
├─ data/
│  └─ portfolio.ts
├─ App.vue
├─ main.ts
└─ styles.css
```
