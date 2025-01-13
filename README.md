# 前端函式庫文件集

這是一個使用 VitePress 建立的技術文件網站，收錄了多個實用的前端筆記、函式庫使用教學、範例、工具、實用網站。

## 安裝

```bash
# 使用 npm
npm install

# 使用 pnpm
pnpm install
```

## 開發

```bash
# 啟動開發伺服器
npm run docs:dev
# 或
pnpm docs:dev
```

## 建置

```bash
# 建置靜態網站
npm run docs:build
# 或
pnpm docs:build
```

## 預覽

```bash
# 預覽建置結果
npm run docs:preview
# 或
pnpm docs:preview
```

## 技術棧

- Node.js 20+
- pnpm 9+
- VitePress v1.5.0
- Markdown

## 專案結構

```
.
├── .vitepress/
│   └── config.mjs      # VitePress 設定檔
├── library/            # 函式庫文件
│   ├── index.md
│   ├── vconsole.md
│   ├── qrcode.md
│   └── ...
└── package.json
```

## 相關文件

- [VitePress 官方文件](https://vitepress.dev/)
