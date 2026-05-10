# Heartopia Cozy Guide 真实数据采集原则

## 1. 目的

在正式接入真实 Heartopia 数据之前，先明确哪些数据可以采集、如何验证、如何标注来源、哪些内容不能直接使用，避免把未验证信息当成事实发布。

## 2. 基本原则

1. 不发布未验证数据为事实
2. 不伪造兑换码
3. 不复制第三方站点全文或大段内容
4. 不使用未授权官方图片或素材
5. 不声称本站是官方站点
6. 所有真实数据必须有验证状态
7. 所有玩家投稿或社区线索必须标记为 unverified，直到人工确认
8. 占位数据必须明确标记为 placeholder

## 3. 可采集的数据类型

- **Beginner route notes** — 新手路线建议、常见误区、日常流程
- **Recipes** — 配方名称、材料、解锁条件、用途
- **Fish** — 鱼类名称、出没地点、时间、天气、稀有度
- **NPC gifts** — NPC 名称、喜好礼物、厌恶物品、好感度提示
- **Codes** — 兑换码、奖励内容、有效期、来源
- **Daily checklist items** — 日常任务建议、收集提醒
- **Events** — 限时活动、节日任务
- **Materials** — 材料名称、获取方式、用途
- **Hobbies** — 爱好系统介绍、升级路线
- **Pets** — 宠物种类、获取方式、互动
- **House design ideas** — 装修灵感、布局建议
- **FAQ** — 常见问题汇总

## 4. 暂时不采集的数据类型

- 官方图片
- 官方图标
- 官方 UI 截图
- 未经授权的完整数据库复制
- 第三方网站整表搬运
- 用户隐私数据
- 需要登录才能访问的数据
- 付费内容或受限制内容

## 5. 数据来源分级

- **Level 1**：自己实机验证
- **Level 2**：官方公告 / 官方渠道
- **Level 3**：多名玩家交叉验证
- **Level 4**：单一社区线索
- **Level 5**：未确认传闻

Level 1 / Level 2 可以作为 confirmed 候选。
Level 3 可以作为 likely，但仍建议复查。
Level 4 / Level 5 只能作为 unverified 线索，不得写成事实。

## 6. 数据验证状态

- **placeholder** — 仅用于 MVP 布局测试，不是真实游戏数据
- **unverified** — 来自社区线索，尚未人工确认
- **checking** — 正在人工验证中
- **confirmed** — 已通过实机或官方来源验证
- **outdated** — 曾经确认但现已过时或失效
- **removed** — 已确认移除的数据

## 7. 每类数据的最低字段要求

**Recipes**
- name, ingredients, unlock_hint, use_case, status, source_note, last_checked

**Fish**
- name, location, time, weather, rarity, status, source_note, last_checked

**NPC Gifts**
- npc_name, favorite_gift, neutral_gift, avoid, friendship_note, status, source_note, last_checked

**Codes**
- code, reward, status, last_checked, source_note, expiry_note

**Checklist Items**
- title, category, is_general_tip, is_verified_game_task, status, source_note, last_checked

## 8. 发布前检查清单

- [ ] 数据不是 placeholder
- [ ] 已记录 source_note
- [ ] 已记录 last_checked
- [ ] 已设置 status
- [ ] 不包含未经授权图片
- [ ] 不复制第三方大段文字
- [ ] 不伪造兑换码
- [ ] 不声称为官方数据
- [ ] 如果未确认，必须标记 unverified

## 9. 页面展示规则

- **confirmed**：可以正常展示，但仍保留 last checked
- **unverified**：必须显示 warning
- **checking**：可以显示为 in progress
- **outdated**：必须提示可能已过期
- **placeholder**：只能用于 MVP layout，不应混入正式数据

## 10. 后续任务建议

- T045 设计人工验证流程
- T046 设计真实数据字段结构
- T047 创建 sample data JSON 草案
- T048 设计真实数据录入模板
- T049 选择第一类可以人工录入的数据
