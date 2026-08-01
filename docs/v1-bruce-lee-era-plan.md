# V1：李小龙时代首批馆藏录入计划

## 范围与目标

本批次覆盖专题 `bruce_lee_era`（1971—1973），目标影片如下：

1. 《唐山大兄》（1971） / *The Big Boss*
2. 《精武门》（1972） / *Fist of Fury*
3. 《猛龙过江》（1972） / *The Way of the Dragon*
4. 《龙争虎斗》（1973） / *Enter the Dragon*

本计划只定义后续录入工作，不修改任何数据。每部影片的目标为通过现有 17 项档案完成度检查，即 **100%**；若资源尚未取得，应保留明确的待补项目，而不能以猜测资料填充。

## 当前结构结论

- `films.json` 已包含《唐山大兄》《精武门》《龙争虎斗》；三者都已关联 `bruce_lee_era`。
- `people.json` 已有李小龙、罗维、苗可秀档案，但缺少部分已被电影人员字段或关联字段引用的人物。
- `companies.json` 已有嘉禾与华纳兄弟；《猛龙过江》所需的制作公司档案尚未建立。
- `exhibitions.json` 的李小龙时代已列出三部现有影片，后续需加入《猛龙过江》及其 1972 年时间线事件。
- 当前完成度工具检查 `display.stills`，因此剧照应以 `display.stills` 数组录入；`film-template.json` 的 `gallery` 仅是预留字段，不计入现有完成度。

## 影片录入清单

### 《唐山大兄》

**当前状态：** 已有基础资料、嘉禾公司、罗维／李小龙／苗可秀关联、专题关联及海报／封面路径。

**需要补充或核对：**

- 核对主演表，并为田俊建立人物档案后补入 `relations.people`。
- 核对动作指导资料；没有可靠来源时保持空数组，不以推测补齐。
- 建立 `display.stills`，至少录入一张来源明确的剧照；同时替换或确认正式海报与封面资源。
- 按实际收藏填写云端、NAS、实体版本；新增一次真实观看后再写入 `watchHistory`。
- 复核制作／发行公司名称与 ID，保持嘉禾 `golden-harvest` 的双向影片关联完整。

**目标关联：** 人物 `bruce-lee`、`lo-wei`、`maria-yi`、`james-tien`；公司 `golden-harvest`；展览 `bruce_lee_era`。

### 《精武门》

**当前状态：** 已有基础资料、嘉禾公司、罗维／李小龙／苗可秀关联、专题关联及海报／封面路径。

**需要补充或核对：**

- 核对田丰等主演资料；只有在人物档案建立后，才写入 `relations.people`。
- 核对动作指导与编剧的最终署名。
- 建立 `display.stills`，并确认海报、封面为可长期使用的本地资源。
- 依据实际持有资源补齐 `collection`，观看后再新增 `watchHistory`。

**目标关联：** 人物 `bruce-lee`、`lo-wei`、`maria-yi`、`james-tien`，以及经核实后新增的演员 ID；公司 `golden-harvest`；展览 `bruce_lee_era`。

### 《猛龙过江》

**当前状态：** 尚未建立电影记录，是本批次唯一的新电影条目。

**需要新建的电影字段：**

- 完整的 `id`、中英文片名、1972 年份、地区、制作／发行公司。
- 创作人员：导演李小龙、主演名单、动作指导与编剧署名；所有人员都要使用现有人物 ID 或先建立人物档案。
- 类型、李小龙时代标签、检索关键词、历史简介及四项档案评分。
- `collection` 与 `watchHistory` 按真实私人藏品和观看事实录入。
- `relations.people`、`relations.films`、`relations.exhibitions`，其中展览 ID 为 `bruce_lee_era`。
- `display.poster`、`display.cover` 与 `display.stills`；并在图片解析映射中登记新路径，使页面能显示本地资源。

**需要的人物：** 复用 `bruce-lee`、`maria-yi`；拟新增并核实 `chuck-norris`、`robert-wall`、`wei-ping-ou` 等人物档案。导演李小龙应同步更新其 `films` 数组。

