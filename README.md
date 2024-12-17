# Nuxt 3 + Cloudflare (Pages + D1) + Auth (Lucia)

## 安装依赖

```bash
pnpm i
```

## 创建数据库

如数据库名为：demo

```bash
wrangler d1 create demo
```

如果是线上已经存在的数据库，随便执行一个语句
```bash
wrangler d1 execute demo --command "SELECR * from users" --local
```

## 配置 wrangler.toml

```bash
cp wrangler.toml.example wrangler.toml
```

替换上一步生成的数据库配置，如果线上已经存在的数据库，在网页去取配置

## 生成数据库语句

```bash
pnpm run db:generate
```

## 插入本地数据库数据结构

```bash
pnpm run db:migrate
```

## 插入线上数据库数据结构

```bash
pnpm run db:migrate:prod
```
