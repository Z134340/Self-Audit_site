# 自行查核 AI Agent 指揮中心

銀行自行查核情境的本機互動儀表板原型。新版以「可被主管快速判讀的風險控制室」為核心，整合 Agent 艦隊、KPI、對話工作階段、證據完整度、查核軌跡與風險發現。

## 線上展示

[Self-Audit_site GitHub Pages](https://z134340.github.io/Self-Audit_site/)

## 開啟方式

直接開啟 `index.html`，或在專案根目錄啟動本機靜態伺服器：

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

再開啟 `http://127.0.0.1:8000/`。

本專案不需要安裝套件，也沒有 CDN 或外部執行依賴。

## 專案結構

- `index.html`：語意化頁面骨架與儀表板資訊架構
- `src/styles.css`：銀行科技視覺、三欄控制室與響應式版面
- `src/app.js`：Agent 狀態、對話、查核進度、環境與風險互動
- `assets/brand/`：示意品牌標誌
- `assets/figma-scenes/`：六張 1440 × 900 Figma Prototype 場景
- `FIGMA_HANDOFF.md`：Figma hotspot 與場景連線建議
- `DESIGN_REFERENCES.md`：開源 UI/UX 參考來源與採用原則

## 主要互動

- 5 支 Agent 切換，每支具有獨立控制成熟度、證據與查核步驟
- 4 種查核視角切換
- 唯讀／模擬草稿環境切換
- 啟動新查核工作階段
- 主管訊息與 Agent 回覆保留在當前工作階段
- 流程可推進至 4 / 4 完成
- 流程階段與風險卡片聚焦
- 桌面、平板與手機工作區切換

## 原型邊界

目前所有資料均為前端示意資料，沒有連接真實銀行資料源、身分權限、AI 模型、寫入服務或不可竄改稽核軌跡。環境切換與草稿行為只保留於本機頁面工作階段。
