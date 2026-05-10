# Heartopia Cozy Guide 真实数据人工验证流程

## 1. 目的

在真实游戏数据进入网站页面之前，必须经过人工记录、来源标注、状态判断、复查和发布前检查，避免把错误、过期、未经验证或侵权内容发布给用户。

## 2. 适用范围

本流程适用于：

- Recipes
- Fish
- NPC Gifts
- Codes
- Daily Checklist Items
- Beginner Guide facts
- Materials
- Events
- Hobbies
- Pets
- FAQ factual answers

当前阶段只设计流程，不实际录入真实数据。

## 3. 数据验证角色

- **Collector**：收集线索
- **Verifier**：人工验证
- **Editor**：整理成页面可读内容
- **Publisher**：发布到网站
- **Reviewer**：上线后复查

当前一人公司阶段，这些角色可以由同一个人承担，但每一步仍需单独记录。

## 4. 验证流程总览

1. **收集线索** — 从实机游玩、官方公告、社区反馈等渠道获取数据线索
2. **记录来源** — 注明数据来源等级和具体来源描述
3. **标记初始状态** — 新数据默认为 unverified
4. **人工验证** — 通过实机测试或官方来源确认数据准确性
5. **填写 last_checked** — 记录验证日期
6. **判断是否可发布** — 只有 confirmed 状态的数据才能进入正式数据区
7. **发布前检查** — 按照发布前检查清单逐项确认
8. **上线后复查** — 定期复查已发布数据是否仍准确
9. **过期或错误数据处理** — 发现错误或过期时立即标记状态变更

## 5. 数据状态流转

```
placeholder → unverified → checking → confirmed
confirmed → outdated
confirmed → removed
unverified → removed
checking → unverified
checking → confirmed
```

- placeholder → unverified：表明数据已进入采集流程
- unverified → checking：正在人工验证中
- checking → confirmed：验证通过
- confirmed → outdated：发现已过期
- confirmed → removed：确认移除
- unverified → removed：线索不可靠，放弃
- checking → unverified：验证未通过，退回线索状态

## 6. 不同数据类型的验证要求

**Recipes**

至少确认 recipe name、ingredients、unlock hint 或 use case。
必须记录 source_note 和 last_checked。
如果只来自单一社区线索，不能标记 confirmed。

**Fish**

至少确认 fish name、location、time/weather 条件中的已知部分。
不确定字段必须写 Unknown，不得猜测。

**NPC Gifts**

NPC 名称和 gift preference 必须有来源。
favorite / neutral / avoid 不得随意推断。

**Codes**

不得发布假码。
不得把未验证码标记为 active。
必须记录 last_checked。
过期码必须转为 expired 或 removed。

**Checklist Items**

区分 general planning tip 和 verified in-game task。
通用建议可以保留为 general tip，但不能写成官方每日任务。

## 7. 发布前检查清单

- [ ] 数据有明确类型
- [ ] 数据有 source_note
- [ ] 数据有 last_checked
- [ ] 数据有 status
- [ ] 不确定字段使用 Unknown
- [ ] 未验证数据没有写成 confirmed
- [ ] 没有假兑换码
- [ ] 没有未经授权图片
- [ ] 没有复制第三方站点大段内容
- [ ] 页面上能看出数据状态
- [ ] Footer / disclaimer 仍然存在

## 8. 错误数据处理流程

1. 发现错误
2. 立即标记 outdated 或 removed
3. 在 source_note 或 update note 中说明原因
4. 不确定时降级为 unverified
5. 如果涉及兑换码，优先移出 active 区域
6. 下次更新时重新验证

## 9. 最小记录模板

| Type | Item | Source Note | Status | Last Checked | Verification Notes | Publish Decision |
| --- | --- | --- | --- | --- | --- | --- |
| recipe | Example Item | self-tested / official / community tip | checking | YYYY-MM-DD | Need second check | do not publish yet |

该模板用于人工记录，不代表要立即展示到网站。

## 10. 与页面展示的关系

- confirmed 数据可以进入正式数据区
- unverified 数据只能进入"线索/待验证"区域，或暂不展示
- placeholder 数据只用于布局测试
- outdated 数据必须提示可能过期
- removed 数据不应在普通用户页面继续展示

## 11. 下一步建议

- T047 设计真实数据字段结构
- T048 创建 sample data JSON 草案
- T049 创建真实数据录入模板
- T050 选择第一类可人工录入的数据
- T051 为首批数据创建 review checklist
