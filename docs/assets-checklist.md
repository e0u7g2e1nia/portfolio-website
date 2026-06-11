# 素材上传清单

## 上传路径对照表

### Hero
| 文件 | 上传到 |
|------|--------|
| 个人照片（矩形裁剪，高清） | `public/assets/hero/avatar.jpg` |

---

### AI 共创 (`public/assets/ai-collab/`)

| 文件 | 上传到 |
|------|--------|
| 网页游戏 1 操作录屏/gif | `vibe-coding/game-1.gif` |
| 网页游戏 2 操作录屏/gif | `vibe-coding/game-2.gif` |
| 网页游戏 3 操作录屏/gif（如有） | `vibe-coding/game-3.gif` |
| Obsidian+Codex+快捷指令 工作流演示视频/gif | `workflow/workflow-demo.mp4` 或 `.gif` |
| AI 生图作品（可多张） | `ai-generated/01.jpg` `02.jpg` ... |

---

### 产品 (`public/assets/product/`)

| 文件 | 上传到 |
|------|--------|
| ManCraft App Figma 截图（多张） | `mancraft/screen-01.jpg` ... |
| 忆述光华小程序 Figma 截图（多张） | `yishu-guanghua/screen-01.jpg` ... |
| 欧莱雅商赛 PPT 核心截图 | `loreal/ppt-01.jpg` `ppt-02.jpg` ... |
| 欧莱雅品牌视频 | `loreal/brand-video.mp4` |

---

### 设计 (`public/assets/design/`)

| 文件 | 上传到 |
|------|--------|
| 书籍封面 | `book/cover.jpg` |
| 书籍封底 | `book/back.jpg` |
| 书籍内页（可多张） | `book/interior-01.jpg` ... |
| 海报设计（可多张） | `posters/poster-01.jpg` ... |
| 易拉宝等推送设计 | `rollup/rollup-01.jpg` ... |

---

### 摄影 (`public/assets/photography/`)

| 文件 | 上传到 |
|------|--------|
| 精选摄影作品（建议 15–20 张） | `01.jpg` `02.jpg` ... `20.jpg` |

---

### 自媒体 (`public/assets/social/`)

| 文件 | 上传到 |
|------|--------|
| 热帖封面截图（每条帖子一张） | `posts/post-01.jpg` `post-02.jpg` ... |
| 各平台账号头像截图（可选） | `avatars/xiaohongshu.jpg` 等 |

---

## 数据配置文件（上传素材后由 Claude Code 填写）

- `src/data/social-posts.ts` — 帖子标题 + 链接 + 点赞/阅读数据
- `src/data/projects.ts` — 各项目名称、描述、标签

## 参考设计图

存放在 `public/assets/references/`，开发时对照使用，部署前删除。
