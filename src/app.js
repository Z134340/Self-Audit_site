const agents = [
  {
    id: "pr", initials: "PR", name: "採購風險 Agent", status: "執行中", tone: "active",
    desc: "供應商集中、異常採購、合約缺口", score: 76, coverage: 91, evidence: [41, 45],
    high: 3, medium: 7, session: "SID-PR-0821", maturityTitle: "採購風險",
    maturityCopy: "已具備基礎管控，仍需強化高風險例外與補核流程。",
    lead: "請啟動本季採購風險自查，聚焦異常採購、供應商集中與未核准合約。",
    messages: [
      { role: "agent", text: "已建立唯讀查核工作階段，正同步採購申請、核准紀錄、供應商主檔與合約狀態。" },
      { role: "agent", text: "初步發現 3 件高風險與 7 件中風險例外，主要集中於事後補核及合約到期後請款。" }
    ],
    steps: [
      ["界定查核範圍", "採購案件、合約與供應商主檔"],
      ["取得佐證", "核准紀錄、請款資料與異動軌跡"],
      ["比對控制要求", "集中度、例外核准與合約效期"],
      ["形成管理結論", "風險熱點、責任歸屬與改善期限"]
    ],
    progress: 2,
    alerts: [
      { title: "合約到期後仍持續請款", copy: "2 件請款發生於合約到期後，需確認付款控制與補正責任。", level: "high", meta: "3 小時前 · 採購管理處" },
      { title: "單一供應商集中度偏高", copy: "特定採購類別集中度達 68%，高於內部預警門檻。", level: "medium", meta: "5 小時前 · 供應商管理" }
    ]
  },
  {
    id: "dl", initials: "DL", name: "資料外洩 Agent", status: "監控中", tone: "active",
    desc: "DLP 告警、外寄、下載與雲端分享", score: 82, coverage: 94, evidence: [47, 50],
    high: 2, medium: 5, session: "SID-DL-0821", maturityTitle: "資料外洩偵測",
    maturityCopy: "告警分類完整，需補強跨通路關聯分析與例外核准追蹤。",
    lead: "請檢查本週敏感資料外寄與雲端分享，優先處理未核准對外流向。",
    messages: [
      { role: "agent", text: "正在關聯 DLP 告警、外寄附件、下載紀錄與雲端分享權限。" },
      { role: "agent", text: "偵測到 2 筆高敏感資料外寄至未登錄網域，另有 5 筆雲端連結未設定到期日。" }
    ],
    steps: [
      ["界定監控範圍", "DLP、郵件、下載與雲端分享事件"],
      ["關聯資料流向", "附件指紋、收件網域與分享權限"],
      ["比對外洩規則", "敏感分級、例外核准與有效期限"],
      ["形成處置建議", "阻擋、撤權、通報與證據保存"]
    ],
    progress: 2,
    alerts: [
      { title: "高敏感附件寄往未登錄網域", copy: "附件含客戶識別資料，尚未找到有效的業務例外核准。", level: "high", meta: "48 分鐘前 · DLP-2841" },
      { title: "外部分享連結未設定到期", copy: "5 筆雲端連結持續有效，建議批次套用到期與浮水印。", level: "medium", meta: "2 小時前 · Cloud-Share" }
    ]
  },
  {
    id: "hr", initials: "HR", name: "人員管理 Agent", status: "待覆核", tone: "review",
    desc: "職務異動、離職交接與必要訓練", score: 69, coverage: 86, evidence: [31, 36],
    high: 4, medium: 2, session: "SID-HR-0821", maturityTitle: "人員控制",
    maturityCopy: "離職流程可追蹤，但職務異動與權限收回仍存在時間落差。",
    lead: "請查核近期職務異動、離職交接與必要訓練完成狀態。",
    messages: [
      { role: "agent", text: "已完成 HR 異動、訓練平台、權限申請及交接簽核紀錄的初步關聯。" },
      { role: "agent", text: "4 位同仁職務異動後權限未同步調整，2 筆離職交接附件缺少主管覆核。" }
    ],
    steps: [
      ["取得人員異動", "到離職、調任、留停與代理紀錄"],
      ["關聯權限與訓練", "IAM、訓練平台與交接簽核"],
      ["檢查時序缺口", "異動日、收權日與覆核完成日"],
      ["派送改善任務", "責任主管、期限與追蹤證據"]
    ],
    progress: 3,
    alerts: [
      { title: "職務異動後敏感權限未收回", copy: "4 位同仁異動超過 7 日仍保留原職務敏感權限。", level: "high", meta: "1 小時前 · IAM 關聯" },
      { title: "主管必要訓練未完成", copy: "2 位新任主管尚未完成法遵必要訓練。", level: "medium", meta: "昨日 · LMS" }
    ]
  },
  {
    id: "ac", initials: "AC", name: "權限風險 Agent", status: "優先處理", tone: "danger",
    desc: "高權限、共用帳號與逾期臨時授權", score: 64, coverage: 88, evidence: [44, 50],
    high: 5, medium: 1, session: "SID-AC-0821", maturityTitle: "權限治理",
    maturityCopy: "高權限清冊完整，共用帳號與臨時授權退場控制仍需改善。",
    lead: "請優先查核高權限帳號、共用帳號與逾期臨時授權。",
    messages: [
      { role: "agent", text: "已開始比對 IAM、AD 群組、例外申請及授權到期日。" },
      { role: "agent", text: "發現 5 筆臨時授權逾期，另有 1 個共用帳號仍可存取敏感系統。" }
    ],
    steps: [
      ["盤點敏感權限", "高權限、共用帳號與臨時授權"],
      ["核對授權依據", "申請單、核准人、期限與使用人"],
      ["偵測權限異常", "逾期、孤兒帳號與職務不相容"],
      ["形成收斂清單", "停權、複核與具名化改善任務"]
    ],
    progress: 2,
    alerts: [
      { title: "逾期臨時授權仍可操作核心系統", copy: "5 筆到期權限尚未停用，其中 2 筆具交易功能。", level: "high", meta: "23 分鐘前 · IAM" },
      { title: "共用帳號責任歸屬不足", copy: "共用帳號缺少個人使用軌跡，建議轉為具名授權。", level: "medium", meta: "3 小時前 · AD" }
    ]
  },
  {
    id: "gv", initials: "GV", name: "治理合規 Agent", status: "已完成", tone: "complete",
    desc: "制度遵循、例外核准與改善期限", score: 88, coverage: 96, evidence: [48, 50],
    high: 2, medium: 0, session: "SID-GV-0821", maturityTitle: "治理合規",
    maturityCopy: "制度與追蹤機制完整，建議強化跨單位改善責任歸屬。",
    lead: "請彙整本季治理合規查核狀態與逾期改善追蹤。",
    messages: [
      { role: "agent", text: "已串接制度條文、例外核准、改善單與主管覆核證據。" },
      { role: "agent", text: "本季 12 項查核有 10 項準時完成；2 項改善逾期且責任單位待重新確認。" }
    ],
    steps: [
      ["彙整制度要求", "制度條文、控制要求與適用單位"],
      ["核對遵循證據", "例外核准、改善單與主管覆核"],
      ["追蹤改善期限", "到期日、責任人與跨單位相依"],
      ["完成治理呈報", "高管摘要與逾期改善追蹤"]
    ],
    progress: 4,
    alerts: [
      { title: "跨單位改善責任尚未明確", copy: "2 項逾期改善缺少單一問責人，影響後續追蹤。", level: "high", meta: "昨日 · 治理辦公室" },
      { title: "例外核准證據已完成索引", copy: "本季 18 筆例外核准皆已建立可追溯證據連結。", level: "info", meta: "已完成 · Evidence Hub" }
    ]
  }
];

