# GitHub 工作流

## 当前策略

- `main`：稳定版本。
- `develop`：日常开发集成分支。
- `future/*`：实验功能分支。

当前阶段只使用 `main`。需要开始并行开发时，再创建 `develop` 与 `future/*` 分支。

## 日常提交流程

```bash
git status
git add .
git commit -m "说明本次修改"
git push
```

提交前确认不应提交 `node_modules`、`dist`、环境变量或本地临时文件。

## 重要版本标签

- `v1.0`：李小龙时代开馆。
- `v1.2`：嘉禾黄金十年展厅建立。
- `v1.8`：数字档案馆大厅。
- `v1.9`：个人收藏系统。
- `v1.96`：Git 与项目维护流程初始化。

示例：

```bash
git tag -a v1.96 -m "Git workflow initialized"
git push origin v1.96
```

## 恢复项目

```bash
git clone <repository-url>
cd HongKongCinemaArchive
npm install
npm run dev
```

## 创建 GitHub 私有仓库

GitHub CLI 可用并登录后，可在项目根目录执行：

```bash
gh repo create HongKongCinemaArchive --private --source . --remote origin --push
```

当前环境未检测到 GitHub CLI。可在 GitHub 网站新建同名私有仓库，再执行：

```bash
git remote add origin <repository-url>
git push -u origin main
```
