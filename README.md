# ODesignView - AI 網頁樣板庫 (AI Web Template Gallery)

歡迎來到 **ODesignView**！這是一個專為全職網頁設計師、前端工程師以及 AI 輔助開發者設計的**響應式網頁樣板庫**。

本專案收錄了 **100 套**針對不同產業（涵蓋餐飲、醫美、教育、零售、科技、娛樂等）的精美網站樣板，每套樣板均包含完整的 12 個網頁頁面與客製化的繁體中文（zh-Hant-TW）文案，並提供用於引導 AI 生成同等水準網站的極致調校提示詞。

使用模型為 : Gemini 3.1 pro + Gemini 3.5 Flash

---

## 🌟 核心特色

1. **豐富的行業覆蓋**：精選 100 個不同的商用與個人產業，為每個產業手工編寫專屬的真實品牌故事、服務內容、客戶評價與常見問題 (FAQ) 的繁體中文文案，告別千篇一律的模板字眼。
2. **12 頁完整 RWD 架構**：每套樣板均包含 12 個網頁（`index.html` 首頁、`about.html` 關於我們、`services.html` 服務項目、`service-detail.html` 服務詳情、`portfolio.html` 精選作品、`reviews.html` 客戶好評、`faq.html` 常見問題、`booking.html` 線上預約、`process.html` 服務流程、`blog.html` 最新消息、`blog-detail.html` 文章詳情、`contact.html` 聯絡我們），完全支援響應式（RWD）佈局。
3. **組合式版型系統 (Combinatorial Layout)**：融合大圖沉浸式、左右分割、雜誌風、瀑布流、Bento Grid 網格等多種現代 UI 設計風格，搭配細緻的 HSL 調色系統與卡片邊框、陰影微動畫。
4. **AI 大師級提示詞 (Master Prompt)**：每套樣板目錄下均附帶一個 `prompt.md`。複製該提示詞並輸入至第三方大語言模型（如 Claude 3.5 Sonnet、GPT-4o 或 Gemini 1.5 Pro），即可引導 AI 精準生成同等高水準的 12 頁完全響應式網站。
5. **完美的本地瀏覽體驗**：樣板清單與資料已直接嵌入至前端程式碼中，完美支援雙擊本地 `file:///` 協定直接瀏覽，無須配置本地伺服器，且不受瀏覽器 CORS 跨域安全性限制。

---

## 📂 目錄結構

```text
ODesignView/
├── README.md                          # 本專案說明文件
└── fullsite-template-gallery/         # 網頁樣板藝廊主程式
    ├── index.html                     # 樣板展示藝廊首頁（點擊即可在瀏覽器瀏覽 100 套樣板）
    ├── template-detail.html           # 樣板詳細說明頁
    ├── assets/                        # 平台靜態資源（CSS、JS、字體與 previews 截圖）
    │   ├── js/
    │   │   └── gallery.js             # 藝廊篩選器邏輯（已內嵌 100 套樣板資料庫）
    │   └── img/
    │       └── previews/              # 100 套樣板的 1440x960 高品質預覽縮圖
    ├── data/
    │   └── templates.json             # 樣板註冊中繼資料庫
    └── templates/                     # 100 套精美網頁樣板存放目錄
        ├── template-001-beauty-studio/
        │   ├── index.html             # 該樣板首頁
        │   ├── about.html             # 該樣板關於我們
        │   ├── ...
        │   ├── prompt.md              # 該樣板的 AI 網頁生成大師提示詞 (Master Prompt)
        │   └── assets/css/style.css   # 該樣板的專屬 CSS 樣式表
        ├── ...
        └── template-100-crypto-exchange/
```

---

## 🚀 快速開始

### 1. 瀏覽樣板藝廊
1. 將本專案下載或複製至本地。
2. 進入 `fullsite-template-gallery/` 目錄。
3. 雙擊開啟 [index.html](file:///D:/AI_PROJECTS/ODesignView/fullsite-template-gallery/index.html)。
4. 您可以使用左側側邊欄，依**產業類型**、**色彩色調**、**版型結構**或**功能模組**篩選並尋找您喜愛的樣板。

### 2. 使用 AI 提示詞生成專屬網站
1. 在藝廊中點擊您喜愛樣板的 **Prompt** 按鈕，或直接進入該樣板目錄下（例如 `templates/template-051-personal-speaker/`）開啟 `prompt.md`。
2. 複製該檔案內 **## 系統指令與生成提示詞** 以下的全部內容。
3. 貼入至先進的 AI 聊天模型（如 Claude 3.5 Sonnet）中，即可請 AI 為您生成專屬的高品質靜態網站！

---

## 🛠️ 開發與維護工具 (Scratch Tools)
本專案的樣板與資料由一組高度自動化的 Node.js 工具所生成與維護：
* `generate_v8.js`：組合式頁面渲染引擎，結合 `page_factory_v8.js` 快速生成 1,200 個 HTML/CSS。
* `verify_generation_v8.js`：自動化結構合規性檢測工具，確保 100 套樣板無任何檔案遺漏或結構損壞。
* `generate_prompts_v8.js`：校正並自動輸出 100 個 `prompt.md` 檔案。
* `capture_puppeteer.js`：基於 Puppeteer 的自動化截圖工具，以 1440x960 規格擷取完全渲染的預覽縮圖。
* `embed_gallery_data.js`：樣板資料內嵌編譯器，解決本地 `file:///` 協定下的 CORS 安全限制。
