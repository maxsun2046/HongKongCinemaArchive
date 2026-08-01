# 系统架构

```
React 页面层
  ↓
组件层
  ↓
JSON 数据层
  ↓
本地资源层 assets
```

## 页面层

页面入口集中于 `src/pages.jsx`，路由定义在 `src/App.jsx`。页面负责组合数据与组件，不承担数据持久化。

## 组件层

`src/components/` 存放可复用展示与维护组件，包括电影卡片、目录筛选、展厅模块、完成度、资源状态与数据检查。

## 数据层

`src/data/` 使用本地 JSON 文件作为档案数据源：

- `films.json`：电影档案。
- `people.json`：人物档案。
- `companies.json`：公司档案。
- `exhibitions.json`：专题展览。

## 资源层

`src/assets/` 存放海报、封面、人物与展览资源。`filmImages.js` 负责将档案中的图片路径解析为 Vite 可加载的本地资源。

## 维护工具

`src/utils/` 包含数据健康、电影完成度、展厅完成度与馆藏统计计算逻辑。它们只读取 JSON，不写入数据。
