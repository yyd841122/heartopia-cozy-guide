# Heartopia Cozy Guide 真实数据录入模板

## 1. 使用说明

此模板用于人工记录候选真实数据。

填写此模板不代表数据可以直接发布。

所有数据必须经过人工验证流程，确认 status / source_note / last_checked 后，才能进入用户可见页面或正式 JSON 文件。

## 2. 通用录入规则

1. 不确定字段填写 Unknown
2. 不得猜测缺失字段
3. 不得填写假兑换码
4. 不得复制第三方网站大段内容
5. 不得使用官方未授权图片
6. 所有记录必须填写 source_note
7. 所有记录必须填写 status
8. 所有记录必须填写 last_checked，未检查时填 null
9. 未验证内容必须保持 unverified 或 checking
10. confirmed 必须有明确验证依据

## 3. 通用记录模板

| Field | Value |
| --- | --- |
| id |  |
| type |  |
| name |  |
| status | unverified |
| source_note |  |
| last_checked |  |
| verification_level | unknown |
| verification_notes |  |
| display_notes |  |
| publish_decision | do_not_publish_yet |

## 4. Recipes 录入模板

| Field | Value |
| --- | --- |
| id | recipe_ |
| type | recipe |
| name |  |
| ingredients |  |
| unlock_hint | Unknown |
| use_case | Unknown |
| energy_value | Unknown |
| sell_value | Unknown |
| status | unverified |
| source_note |  |
| last_checked |  |
| verification_level | unknown |
| verification_notes |  |
| display_notes |  |
| publish_decision | do_not_publish_yet |

检查清单：

- [ ] recipe name 已确认
- [ ] ingredients 已确认
- [ ] unlock_hint 不确定时已写 Unknown
- [ ] source_note 已填写
- [ ] last_checked 已填写
- [ ] 未验证时没有标记 confirmed

## 5. Fish 录入模板

| Field | Value |
| --- | --- |
| id | fish_ |
| type | fish |
| name |  |
| location | Unknown |
| time_window | Unknown |
| weather | Unknown |
| season | Unknown |
| rarity | Unknown |
| sell_value | Unknown |
| status | unverified |
| source_note |  |
| last_checked |  |
| verification_level | unknown |
| verification_notes |  |
| display_notes |  |
| publish_decision | do_not_publish_yet |

检查清单：

- [ ] fish name 已确认
- [ ] location 不确定时写 Unknown
- [ ] time_window 不确定时写 Unknown
- [ ] weather 不确定时写 Unknown
- [ ] 没有为了补全字段而猜测
- [ ] source_note 已填写

## 6. NPC Gifts 录入模板

| Field | Value |
| --- | --- |
| id | npc_gift_ |
| type | npc_gift |
| npc_name |  |
| favorite_gifts |  |
| neutral_gifts |  |
| avoid_gifts |  |
| friendship_note | Unknown |
| unlock_hint | Unknown |
| status | unverified |
| source_note |  |
| last_checked |  |
| verification_level | unknown |
| verification_notes |  |
| display_notes |  |
| publish_decision | do_not_publish_yet |

检查清单：

- [ ] npc_name 已确认
- [ ] favorite_gifts 来源明确
- [ ] neutral_gifts 来源明确
- [ ] avoid_gifts 来源明确
- [ ] 没有根据常识猜测 NPC 喜好
- [ ] source_note 已填写

## 7. Codes 录入模板

| Field | Value |
| --- | --- |
| id | code_ |
| type | code |
| code | [do not fill until verified] |
| reward |  |
| status | unverified |
| last_checked |  |
| source_note |  |
| expiry_note |  |
| verification_level | unknown |
| verification_notes |  |
| display_notes |  |
| publish_decision | do_not_publish_yet |

检查清单：

- [ ] code 已通过可靠来源或实机验证
- [ ] 未验证 code 没有放入 active 区域
- [ ] 没有伪造 code
- [ ] reward 已确认或写 Unknown
- [ ] last_checked 已填写
- [ ] expired / removed 状态处理正确

## 8. Checklist Items 录入模板

| Field | Value |
| --- | --- |
| id | checklist_ |
| type | checklist_item |
| title |  |
| category |  |
| is_general_tip | false |
| is_verified_game_task | false |
| status | unverified |
| source_note |  |
| last_checked |  |
| verification_level | unknown |
| verification_notes |  |
| display_notes |  |
| publish_decision | do_not_publish_yet |

通用建议可以作为 general tip。
官方/游戏内每日任务必须经过人工验证后才能标记为 verified_game_task。

## 9. Events 录入模板

| Field | Value |
| --- | --- |
| id | event_ |
| type | event |
| event_name |  |
| start_date |  |
| end_date |  |
| region | Unknown |
| summary |  |
| status | unverified |
| source_note |  |
| last_checked |  |
| verification_level | unknown |
| verification_notes |  |
| display_notes |  |
| publish_decision | do_not_publish_yet |

检查清单：

- [ ] start_date 已确认或写 null
- [ ] end_date 已确认或写 null
- [ ] region 已确认或写 Unknown
- [ ] 活动是否仍有效已检查
- [ ] last_checked 已填写

## 10. Materials 录入模板

| Field | Value |
| --- | --- |
| id | material_ |
| type | material |
| name |  |
| source_location | Unknown |
| use_case | Unknown |
| rarity | Unknown |
| status | unverified |
| source_note |  |
| last_checked |  |
| verification_level | unknown |
| verification_notes |  |
| display_notes |  |
| publish_decision | do_not_publish_yet |

## 11. 发布决策值

| Value | Meaning |
| --- | --- |
| do_not_publish_yet | 数据尚未准备好，不发布到用户页面 |
| publish_as_unverified | 可发布到待验证/线索区域，明确标记为未验证 |
| publish_as_confirmed | 已验证通过，可以进入正式数据区 |
| needs_second_check | 需要二次验证后再决定 |
| remove_from_public_page | 已发布数据需要从用户页面移除 |

## 12. 示例：空白记录

| Field | Value |
| --- | --- |
| id | recipe_ |
| type | recipe |
| name |  |
| ingredients |  |
| status | unverified |
| source_note |  |
| last_checked |  |
| verification_level | unknown |
| publish_decision | do_not_publish_yet |

## 13. 后续任务建议

- T053 选择第一类可人工录入的数据
- T054 创建数据 review checklist
- T055 设计 placeholder 与 confirmed 数据分离方案
- T056 设计 JSON 接入页面的安全方案
- T057 创建第一批真实数据候选记录
