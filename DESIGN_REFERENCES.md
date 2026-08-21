# 開源 UI/UX 設計參考

本專案的版面與程式碼均為原創實作。下列專案只用於研究企業儀表板的資訊層級、狀態語意、元件節奏及圖示一致性；沒有複製其版型，也沒有載入外部套件、字型、圖片或 CDN。

## 參考來源

### IBM Carbon Design System

- 官方網站：https://carbondesignsystem.com/
- 採用原則：清楚的語意色、狀態層級、資訊密度與資料視覺可讀性。
- 本專案應用：完成／執行中／待命與高／中風險均同時使用文字、色彩及形狀，不只依賴顏色。

### Ant Design / Ant Design Pro

- 元件總覽：https://ant.design/components/overview/
- Ant Design Pro：https://github.com/ant-design/ant-design-pro
- 授權參考：Ant Design Pro 為 MIT License。
- 採用原則：企業管理介面的 KPI、卡片、分頁、步驟與資訊密度。
- 本專案應用：固定指揮列、四張 KPI 摘要、三欄工作區與清楚的操作主次。

### Tremor

- 官方儲存庫：https://github.com/tremorlabs/tremor
- 授權參考：Apache License 2.0。
- 採用原則：模組化 KPI 卡片、簡潔趨勢視覺與 dashboard composition。
- 本專案應用：KPI 卡片、證據覆蓋率與成熟度視覺採小型、可快速掃讀的形式。

### Lucide Icons

- 官方網站：https://lucide.dev/
- 官方授權：https://github.com/lucide-icons/lucide/blob/main/LICENSE
- 授權參考：ISC License，部分源自 Feather 的圖示依 MIT License。
- 採用原則：一致筆畫、幾何清楚、低視覺噪音的線性圖示語彙。
- 本專案應用：目前使用原生文字與幾何符號，未直接散布 Lucide SVG；後續若導入正式圖示檔，需保留相應授權聲明。

## 銀行情境設計原則

1. 科技感來自資料邊界、即時狀態與精準層級，不使用高飽和霓虹堆疊。
2. 風險色只用於需要注意或處置的內容，品牌綠與藍負責主要操作與信任感。
3. 每個 AI 結論必須保留工作階段、證據完整度、流程狀態與原型邊界。
4. 手機版以 Agent／對話／產出三個工作區切換，避免把三欄直接壓縮成難以閱讀的長頁面。
