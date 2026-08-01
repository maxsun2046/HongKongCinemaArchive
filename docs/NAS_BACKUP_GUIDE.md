# 群晖 NAS 备份指南

项目：香港电影档案馆  
当前版本：V1.99

## 群晖 DS218+ 定位

群晖 DS218+ 用于项目资产的长期备份与保护：

- 保存项目快照
- 保存海报、封面、剧照等图片资源
- 保存不适合只依赖单一电脑的档案资产

它不是开发环境，也不是 GitHub 或 Git 版本管理的替代品。日常开发仍在 Windows 电脑完成；版本历史仍以 GitHub 私有仓库为准。

## 推荐目录结构

在群晖 File Station 中建立以下目录：

```text
/volume1/archive_backup/
  HongKongCinemaArchive/
    src/
    docs/
    assets/
    README.md
    package.json
    package-lock.json
```

说明：项目内的资源实际位于 `src/assets/`。上方单列 `assets/` 仅用于在 NAS 中保存原始图片或大体积资源副本；如没有单独原始资源目录，可只备份 `src/assets/`。

建议按日期保留快照，避免新备份覆盖唯一的旧版本：

```text
/volume1/archive_backup/HongKongCinemaArchive/
  2026-08-01-v1.99/
  2026-09-01/
```

## 备份范围

需要备份：

- `src/`
- `docs/`
- `src/assets/`
- `README.md`
- `package.json`
- `package-lock.json`

不需要备份：

- `node_modules/`：可在新电脑执行 `npm install` 重新生成
- `dist/`：可执行 `npm run build` 重新生成

## 恢复流程

### 电脑损坏或更换电脑

1. 安装 Git 与 Node.js。
2. 从 GitHub 克隆项目：

   ```powershell
   git clone https://github.com/maxsun2046/HongKongCinemaArchive.git
   cd HongKongCinemaArchive
   ```

3. 从群晖恢复 `src/assets/` 与任何未纳入 Git 的本地原始资源。
4. 安装依赖：

   ```powershell
   npm install
   ```

5. 启动项目：

   ```powershell
   npm run dev
   ```

6. 可额外执行 `npm run build` 确认恢复后的项目完整可构建。

## 日常维护流程

| 工作 | 负责位置 |
| --- | --- |
| 开发、预览、数据录入 | Windows 电脑 |
| 代码版本与异地同步 | GitHub 私有仓库 |
| 项目快照、原始影像资源与长期保留 | 群晖 DS218+ |

推荐每完成一个明确版本，或新增一批图片资源后：

1. 在电脑运行 `git status`，确认变更范围。
2. 提交并 `git push` 到 GitHub。
3. 将项目备份范围复制到 NAS 的新日期目录。
4. 确认 NAS 中的文件数量与本地备份范围一致。

不要将 GitHub 登录令牌、密码或私密配置复制到 NAS 备份目录。

## 当前版本记录

V1.99：NAS 备份方案建立。

