---
title: QRCode 函式庫
description: 一個強大且多功能的 QR Code 產生工具
---

# QRCode 函式庫

## 特色功能

這個函式庫提供了豐富的 QR Code 產生功能：

- 🖥️ 支援多平台運作
  - 伺服器端
  - 客戶端
  - React Native（使用 SVG）

- 🛠️ 指令列工具
  - 提供便利的命令列介面
  - 可直接儲存 QR Code 圖片

- 📝 多種編碼模式支援
  - 數字模式
  - 英數字元模式
  - 漢字模式
  - 位元組模式
  - 支援混合模式使用

- 🌏 強大的字元支援
  - 中文字元
  - 西里爾字母
  - 希臘文字
  - 日文字元
  - 多位元組字元（如表情符號 😄）

- ⚡ 最佳化功能
  - 自動產生最佳化的資料區段
  - 確保最佳的資料壓縮
  - 產生最小尺寸的 QR Code

- 📱 通用性
  - 可被各種 QR Code 掃描應用程式讀取
  - 完全符合 QR Code 標準規範

## 安裝方式

### 專案內安裝

在你的專案資料夾中執行：

```bash
npm install --save qrcode
```

### 全域安裝

如果你想要在命令列中使用 QRCode 工具來儲存圖片或在終端���中檢視：

```bash
npm install -g qrcode
```

## 參考資源

GitHub 專案連結：https://github.com/soldair/node-qrcode

