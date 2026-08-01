# 数据模型

所有跨档案关联均使用稳定 `id`。名称用于显示，ID 用于关系、筛选与长期维护。

## Film

- `titles`：中文与英文片名。
- `release`：上映年份与地区。
- `production`：制作与发行公司。
- `credits`：导演、主演、动作指导、编剧。
- `taxonomy`：类型、时代标签、关键词。
- `archive`：评分、价值指标与历史简介。
- `collection`：云端、NAS、实体版本与播放设备。
- `watchHistory`：个人观看记录。
- `relations`：人物、相关电影、展览关联 ID。
- `display`：海报、封面、剧照等显示资源。

## Person

- `id`：稳定人物 ID。
- `name` / `englishName`：中英文名称。
- `roles`：身份数组。
- `era`：所属时代。
- `films`：代表电影 ID。

## Company

- `id`：稳定公司 ID。
- `name` / `englishName`：公司名称。
- `founded`：成立年份。
- `people`：重要人物 ID。
- `films`：代表电影 ID。

## Exhibition

- `id`：稳定展厅 ID。
- `period`：展览覆盖时期。
- `timeline`：时间线节点；可用 `status` 标记 `archived` 或 `planned`。
- `keyPeople` / `keyCompanies`：核心人物与公司 ID。
- `films`：代表电影 ID。
- `intro`、`background`、`significance`：策展文字。

录入前先建立被引用对象，再写入关联 ID；完成后运行 `/admin/check` 与 `npm run build`。