const tabs = ["即時查核", "風險證據", "改善追蹤", "高管摘要"];
let currentAgent = agents[0];
let activeTab = tabs[0];
let selectedAlert = 0;
let selectedStep = 2;
let readonly = true;

const elements = {
  agents: document.getElementById("agents"),
  tabs: document.getElementById("tabs"),
  dialogue: document.getElementById("dialogue"),
  steps: document.getElementById("steps"),
  alerts: document.getElementById("alerts"),
  score: document.getElementById("score"),
  maturityTitle: document.getElementById("maturity-title"),
  maturityCopy: document.getElementById("maturity-copy"),
  environment: document.getElementById("environment"),
  prompt: document.getElementById("prompt"),
  toast: document.getElementById("toast")
};

function renderAgents() {
  elements.agents.replaceChildren();
  agents.forEach((agent) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `agent-card ${agent.id === currentAgent.id ? "active" : ""}`;
    button.setAttribute("aria-pressed", String(agent.id === currentAgent.id));
    button.innerHTML = `
      <span class="agent-avatar">${agent.initials}<i class="agent-presence ${agent.tone}"></i></span>
      <span class="agent-card-copy"><strong>${agent.name}</strong><small>${agent.desc}</small></span>
      <span class="agent-status ${agent.tone}">${agent.status}</span>
      <span class="agent-score"><b>${agent.score}</b><small>成熟度</small></span>
    `;
    button.addEventListener("click", () => {
      currentAgent = agent;
      selectedAlert = 0;
      selectedStep = Math.min(agent.progress, agent.steps.length - 1);
      render();
    });
    elements.agents.appendChild(button);
  });
}

