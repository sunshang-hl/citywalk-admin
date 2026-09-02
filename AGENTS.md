# AGENTS.md — citywalk-admin

本仓库是 [SharpFort/OmniAdmin](https://github.com/SharpFort/OmniAdmin) 的 fork，作为 citywalk 项目的 admin 管理系统前端。基于 art-design-pro 3.0.2 + Vue 3.5 + TS + Element Plus + Pinia，对接 OmniPG（PostgREST + Logto）。

## 与上游的关系（最重要）

- 上游 remote：`upstream` = https://github.com/SharpFort/OmniAdmin.git（origin 为本 fork）。
- 同步上游：`git fetch upstream && git merge upstream/main`（**用 merge，不要 rebase**），每周或每开始新功能前同步一次。
- **框架核心文件不得直接修改**：`src/views/system/**`、`src/components/core/**`、`src/router/core/**`、`src/store/**`、`src/hooks/**`。需要改框架时先在 OmniAdmin 上游改好再合并下来。
- citywalk 功能在 `feature/citywalk-*` 分支开发，合并回 `main` 后推送 origin。

## citywalk 业务模块组织（严格遵守）

每个业务模块（如 route、spot、activity）在以下各层各有自己的文件，**全部是新增文件，不修改任何公共文件**：

```
src/api/citywalk/<module>.ts                            # 每模块一个 API 文件
src/views/citywalk/<module>/                            # 每模块一个页面目录
src/router/modules/citywalk/<module>.ts                 # 每模块一个路由文件（自动注册）
src/locales/langs/overlay/zh|en/citywalk/<module>.json  # 每模块菜单/页面文案
```

- 路由模块由 `src/router/modules/index.ts` 的 `import.meta.glob` 自动扫描注册：**新增模块文件即可，不要修改 `index.ts`**。
- 文案由 `src/locales/index.ts` 自动深度合并 `langs/overlay/<lang>/**/*.json`：**不要修改 `langs/zh.json` / `langs/en.json` 基础包**。
- 示例模块：路线管理（`route`），新模块照抄该模块四层结构。
- 菜单为后端模式（`VITE_ACCESS_MODE=backend`）：新模块需在后端菜单表初始化数据（方案见 OmniAdmin 仓库 `docs/5.菜单初始化-前端页面分类与入库方案.md`），路由文件同时作为 frontend 模式回退。

## 环境配置

- 开发/测试阶段与 OmniAdmin **共用同一套 OmniPG 后端**（同一 PostgREST、同一 Logto 实例/组织、同一菜单权限数据）。
- 本地 env 文件（`.env*`，不入库）从 OmniAdmin 复制并已加「上线前切换」注释；开发端口 3007（Logto 已登记，可与 OmniAdmin 的 3006 并行运行）。
- **正式上线前**按 `.env.development` / `.env.production` 头部注释切换为 citywalk 独立配置（独立 API 地址、独立 Logto SPA 应用、正式系统名 `VITE_SYSTEM_NAME`）。

## 工程命令

```bash
pnpm install
pnpm dev        # 开发（3007）
pnpm run lint   # eslint
pnpm run build  # vue-tsc + vite build
```

提交信息遵循 conventional commits（中文描述），与上游保持一致，如 `feat(route): 路线列表页`。