**需要的公司：** 拟新增协和电影公司档案（建议 ID：`concord-production`），并核实其制作身份；嘉禾的发行／出品关联在录入前确认。建立公司后需同步其 `people` 与 `films` 数组。

**展览更新：** 在 `bruce_lee_era.films` 加入新影片 ID，并在时间线补入 1972 年《猛龙过江》上映事件。

### 《龙争虎斗》

**当前状态：** 已有基础资料、嘉禾／华纳兄弟、李小龙时代专题、海报／封面路径和部分人员关系。

**需要补充或核对：**

- 为罗伯特·高洛斯、约翰·萨克森、石坚、迈克尔·艾林建立人物档案；其中罗伯特·高洛斯与石坚已在 `relations.people` 被引用，必须优先修复为有效人物关联。
- 复核主演、动作指导与编剧署名，使 `credits` 与 `relations.people` 一致。
- 建立 `display.stills`，并确认正式海报与封面资源。
- 核对嘉禾与华纳兄弟在制作／发行字段中的分工；同步人物和公司代表影片列表。
- 按实际资源补齐收藏信息；有真实观看记录后再写入 `watchHistory`。

**目标关联：** 人物 `bruce-lee`、`robert-clouse`、`john-saxon`、`shih-kien`、`michael-allerin`；公司 `golden-harvest`、`warner-bros`；展览 `bruce_lee_era`。

## 人物档案录入顺序

1. 先建立已有影片已引用的 `robert-clouse`、`shih-kien`，消除当前无效人物关联。
2. 建立《唐山大兄》《精武门》共同需要的 `james-tien`，以及经资料核实后需要的演员。
3. 建立《猛龙过江》所需人物：`chuck-norris`、`robert-wall`、`wei-ping-ou` 等。
4. 建立《龙争虎斗》所需的 `john-saxon`、`michael-allerin`。
5. 每建立一人，同时更新该人物的 `films` 数组与相关电影的 `credits`、`relations.people`。

## 公司与展览关联

- 继续使用嘉禾 `golden-harvest`，并确认四部片的制作／发行角色。
- 继续使用华纳兄弟 `warner-bros`，限于《龙争虎斗》的经核实关联。
- 为《猛龙过江》建立协和电影公司档案前，先核实正式中英文名称、成立年份及制作关系。
- 完成本批次后，`bruce_lee_era` 的 `films` 应含四个电影 ID；`keyPeople` 与 `keyCompanies` 可在人物／公司档案完备后扩充。

## 图片资源计划

每部影片需要以下本地资源：

- 1 张竖版海报：`src/assets/posters/`。
- 1 张横版封面：`src/assets/covers/`。
- 至少 1 张剧照：在电影 `display.stills` 中引用，并在后续确定的本地资源目录中保存。

文件名采用小写英文与年份，例如 `the_way_of_the_dragon_1972.svg`。图片录入前需确认版权来源、文件路径和 `src/assets/filmImages.js` 的静态映射均正确。

## 完成度目标与验收

现有完成度工具的 17 项检查包括：基础资料、导演、演员、类型、时代标签、历史简介、档案评分、海报、封面、人物关联、公司关联、展览关联、剧照、云端资源、NAS 收藏、蓝光版本、观看记录。

| 阶段 | 目标 |
| --- | --- |
| 新建／补全核心编目与关联 | 四部影片均通过数据健康检查的必填项与人物、公司关联检查 |
| 图片与资源整理 | 四部影片均有可解析海报、封面和至少一张剧照 |
| 私人收藏与观看录入 | 只按真实持有资源与真实观影记录填写 |
| 批次验收 | 每部达到 100% 完成度，并执行 `/admin/check` 与 `npm run build` |

若某项尚无可靠资料或未拥有对应资源，应保留为待完善状态；完成度低于 100% 是如实记录，不应通过虚构字段达到验收数字。