function renderTabs() {
  elements.tabs.replaceChildren();
  tabs.forEach((tab) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = tab === activeTab ? "active" : "";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(tab === activeTab));
    button.textContent = tab;
    button.addEventListener("click", () => {
      if (activeTab === tab) return;
      activeTab = tab;
      currentAgent.messages.push({ role: "agent", text: `已切換至「${tab}」視角，相關證據與管理摘要已重新編排。` });
      renderTabs();
      renderDialogue();
    });
    elements.tabs.appendChild(button);
  });
}

function createBubble(message) {
  const bubble = document.createElement("article");
  bubble.className = `bubble ${message.role}`;
  const meta = document.createElement("div");
  meta.className = "bubble-meta";
  const speaker = document.createElement("strong");
  speaker.textContent = message.role === "user" ? "主管" : currentAgent.name;
  const time = document.createElement("span");
  time.textContent = "剛剛";
  const copy = document.createElement("p");
  copy.textContent = message.text;
  meta.append(speaker, time);
  bubble.append(meta, copy);
  return bubble;
}

function renderDialogue() {
  elements.dialogue.replaceChildren();
  elements.dialogue.appendChild(createBubble({ role: "user", text: currentAgent.lead }));
  currentAgent.messages.forEach((message) => elements.dialogue.appendChild(createBubble(message)));
  requestAnimationFrame(() => { elements.dialogue.scrollTop = elements.dialogue.scrollHeight; });
}

function renderSummary() {
  document.getElementById("metric-coverage").textContent = currentAgent.coverage;
  document.getElementById("metric-coverage-bar").style.width = `${currentAgent.coverage}%`;
  document.getElementById("metric-findings").textContent = currentAgent.high + currentAgent.medium;
  document.getElementById("metric-risk-label").textContent = `${currentAgent.high} 高風險`;
  document.getElementById("metric-maturity").textContent = currentAgent.score;
}

