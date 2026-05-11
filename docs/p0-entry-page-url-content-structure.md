# P0 入口页面 URL 与内容结构设计

## 设计目标

P0 页面不是为了堆页面数量，而是为了优先建设最容易带来搜索流量、社区分享和用户回访的入口页面。

本阶段只设计，不落地页面。

## P0 页面列表

| # | Page Name | Target Keyword | Secondary Keywords | Search Intent | Recommended URL | Current Existing Page | Need New Page? | Content Risk | Data Dependency | Priority |
|---|-----------|---------------|-------------------|---------------|----------------|----------------------|----------------|--------------|-----------------|----------|
| 1 | Heartopia Beginner Guide | heartopia beginner guide | heartopia tips for new players, heartopia what to do first, heartopia first steps | Informational — new players looking for where to start | /beginner-guide.html | beginner-guide.html | No — upgrade existing | Low — general advice possible without verified data | Low — general tips safe; specific values/names require verification | P0 |
| 2 | Heartopia First Day Guide | heartopia first day guide | heartopia first login, heartopia day 1 routine, heartopia beginner priorities | Informational — new players on day 1 looking for route | /first-day-guide.html | Not yet | Yes — new page needed | Low — general route advice safe; avoid specific quest/event details | Low — general tips safe; specific quest steps require verification | P0 |
| 3 | Heartopia Codes Tracker | heartopia codes | heartopia redeem codes, heartopia active codes, heartopia gift codes | Transactional — players looking for active redeem codes | /codes.html | codes.html | No — upgrade existing | Medium — no fake codes allowed; must show empty state when no verified codes | High — requires verified codes to show active state | P0 |
| 4 | Heartopia Daily Checklist | heartopia daily checklist | heartopia daily tasks, heartopia daily routine, heartopia daily reset | Informational / Tool — players looking for daily routine reference | /checklist.html | checklist.html | No — upgrade existing | Low — general daily routine safe; avoid claiming official task structure | Low — general tips safe; specific rewards/requirements require verification | P0 |

## P0 页面 URL 说明

- `/beginner-guide.html` — 已存在，可升级为真实内容入口
- `/codes.html` — 已存在，可升级为 codes tracker 入口
- `/checklist.html` — 已存在，可升级为 daily checklist 入口
- `/first-day-guide.html` — 尚不存在，后续需要新建

## Heartopia Beginner Guide — 内容结构

1. **What is this guide?** — 解释页面目的和适用范围
2. **Who this guide is for** — 目标读者：完全新玩家
3. **First 30 minutes** — 登录后的前30分钟做什么（general advice）
4. **First day priorities** — 第一天应该优先关注哪些方向
5. **What to unlock first** — 通用解锁优先级建议
6. **Common beginner mistakes** — 新玩家常见误区（general advice）
7. **Safe general tips** — 不依赖具体数据的安全建议
8. **What is still unverified** — 明确标注哪些内容尚未验证
9. **Related pages** — 内部链接到 First Day Guide / Daily Checklist
10. **Disclaimer** — fan-made，非官方，部分内容可能随版本变化

### 内容安全规则
- 可以先写 general beginner advice
- 涉及具体数值、材料、任务名称、NPC 喜好、兑换码时必须等待验证
- 不允许把未验证信息写成 confirmed

## Heartopia First Day Guide — 内容结构

1. **First login checklist** — 登录后第一步做什么
2. **First day route overview** — 第一天整体路线图
3. **What to do first** — 优先做的几件事（general advice）
4. **What not to rush** — 不用急着做的事
5. **Daily routine starter** — 开始养成每日习惯
6. **Beginner-friendly planning checklist** — 简单版本的可做清单
7. **What is still unverified** — 明确标注哪些内容尚未验证
8. **Related pages** — 内部链接到 Beginner Guide / Daily Checklist
9. **Disclaimer** — fan-made，非官方

