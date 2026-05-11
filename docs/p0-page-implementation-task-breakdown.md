# P0 页面落地任务拆解

## 拆解目标

P0 页面落地任务拆解的目标，是把 Beginner Guide、First Day Guide、Codes Tracker、Daily Checklist 四个优先流量入口，从规划文档推进到可执行任务序列。

本阶段先拆任务，不直接创建页面，不直接写真实内容。

## P0 页面范围

| # | Page | Current Status |
|---|------|---------------|
| 1 | Heartopia Beginner Guide | `beginner-guide.html` 已存在，需要升级为真实内容入口 |
| 2 | Heartopia First Day Guide | `first-day-guide.html` 尚不存在，后续需要新建 |
| 3 | Heartopia Codes Tracker | `codes.html` 已存在，需要强化规则、状态和可信度 |
| 4 | Heartopia Daily Checklist | `checklist.html` 已存在，需要强化为可回访的 daily checklist 入口 |

## 推荐任务顺序

| # | Task | Action | Page Impact | New Page? | Sitemap Update? |
|---|------|--------|-------------|-----------|-----------------|
| 1 | T059 | 升级 Beginner Guide 为真实内容入口 | 修改 beginner-guide.html | No | No |
| 2 | T060 | 新建 First Day Guide 页面 | 新增 first-day-guide.html | Yes | Yes |
| 3 | T061 | 强化 Codes Tracker 规则与状态 | 修改 codes.html | No | No |
| 4 | T062 | 强化 Daily Checklist 页面 | 修改 checklist.html | No | No |
| 5 | T063 | 更新导航和内部链接 | 修改所有 HTML | No | No |
| 6 | T064 | 更新 sitemap.xml 和 robots 检查 | 修改 sitemap.xml | No | — |
| 7 | T065 | 更新 meta / OG / Twitter 信息 | 修改相关 HTML | No | No |
| 8 | T066 | 线上验证 P0 页面 | — | — | — |
| 9 | T067 | 创建第一周社区分发记录表 | 新增 docs 文件 | No | No |

任务编号为建议编号，不需要真的创建任务系统。

---

## T059 升级 Beginner Guide

**任务目标**：把 `beginner-guide.html` 从 MVP 新手页升级为更适合作为 SEO 流量入口的 Heartopia Beginner Guide 页面。

**任务边界**：
- 可以修改 `beginner-guide.html`
- 可以修改 `styles.css` 中必要的轻量样式
- 可以更新 README 和路线文档
- 不新增真实游戏数据
- 不写未验证具体任务、材料、NPC、兑换码
- 不使用官方图片

**建议内容区块**：
1. Who this guide is for
2. First 30 minutes
3. First day priorities
4. What to unlock first
5. Common beginner mistakes
6. Safe general tips
7. What is still unverified
8. Related pages
9. Disclaimer

**验收标准**：
1. 页面仍可本地打开
2. 移动端正常
3. nav-active 正常
4. language selector 正常
5. 文案明确 fan-made / MVP
6. 未新增真实未验证数据

---

## T060 新建 First Day Guide 页面

**任务目标**：创建 `first-day-guide.html`，作为 Heartopia First Day Guide 的独立 P0 流量入口页。

**任务边界**：
- 可以新增 `first-day-guide.html`
- 可以更新所有页面导航
- 可以更新 sitemap.xml
- 可以更新 meta / OG / Twitter
- 可以更新 README
- 不新增真实游戏数据
- 不编造具体游戏任务
- 不使用官方图片

**建议内容区块**：
1. First login checklist
2. First day route overview
3. What to do first
4. What not to rush
5. Daily routine starter
6. Beginner-friendly planning checklist
7. What is still unverified
8. Related pages
9. Disclaimer

**验收标准**：
1. `first-day-guide.html` 可本地打开
2. 导航一致
3. 移动端导航不拥挤
4. sitemap 包含新页面
5. meta / OG / Twitter 使用 cozyguidehub.com
6. 不包含未验证具体游戏事实

---

## T061 强化 Codes Tracker

**任务目标**：把 `codes.html` 强化为可信的 Codes Tracker 页面，重点是建立"没有验证码也可信"的状态和规则。

