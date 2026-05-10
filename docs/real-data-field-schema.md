# Heartopia Cozy Guide 真实数据字段结构设计

## 1. 目的

在正式创建 JSON 数据文件或录入真实游戏数据之前，先定义各类数据的字段、状态、来源、验证信息和展示规则，避免后续数据混乱。

## 2. 通用字段

所有数据类型都应该包含以下通用字段：

- **id** — 唯一标识符
- **type** — 数据类型（recipe / fish / npc_gift / code / checklist_item / event / material）
- **name** — 数据名称
- **status** — 数据验证状态
- **source_note** — 来源描述
- **last_checked** — 最后检查日期
- **verification_level** — 验证等级
- **verification_notes** — 验证备注
- **display_notes** — 展示备注
- **created_at** — 创建时间
- **updated_at** — 更新时间

**status 可选值：**
placeholder, unverified, checking, confirmed, outdated, removed

**verification_level 可选值：**
self_tested, official_source, multi_player_confirmed, single_community_tip, rumor, unknown

## 3. 字段命名原则

1. 使用 snake_case
2. 字段名使用英文
3. 不在字段名中使用空格
4. 布尔值使用 is_ 前缀
5. 时间字段使用 *_at 或 *_checked
6. 不确定信息使用 Unknown，不使用猜测值
7. 不使用官方未授权图片 URL

## 4. Recipes 字段结构

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 唯一标识符 |
| type | string | 固定为 "recipe" |
| name | string | 配方名称 |
| ingredients | array | 食材列表 |
| unlock_hint | string | 解锁提示 |
| use_case | string | 用途 |
| energy_value | number / null | 能量值 |
| sell_value | number / null | 出售价格 |
| status | string | 验证状态 |
| source_note | string | 来源描述 |
| last_checked | string / null | 最后检查日期 |
| verification_level | string | 验证等级 |
| verification_notes | string | 验证备注 |
| display_notes | string | 展示备注 |

ingredients 应该是数组。
energy_value / sell_value 如果未知，使用 null 或 Unknown。
不确定的 unlock_hint 不得猜测。

```json
{
  "id": "recipe_sample_001",
  "type": "recipe",
  "name": "Sample Cozy Soup",
  "ingredients": ["Sample Ingredient A", "Sample Ingredient B"],
  "unlock_hint": "Unknown",
  "use_case": "Layout testing only",
  "energy_value": null,
  "sell_value": null,
  "status": "placeholder",
  "source_note": "Placeholder sample for schema testing.",
  "last_checked": null,
  "verification_level": "unknown",
  "verification_notes": "Not verified game data.",
  "display_notes": "Do not publish as real recipe."
}
```

## 5. Fish 字段结构

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 唯一标识符 |
| type | string | 固定为 "fish" |
| name | string | 鱼类名称 |
| location | string | 出没地点 |
| time_window | string | 时间窗口 |
| weather | string | 天气条件 |
| season | string | 季节 |
| rarity | string | 稀有度 |
| sell_value | number / null | 出售价格 |
| status | string | 验证状态 |
| source_note | string | 来源描述 |
| last_checked | string / null | 最后检查日期 |
| verification_level | string | 验证等级 |
| verification_notes | string | 验证备注 |
| display_notes | string | 展示备注 |

location / time_window / weather / season 不确定时必须使用 Unknown。
不要为了补完整而猜测。

```json
{
  "id": "fish_sample_001",
  "type": "fish",
  "name": "Sample Pond Fish",
  "location": "Pond",
  "time_window": "Any",
  "weather": "Any",
  "season": "Unknown",
  "rarity": "Common",
  "sell_value": null,
  "status": "placeholder",
  "source_note": "Placeholder sample for schema testing.",
  "last_checked": null,
  "verification_level": "unknown",
  "verification_notes": "Not verified game data.",
  "display_notes": "Do not publish as real fish data."
}
```

## 6. NPC Gifts 字段结构

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 唯一标识符 |
| type | string | 固定为 "npc_gift" |
| npc_name | string | NPC 名称 |
| favorite_gifts | array | 最喜欢的礼物 |
| neutral_gifts | array | 一般礼物 |
| avoid_gifts | array | 不喜欢的礼物 |
| friendship_note | string | 好感度提示 |
| unlock_hint | string | 解锁条件 |
| status | string | 验证状态 |
| source_note | string | 来源描述 |
| last_checked | string / null | 最后检查日期 |
| verification_level | string | 验证等级 |
| verification_notes | string | 验证备注 |
| display_notes | string | 展示备注 |

favorite_gifts / neutral_gifts / avoid_gifts 应该是数组。
不得根据常识随意推断 NPC 喜好。

