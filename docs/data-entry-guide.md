# 数据录入指南

本目录的模板用于新增档案记录。复制对应模板的内容，替换示例值，再将完整对象加入相应数据文件的顶层数组。

## 新增电影

1. 复制 `src/templates/film-template.json` 的对象到 `src/data/films.json`。
2. 填写 `id`、`titles`、`release.year` 与 `production.companies`。`id` 使用小写英文和连字符，例如 `city-on-fire`。
3. 填写 `credits`。`director.personId`、演员及动作／编剧人员的 `personId` 应指向 `people.json` 中已有的 ID；`name` 用于当前页面显示。
4. 填写 `taxonomy` 与 `archive`。评分范围为 0—10；`synopsis` 为档案历史简介。
5. 在 `display.poster`、`display.cover` 中填写相对 `src/assets` 的资源路径。`gallery` 为预留的剧照路径数组，当前页面尚未展示，保留为空数组即可。
6. 填写 `relations.people`、`relations.films`、`relations.exhibitions`。制作公司的关联同时由 `production.companies[].id` 建立。
7. 按实际资源填写 `collection`；观看记录只写入 `watchHistory`，不要混入收藏字段。
8. 运行数据检查页面 `/admin/check`，再运行 `npm run build`。

### 电影字段说明

| 字段 | 说明 |
| --- | --- |
| `titles.zhHans` / `titles.en` | 中文片名与英文片名 |
| `release` | 上映年份与国家／地区 |
| `production.companies` | 制作公司 ID 与显示名称；可填写多家公司 |
| `credits` | 导演、主演、动作指导、编剧的人员关联 |
| `taxonomy` | 类型、时代标签与检索关键词 |
| `archive` | 档案评分、三项价值评分与历史简介 |
| `collection` | 云端、NAS、实体版本与播放设备；描述拥有资源 |
| `watchHistory` | 观看日期、设备、版本、个人评分与备注；描述观看行为 |
| `relations` | 人物、相关影片与展览 ID 的关联 |
| `display` | 海报、封面及预留剧照路径 |

## 新增人物

1. 复制 `src/templates/person-template.json` 到 `src/data/people.json` 的数组。
2. 填写唯一 `id`、中英文名、`roles`、简介和所属时代。
3. 在 `films` 中填写该人物的代表电影 ID。
4. 同时在相关电影的 `credits` 与 `relations.people` 中加入这个人物 ID。

## 新增公司

1. 复制 `src/templates/company-template.json` 到 `src/data/companies.json` 的数组。
2. 填写唯一 `id`、中英文名、成立年份、简介、时代、重要人物与代表电影。
3. 在相关电影的 `production.companies`（必要时也包括 `distributors`）中加入相同公司 ID 与显示名称。

## 新增展览

1. 复制 `src/templates/exhibition-template.json` 到 `src/data/exhibitions.json` 的数组。
2. 填写标题、时期、简介、按年份排序的 `timeline`，以及人物、公司、影片 ID。
3. 在所属电影的 `relations.exhibitions` 中加入此展览 ID，使电影详情页与展厅保持关联。

## 建立关联的规则

- 所有关联字段都使用对应数据文件的 `id`，不能使用影片或人物名称代替。
- 先新增人物／公司／展览记录，再在电影中引用其 ID，便于检查无效关联。
- 新增电影后，同步更新涉及人物和公司的 `films` 数组，保持人物、公司、展览页面的代表作品完整。
- 每次批量录入完成后，访问 `/admin/check` 检查必填字段、人物关联、公司关联与图片资源提示。