**任务边界**：
- 可以修改 `codes.html`
- 可以优化 codes 页面文案
- 可以增加 Last checked / No verified active codes yet / verification policy
- 不允许添加任何真实或假兑换码
- 不允许从第三方网站复制 codes
- 不允许把 unverified code 展示为 active

**建议内容区块**：
1. Current verified codes
2. No verified active codes yet
3. How code verification works
4. How to redeem
5. Expired codes archive
6. Last checked
7. Where updates may come from
8. Report a code / correction idea
9. Disclaimer

**验收标准**：
1. 页面无假码
2. 页面明确无 verified active codes
3. 页面说明 verification policy
4. 页面保留 fan-made disclaimer
5. 搜索和导航不受影响

---

## T062 强化 Daily Checklist

**任务目标**：把 `checklist.html` 强化为适合用户收藏和回访的 Daily Checklist 页面。

**任务边界**：
- 可以修改 `checklist.html`
- 可以优化 checklist 文案和结构
- 可以明确 general tips 与 verified game tasks 的区别
- 暂时不实现 localStorage 保存功能
- 不把通用建议写成官方每日任务

**建议内容区块**：
1. Daily checklist overview
2. General daily routine
3. Beginner checklist
4. Planning checklist
5. Verified vs general tips
6. Future save feature
7. Related pages
8. Disclaimer

**验收标准**：
1. checklist 页面可打开
2. checkbox 交互不被破坏
3. 文案不夸大
4. 明确 general tips / verified tasks 区别
5. 移动端正常

---

## T063 更新导航和内部链接

**任务目标**：在 P0 页面落地后，统一更新导航、首页入口、相关页面链接。

**任务范围**：
1. `index.html`
2. `beginner-guide.html`
3. `first-day-guide.html`
4. `codes.html`
5. `checklist.html`
6. `recipes.html`
7. `fish.html`
8. `npc-gifts.html`

**需要确认**：
1. 导航顺序是否仍清晰
2. 移动端导航是否仍不拥挤
3. NPC 移动端短标签是否正常
4. FAQ 是否仍指向 `index.html#faq`
5. Language selector 是否仍正常

---

## T064 更新 sitemap

**任务目标**：新建 `first-day-guide.html` 后，需要更新 `sitemap.xml`。

**需要添加**：
```
https://cozyguidehub.com/first-day-guide.html
```

**需要确认**：
1. `sitemap.xml` 仍使用 `cozyguidehub.com`
2. `robots.txt` 仍指向 sitemap
3. 不使用 `pages.dev` 作为主 sitemap URL

---

## T065 更新 meta / OG / Twitter

**任务目标**：为新页面和改动页面同步更新 title、description、OG、Twitter meta。

**需要确认**：
1. 所有 og:url 使用 `https://cozyguidehub.com`
2. 不添加 og:image
3. 不添加 twitter:image
4. 不使用官方图片
5. meta description 不夸大

---

## T066 线上验证 P0 页面

**任务目标**：验证 P0 页面上线后在正式域名可访问。

**检查项**：
1. 页面 HTTP 200
2. title 正常
3. meta 正常
4. OG / Twitter meta 正常
5. 移动端正常
6. 内部链接正常
7. Footer / disclaimer 正常
8. 没有未验证真实数据

---

## T067 创建第一周社区分发记录表

**任务目标**：创建社区分发记录模板，用于记录 Reddit / Discord / 小红书 / B站 / 抖音 / YouTube comments 的发布与反馈。

**记录字段建议**：
1. date
2. platform
3. community_or_channel
4. user_question
5. response_summary
6. linked_page
7. link_used
8. feedback
9. clicks_or_visible_result
10. next_action

**说明**：不伪造反馈，不刷屏，不硬广。

---

## 最小执行原则

1. 每次只落地一个页面或一个小功能
2. 每次都先本地验证
3. 每次都提交小 commit
4. 不为了 SEO 堆低质量页面
5. 不复制竞品
6. 不使用未授权素材
7. 不发布未验证数据为事实
8. 不做复杂数据库，先用静态页面和文档跑通
