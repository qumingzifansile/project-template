# 项目说明

## 项目概述
这是一个全栈 Web 应用模板，后端使用 Node.js + Express，前端使用 React + Vite，数据库使用 Mysql，缓存使用 Redis。

## 架构约束
- 后端代码放在 `backend/src/`，入口为 `backend/src/index.js`
- 前端代码放在 `frontend/src/`，入口为 `frontend/src/App.jsx`
- 数据库迁移脚本放在 `backend/migrations/`
- **不要修改 `docker-compose.yml` 中的基础设施配置**（mysql、redis 服务）
- 所有 API 响应统一格式：`{ code: number, data: any, message: string }`

## 构建与运行命令
- 启动基础设施：`docker compose up -d mysql redis`
- 启动全部服务：`docker compose up -d`
- 后端开发模式：`cd backend && npm run dev`
- 前端开发模式：`cd frontend && npm run dev`
- 运行测试：`cd backend && npm test`

## 代码风格
- 使用 ES Module 语法（import/export）
- 后端使用 2 空格缩进，前端使用 2 空格缩进
- 变量命名使用 camelCase，常量使用 UPPER_SNAKE_CASE
- 不要使用 TypeScript，使用纯 JavaScript（比赛时减少编译步骤）

## 注意事项
- 每完成一个功能，先在本地运行验证再继续下一个
- 生成代码后自行检查是否有语法错误
- 如需新增依赖，先更新 package.json，再运行 npm install

## 数据库
- 使用 MySQL 8.0，禁止使用 PostgreSQL 特有语法
- 自增主键用 `INT AUTO_INCREMENT PRIMARY KEY`
- 字符串用 `VARCHAR`，JSON 用 `JSON` 类型
- UPSERT 用 `INSERT ... ON DUPLICATE KEY UPDATE`
- 分页用 `LIMIT offset, count` 或 `LIMIT count OFFSET offset`
- 日期函数用 `NOW()`、`DATE_FORMAT()`
- 不要生成 `SERIAL`、`RETURNING`、`JSONB`、`ON CONFLICT` 等 PostgreSQL 语法
- 数据库迁移脚本放在 `backend/migrations/`，用 `.sql` 文件，按序号命名