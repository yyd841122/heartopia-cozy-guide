# Heartopia Cozy Guide MVP 阶段总结与下一阶段路线

## 当前项目一句话总结

Heartopia Cozy Guide 是一个非官方、fan-made 的 cozy game 攻略站 MVP，目前已经完成静态站点、核心栏目页面、移动端基础体验、正式域名绑定和上线验收。

## 当前已完成成果

- [x] 静态首页
- [x] Beginner Guide 页面
- [x] Codes Tracker 页面
- [x] Recipes Notes 页面
- [x] Fish Notes 页面
- [x] NPC Gift Notes 页面
- [x] Daily Checklist 页面
- [x] 统一导航
- [x] 语言选择器 UI preview
- [x] FAQ 修复
- [x] 移动端导航优化
- [x] 表格搜索功能
- [x] README 文档
- [x] GitHub 仓库
- [x] Cloudflare Pages 部署
- [x] 正式域名 cozyguidehub.com
- [x] www.cozyguidehub.com
- [x] SSL 启用
- [x] 上线验收记录

## 当前技术栈

- HTML
- CSS
- Vanilla JavaScript
- Cloudflare Pages
- Cloudflare DNS
- GitHub
- Spaceship domain registrar

当前项目没有：

- No framework
- No backend
- No database
- No login
- No payment
- No build step

## 当前页面结构

| 页面 | 用途 |
|------|------|
| `index.html` | 首页，包含英雄区、快速卡片、新手路线、兑换码预览、数据库预览、每日清单、FAQ |
| `beginner-guide.html` | 新手攻略，包含第一天路线、每日流程、优先级卡片、常见误区 |
| `codes.html` | 兑换码追踪，空状态页面，无假兑换码 |
| `recipes.html` | 食谱笔记，样例 placeholder 表格 + 搜索 |
| `fish.html` | 鱼类图鉴，样例 placeholder 表格 + 搜索 |
| `npc-gifts.html` | NPC 礼物偏好，样例 placeholder 表格 + 搜索 |
| `checklist.html` | 每日清单，静态复选框，无 localStorage |

## 当前数据状态

- 当前所有 recipes / fish / NPC gifts 数据均为 placeholder。
- 当前没有接入真实游戏数据。
- 当前没有真实兑换码。
- 当前没有自动抓取。
- 当前不声称任何数据是官方或已验证数据。

## 当前风险与限制

1. 仍是 fan-made MVP，不是官方站点
2. Heartopia 相关名称和资产归其权利方所有
3. 当前没有真实游戏数据，用户价值有限
4. 当前没有内容更新机制
5. 当前没有 SEO 内容文章
6. 当前没有多语言真实翻译
7. 当前没有数据库和后台
8. 当前没有访问统计方案
9. pages.dev 在部分网络下不稳定，因此正式域名已启用

## 下一阶段不要立刻做什么

- 不要马上做登录
- 不要马上做支付
- 不要马上做数据库
- 不要马上做完整多语言
- 不要马上抓取第三方站点数据
- 不要大量复制 heartopia.gg 内容
- 不要添加未经验证的真实游戏数据
- 不要使用官方图片或素材

## 下一阶段推荐路线

### Phase 1：上线后稳定性与基础 SEO

建议任务：

SEO Phase 1 basic files completed:
- sitemap.xml
- robots.txt
- Open Graph / Twitter text meta
- online verification completed

建议任务：

- T038 检查 404 / 路径 / canonical
- T043 添加简单 analytics 方案评估

> 注意：analytics 先只评估，不一定马上接。

### Phase 2：真实数据采集方案设计

Field schema should be finalized before any JSON files or real verified data are added.

- T044 设计真实数据采集原则
- T046 设计真实数据人工验证流程
- T048 设计真实数据字段结构
Sample JSON files are schema-testing placeholders only and are not connected to user-facing pages yet.

Data entry templates should be used before any real candidate data is moved into JSON or user-facing pages.

- T050 创建 sample data JSON 草案
- T052 创建真实数据录入模板
- T053 选择第一类可以人工录入的数据

Traffic acquisition is now a core priority. After SEO Phase 1 and data governance setup, the project should prioritize traffic entry pages, community distribution, and returning-user tools.

- T054 制定第一批流量入口页面计划
- T056 设计 P0 入口页面 URL 与内容结构（Beginner Guide、First Day Guide、Codes Tracker、Daily Checklist）
- T058 创建 P0 页面落地任务拆解（Beginner Guide、First Day Guide、Codes Tracker、Daily Checklist、sitemap、meta、内部链接、社区分发记录）
- T060 升级 Beginner Guide 为第一条 P0 流量入口页面，保持未验证数据与已确认内容的明确分离
- T062 创建 First Day Guide 为新的 P0 流量入口页面，从现有新手引导入口添加内部链接，同时避免未验证游戏事实
- T064 强化 Codes Tracker 为可信 P0 流量入口页面，避免假码，保持未验证提示与已验证活动码的明确分离
- T066 强化 Daily Checklist 为 P0 流量入口页面，分离通用规划建议与已验证游戏任务，避免未验证游戏事实
- T068 统一更新 P0 页面之间的内部链接和入口路径：首页英雄按钮修复、卡片标题可点击、步骤区增加直接链接、Related Pages 按钮样式统一、codes 标签修正、首页底部增加快速链接栏
- T071 创建 P0 线上验证记录，归档正式域名部署后的页面访问状态、sitemap/robots 状态、meta 标签、内部链接和安全边界验证结果
- T073 创建社区分发记录表，用于跟踪 Reddit / Discord / YouTube / 小红书 / B站 / 抖音等平台的引流动作、用户问题、回复内容、链接使用和反馈结果

### Phase 3：首批真实内容

建议任务：

- T045 写第一篇真实 Beginner Guide 内容
- T046 写 Codes Tracker 的真实数据规则页
- T047 写 Recipes 数据录入模板
- T048 写 Fish 数据录入模板
- T049 写 NPC Gifts 数据录入模板

### Phase 4：内容站基础扩展

建议任务：

- T050 创建 /guides 目录规划
- T051 添加 3 篇 SEO 友好的攻略文章
- T052 添加文章卡片列表
- T053 增加首页 latest guides 区域

### Phase 5：工具化方向

建议任务：

- T054 Checklist localStorage 保存方案设计
- T055 Recipes filter 设计
- T056 Fish filter 设计
- T057 NPC Gifts filter 设计
- T058 数据从 HTML 表格迁移到 JSON 的方案

## 推荐下一步

建议优先做：

**T036：添加 sitemap.xml 和 robots.txt**

理由：

1. 正式域名已经上线
2. 现在应该让搜索引擎更容易理解站点
3. 这一步不涉及真实游戏数据
4. 风险低
5. 适合上线后的第一项基础优化

## 当前项目判断

当前项目已经从"页面练习"变成了"可访问的正式域名 MVP"。但它还不是一个真正有内容价值的攻略站。下一阶段重点不是继续堆页面，而是建立真实数据和内容生产规则。
