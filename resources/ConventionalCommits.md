# 慣例式提交（Conventional Commits）


慣例式提交（Conventional Commits）是一種用於撰寫 Git 提交訊息的規範，旨在提升提交記錄的人機可讀性，並方便自動化工具處理。其結構為：`<類型>[可選作用範圍]: <描述>`，可搭配正文和頁腳說明。

常見的提交類型包含：
- **feat:** 新增功能（對應語意化版本的次版本）。
- **fix:** 修復錯誤（對應語意化版本的修訂號）。
- **BREAKING CHANGE:** 重大變更，影響到相容性（對應主版本升級）。

此外還有其他類型，如 **docs:** 文件更新、**style:** 格式調整、**refactor:** 重構程式碼等。若提交屬於重大變更，可使用 `!` 標示或在頁腳加上 `BREAKING CHANGE`。

此規範能幫助：
1. 自動生成變更日誌（Changelog）。
2. 自動判斷版本號的升級。
3. 讓團隊成員快速理解每次變更的內容。

透過慣例式提交，專案的提交歷史更加清晰、結構化，並能有效提升團隊協作效率。

[造訪 Conventional Commits](https://www.conventionalcommits.org/zh-hant/v1.0.0/)