```json
{
  "id": "npc_gift_sample_001",
  "type": "npc_gift",
  "npc_name": "Sample Town Friend",
  "favorite_gifts": ["Sample Flower"],
  "neutral_gifts": ["Sample Snack"],
  "avoid_gifts": ["Sample Trash"],
  "friendship_note": "Loves flowers for morning visits.",
  "unlock_hint": "Unknown",
  "status": "placeholder",
  "source_note": "Placeholder sample for schema testing.",
  "last_checked": null,
  "verification_level": "unknown",
  "verification_notes": "Not verified game data.",
  "display_notes": "Do not publish as real NPC gift data."
}
```

## 7. Codes 字段结构

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 唯一标识符 |
| type | string | 固定为 "code" |
| code | string | 兑换码 |
| reward | string | 奖励描述 |
| status | string | 验证状态 |
| last_checked | string / null | 最后检查日期 |
| source_note | string | 来源描述 |
| expiry_note | string | 过期说明 |
| verification_level | string | 验证等级 |
| verification_notes | string | 验证备注 |
| display_notes | string | 展示备注 |

不得伪造 code。
未验证 code 不能显示在 active 区域。
过期 code 必须标记 expired / outdated / removed。

```json
{
  "id": "code_schema_only",
  "type": "code",
  "code": "EXAMPLE-PLACEHOLDER",
  "reward": "Example reward",
  "status": "placeholder",
  "last_checked": null,
  "source_note": "Schema-only example. Not a real code.",
  "expiry_note": null,
  "verification_level": "unknown",
  "verification_notes": "Not a real code. Do not publish.",
  "display_notes": "Schema example only."
}
```

## 8. Checklist Items 字段结构

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 唯一标识符 |
| type | string | 固定为 "checklist_item" |
| title | string | 任务标题 |
| category | string | 分类 |
| is_general_tip | boolean | 是否为通用建议 |
| is_verified_game_task | boolean | 是否为已验证游戏任务 |
| status | string | 验证状态 |
| source_note | string | 来源描述 |
| last_checked | string / null | 最后检查日期 |
| verification_level | string | 验证等级 |
| verification_notes | string | 验证备注 |
| display_notes | string | 展示备注 |

general tip 可以作为通用建议。
verified_game_task 必须人工验证。

```json
{
  "id": "checklist_sample_001",
  "type": "checklist_item",
  "title": "Sample task: check daily notices",
  "category": "starter",
  "is_general_tip": true,
  "is_verified_game_task": false,
  "status": "placeholder",
  "source_note": "Placeholder sample for schema testing.",
  "last_checked": null,
  "verification_level": "unknown",
  "verification_notes": "Not verified game data.",
  "display_notes": "Do not publish as verified daily task."
}
```

## 9. Events 字段结构

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 唯一标识符 |
| type | string | 固定为 "event" |
| event_name | string | 活动名称 |
| start_date | string / null | 开始日期 |
| end_date | string / null | 结束日期 |
| region | string | 适用区域 |
| summary | string | 活动简介 |
| status | string | 验证状态 |
| source_note | string | 来源描述 |
| last_checked | string / null | 最后检查日期 |
| verification_level | string | 验证等级 |
| verification_notes | string | 验证备注 |
| display_notes | string | 展示备注 |

活动数据容易过期，必须记录日期和 last_checked。

## 10. Materials 字段结构

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| id | string | 唯一标识符 |
| type | string | 固定为 "material" |
| name | string | 材料名称 |
| source_location | string | 获取地点 |
| use_case | string | 用途 |
| rarity | string | 稀有度 |
| status | string | 验证状态 |
| source_note | string | 来源描述 |
| last_checked | string / null | 最后检查日期 |
| verification_level | string | 验证等级 |
| verification_notes | string | 验证备注 |
| display_notes | string | 展示备注 |

## 11. 页面展示映射

- recipes.html 使用 recipe 数据
- fish.html 使用 fish 数据
- npc-gifts.html 使用 npc_gift 数据
- codes.html 使用 code 数据
- checklist.html 使用 checklist_item 数据

- confirmed 数据可以正常展示
- unverified 数据必须显示 warning
- placeholder 数据只用于 MVP 测试，不得混入真实数据区域
- outdated 数据必须显示过期提示
- removed 数据默认不展示

## 12. JSON 文件规划

未来可以创建：

- data/recipes.json
- data/fish.json
- data/npc-gifts.json
- data/codes.json
- data/checklist-items.json
- data/events.json
- data/materials.json

当前 T048 不创建这些 JSON 文件。

## 13. 后续任务建议

- T049 创建 sample data JSON 草案
- T050 创建真实数据录入模板
- T051 选择第一类可人工录入的数据
- T052 创建数据 review checklist
- T053 设计 placeholder 与 confirmed 数据分离方案
