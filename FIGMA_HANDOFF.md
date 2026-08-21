# Figma Prototype Handoff — 自行查核 AI Agent 指揮中心

六張場景圖皆為 1440 × 900，可直接放入同尺寸 Figma Frame，避免縮放、裁切與 Smart Animate 位移。

## 場景

1. `figma-scene-01-default-pr-agent.png`：預設採購風險 Agent 與 2 / 4 查核進度。
2. `figma-scene-02-switch-dlp-agent.png`：切換資料外洩 Agent，右側同步顯示 DLP 專屬證據與流程。
3. `figma-scene-03-tab-supplier-management.png`：切換至「風險證據」視角，保留同一工作階段。
4. `figma-scene-04-environment-toggle.png`：從展示唯讀切換為模擬草稿環境。
5. `figma-scene-05-send-summary-request.png`：主管送出高管摘要要求，訊息保留且流程推進至 3 / 4。
6. `figma-scene-06-alert-detail-focus.png`：聚焦中風險卡片，Agent 補充影響、控制缺口與改善建議。

## Prototype 連線

- 01 → 02：左側點擊「資料外洩 Agent」。
- 02 → 03：中央點擊「風險證據」。
- 03 → 04：右上點擊執行環境。
- 04 → 05：在對話輸入框送出主管指令。
- 05 → 06：右側點擊「外部分享連結未設定到期」。

建議互動使用 Smart Animate 180–220ms、Ease Out。若 hotspot 跨場景位置不完全一致，改用 Instant，避免產生不必要的位移動畫。

## 元件拆分建議

- Shell：Side Rail、Command Header、Mobile Workspace Nav
- Dashboard：Metric Card、Agent Card、Conversation Panel、Risk Intelligence
- Controls：Environment Toggle、Audit Action、Tab、Composer
- Evidence：Score Ring、Coverage Bar、Workflow Step、Finding Card

正式可編輯設計稿應把文字、色彩、間距、圓角與陰影抽成 Figma Variables，並以 Agent 狀態及風險層級建立 component variants。
