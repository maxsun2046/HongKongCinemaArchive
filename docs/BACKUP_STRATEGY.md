# 项目备份策略

项目：香港电影档案馆  
当前版本：V1.97

## 项目资产分类

| 类别 | 位置 | 说明 |
| --- | --- | --- |
| 代码 | `src/` | React 页面、组件、工具与样式 |
| 配置 | `package.json`、`package-lock.json` | 依赖与运行脚本 |
| 数据 | `src/data/` | 电影、人物、公司与展览 JSON 档案 |
| 文档 | `docs/` | 架构、录入、版本与维护说明 |
| 资源 | `src/assets/` | 海报、封面、人物与展览图片 |

## 备份职责

### GitHub：版本管理与异地副本

GitHub 私有仓库用于保存可追溯的项目版本，包括：

- 源代码与样式
- JSON 数据档案
- 项目文档
- 配置文件
- `src/assets/` 中适合纳入 Git 的资源

日常完成一组明确修改后，执行：

```powershell
git status
git add .
git commit -m "说明本次修改"
git push
```

不要将密码、访问令牌或私密配置写入仓库。

### 本地电脑：开发环境

本地电脑保存完整工作项目，用于开发、预览和日常录入。开始工作前可执行 `git pull` 获取其他设备已推送的更新；结束工作后提交并推送，避免只保留在单一电脑中。

### 群晖 NAS：长期备份

NAS 用于保存项目快照和较大的影像资源备份。建议按日期建立只读或版本化快照，例如：

```text
HongKongCinemaArchive-backup/
  2026-08-01/
  2026-09-01/
```

至少包含项目目录（排除可重新生成的目录）及原始海报、封面、剧照等资源文件。NAS 不替代 GitHub 的提交历史；两者共同构成恢复保障。

## 备份范围

需要备份并纳入版本管理：

- `src/`
- `docs/`
- `src/assets/`
- `README.md`
- `package.json`
- `package-lock.json`

不需要备份或提交：

- `node_modules/`：可由 `npm install` 重新生成
- `dist/`：可由 `npm run build` 重新生成

这两项应继续由 `.gitignore` 排除。

## 恢复流程

### 电脑损坏或更换电脑

1. 安装 Node.js 与 Git。
2. 从 GitHub 克隆私有仓库：

   ```powershell
   git clone https://github.com/maxsun2046/HongKongCinemaArchive.git
   cd HongKongCinemaArchive
   ```

3. 安装项目依赖：

   ```powershell
   npm install
   ```

4. 从 NAS 恢复未纳入 Git 或需要保留原始质量的资源备份至 `src/assets/`。
5. 启动本地开发环境：

   ```powershell
   npm run dev
   ```

6. 访问终端显示的本地地址，并运行 `npm run build` 确认恢复完整。

### 单个文件误改或误删

先执行 `git status` 确认影响范围。若文件已经提交，可在 GitHub 提交历史中查找对应版本，或请熟悉 Git 的维护者协助恢复；避免在未确认目标前使用批量还原命令。

## 多设备维护流程

每次切换设备遵循同一顺序：

1. 开始前：`git pull`
2. 修改项目并运行必要验证（通常为 `npm run build`）
3. 检查：`git status`
4. 提交：`git add .`、`git commit -m "..."`
5. 推送：`git push`

如 `git pull` 提示冲突，先停止继续录入，保留本地修改并处理冲突后再提交。不要用强制推送覆盖另一台设备的更新。

## 当前项目状态

- 当前版本：V1.97
- 数据模型稳定
- 展厅系统稳定
- 收藏系统稳定
- Git 版本管理与 GitHub 私有远程仓库已完成