### 内容安全规则
- 该页面适合作为新建 P0 页面
- 必须避免写未经验证的具体游戏事实
- 本任务只设计，不创建页面

## Heartopia Codes Tracker — 内容结构

1. **Current verified codes** — 已验证的当前有效兑换码列表
2. **No verified active codes yet state** — 当无已验证 code 时的明确说明
3. **How code verification works** — 解释如何验证兑换码的真实性
4. **How to redeem** — 在游戏中兑换兑换码的步骤
5. **Expired codes archive** — 已过期兑换码记录
6. **Last checked** — 最近一次检查时间
7. **Where code updates may come from** — 官方渠道和未来可能的更新来源
8. **Report a code / correction idea** — 社区提交兑换码的机制说明
9. **Disclaimer** — fan-made，非官方，兑换码可能随时过期

### 内容安全规则
- 没有 verified code 时，必须显示 No verified active codes yet
- 不得伪造兑换码
- 未验证 code 不得展示为 active
- 不得从第三方网站直接复制兑换码列表

## Heartopia Daily Checklist — 内容结构

1. **Daily checklist overview** — 每日清单的目的和使用方法
2. **General daily routine** — 通用每日流程建议
3. **Beginner checklist** — 新玩家优先做的每日事项
4. **Planning checklist** — 进阶玩家的规划清单
5. **Verified vs general tips** — 区分已验证建议和通用建议
6. **Future save feature** — 未来可能支持的 localStorage 保存功能说明
7. **Related pages** — 内部链接到 Beginner Guide / First Day Guide
8. **Disclaimer** — fan-made，非官方

### 内容安全规则
- 当前可以先做 general planning checklist
- 不能把通用建议写成官方每日任务
- 未来可以扩展 localStorage 保存功能，但本任务不实现功能

## 内部链接结构

Home
├── Beginner Guide (/beginner-guide.html)
├── Codes Tracker (/codes.html)
└── Daily Checklist (/checklist.html)

Beginner Guide (/beginner-guide.html)
├── First Day Guide (future: /first-day-guide.html)
└── Daily Checklist (/checklist.html)

First Day Guide (future: /first-day-guide.html)
├── Beginner Guide (/beginner-guide.html)
└── Daily Checklist (/checklist.html)

Codes Tracker (/codes.html)
└── Beginner Guide (/beginner-guide.html)

Daily Checklist (/checklist.html)
└── Beginner Guide (/beginner-guide.html)

### 内部链接规则
- 每个 P0 页面至少链接到 1 个其他 P0 页面
- 不使用 rel="nofollow" 在内部链接上
- 使用描述性锚文本，不写 "click here"
- 不允许循环链接（A->B->A 无意义）

## 社区分发映射

| Page | Primary Platforms | Secondary Platforms | Notes |
|------|-------------------|---------------------|-------|
| Beginner Guide | Reddit, Discord | 小红书, YouTube comments | 回答"What to do first"类问题时链接 |
| First Day Guide | Reddit, 小红书 | TikTok, B站 | 适合新玩家群组分享 |
| Codes Tracker | Reddit, Discord | YouTube comments | 在"any codes?"问题下回复时链接 |
| Daily Checklist | 小红书, Discord | Reddit, TikTok | 适合日常类内容分享 |

### 社区分发规则
- 不要硬广
- 先回答真实玩家问题
- 只有链接有帮助时才附上 cozyguidehub.com
- 不要伪装用户
- 不要刷屏
- 记录每个问题和链接，评估效果

## 后续落地顺序

1. **T057** 创建 P0 页面落地任务拆解
2. **T058** 升级 Beginner Guide 为真实内容入口
3. **T059** 新建 First Day Guide 页面
4. **T060** 强化 Codes Tracker 规则与状态
5. **T061** 强化 Daily Checklist 页面
6. **T062** 更新 sitemap.xml
7. **T063** 更新导航和内部链接