function renderOutput() {
  elements.score.style.setProperty("--score", currentAgent.score);
  elements.score.querySelector("span").textContent = currentAgent.score;
  elements.maturityTitle.textContent = currentAgent.maturityTitle;
  elements.maturityCopy.textContent = currentAgent.maturityCopy;
  document.getElementById("coverage-value").textContent = `${currentAgent.coverage}%`;
  document.getElementById("coverage-bar").style.width = `${currentAgent.coverage}%`;
  document.getElementById("coverage-copy").textContent = `已取得 ${currentAgent.evidence[0]} / ${currentAgent.evidence[1]} 項必要證據`;
  document.getElementById("workflow-progress").textContent = `${currentAgent.progress} / ${currentAgent.steps.length} 完成`;
  document.getElementById("finding-count").textContent = `${currentAgent.alerts.length} FINDINGS`;

  elements.steps.replaceChildren();
  currentAgent.steps.forEach(([title, copy], index) => {
    const isDone = index < currentAgent.progress;
    const isRunning = index === currentAgent.progress && currentAgent.progress < currentAgent.steps.length;
    const state = isDone ? "done" : isRunning ? "running" : "queued";
    const button = document.createElement("button");
    button.type = "button";
    button.className = `step ${state} ${index === selectedStep ? "selected" : ""}`;
    button.setAttribute("aria-pressed", String(index === selectedStep));
    button.innerHTML = `
      <span class="step-marker">${isDone ? "✓" : String(index + 1).padStart(2, "0")}</span>
      <span class="step-copy"><strong>${title}</strong><small>${copy}</small></span>
      <span class="step-state">${isDone ? "完成" : isRunning ? "執行中" : "待命"}</span>
    `;
    button.addEventListener("click", () => {
      selectedStep = index;
      renderOutput();
      showToast(`已聚焦：${title}`);
    });
    elements.steps.appendChild(button);
  });

  elements.alerts.replaceChildren();
  currentAgent.alerts.forEach((alert, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `finding-card ${alert.level} ${index === selectedAlert ? "selected" : ""}`;
    button.setAttribute("aria-pressed", String(index === selectedAlert));
    button.innerHTML = `
      <span class="finding-severity">${alert.level === "high" ? "高風險" : alert.level === "medium" ? "中風險" : "資訊"}</span>
      <strong>${alert.title}</strong><p>${alert.copy}</p><small>${alert.meta}</small>
    `;
    button.addEventListener("click", () => {
      selectedAlert = index;
      currentAgent.messages.push({ role: "agent", text: `已展開「${alert.title}」。建議先確認影響範圍、控制缺口與責任單位，再建立改善期限。` });
      renderOutput();
      renderDialogue();
    });
    elements.alerts.appendChild(button);
  });
}

function renderIdentity() {
  document.getElementById("active-agent-initials").textContent = currentAgent.initials;
  document.getElementById("active-agent-name").textContent = currentAgent.name;
  document.getElementById("session-id").textContent = currentAgent.session;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => elements.toast.classList.remove("visible"), 1800);
}

document.getElementById("composer").addEventListener("submit", (event) => {
  event.preventDefault();
  const value = elements.prompt.value.trim();
  if (!value) return;
  currentAgent.messages.push({ role: "user", text: value });
  if (currentAgent.progress < currentAgent.steps.length) currentAgent.progress += 1;
  selectedStep = Math.min(currentAgent.progress, currentAgent.steps.length - 1);
  currentAgent.messages.push({ role: "agent", text: `收到。我會依「${activeTab}」視角整理：主要風險、立即處置、責任歸屬與後續追蹤。` });
  elements.prompt.value = "";
  renderDialogue();
  renderOutput();
  showToast("查核指令已送出並保留於工作階段");
});

elements.environment.addEventListener("click", () => {
  readonly = !readonly;
  elements.environment.classList.toggle("draft", !readonly);
  elements.environment.setAttribute("aria-pressed", String(readonly));
  elements.environment.querySelector("strong").textContent = readonly ? "展示環境 · 唯讀" : "模擬環境 · 草稿";
  currentAgent.messages.push({ role: "agent", text: readonly ? "已切回唯讀模式，僅讀取證據並形成建議。" : "已切換至模擬草稿模式，改善建議只會保存在本機工作階段。" });
  renderDialogue();
  showToast(readonly ? "已切換為唯讀查核" : "已切換為模擬草稿");
});

document.getElementById("start-audit").addEventListener("click", () => {
  currentAgent.progress = 1;
  selectedStep = 1;
  currentAgent.messages.push({ role: "agent", text: "新的唯讀查核工作階段已啟動，正在重新取得最新證據索引。" });
  renderDialogue();
  renderOutput();
  showToast(`${currentAgent.name} 已啟動查核`);
});

document.querySelectorAll(".mobile-workspace-nav button").forEach((button) => {
  button.addEventListener("click", () => {
    const view = button.dataset.view;
    document.body.dataset.mobileView = view;
    document.querySelectorAll(".mobile-workspace-nav button").forEach((item) => {
      const active = item.dataset.view === view;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  });
});

function render() {
  renderAgents();
  renderTabs();
  renderDialogue();
  renderSummary();
  renderOutput();
  renderIdentity();
}

document.body.dataset.mobileView = "chat";
render();
