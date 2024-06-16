var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/mdecycu/cmsimde_site 網站: https://mde.tw/cmsimde_site/ 簡報: https://mde.tw/cmsimde_site/reveal 網誌: https://mde.tw/cmsimde_site/blog","tags":"misc","url":"https://github.io/41223106/wcm2024/blog/pages/about/"},{"title":"WCM2024 W8課程內容","text":"wcm2024第八週課，從教育的本質看網際內容管理課程的內容要點","tags":"w8","url":"https://github.io/41223106/wcm2024/blog/2024-Spring-w8.-blog-tutorial.html"},{"title":"WCM2024 W3課程內容","text":"WCM2024第三週課程, 除了 Replit, Github Codespaces, Gitpod 之外, 還介紹如何利用可攜系統維護個人與分組網站 利用 Github Classroom 分組 本組作業名稱為5a,組長在取得作業連結之後,建立各組Team,本組共有6名組員,透過作業連結加入ag5 Team 完成ag5 Team 建立後, 將取得 mdewcm2024 帳號下的 1a-ag5 倉儲, 所有第五組的組員均對此分組倉儲有管理權, 可以使用登入 Github 的帳號權限進行改版 必須動態在 /home/runner/.ssh 下建立 id_rsa 與 config 連線設定, 各組組員才能利用 Replit 管理分組網站內容 利用 Github Codespaces 維護倉儲 使用 Replit 管理分組網站, 必須採動態建立 .ssh 目錄中的私鑰與 config, 過程比較複雜, 但若採用 Github Codespaces, 則可以在登入 Github 帳號下, 管理該帳號所有授權的倉儲, 包括分組倉儲與網站 常用的 git 指令 git 的新增、提交與推送指令: git add . git commit -m \"說明字串\" git push 使用 git add . 表示要認列所進行的全部改版內容, git commit -m 執行之前, 若在近端使用, 必須先行設定 git config, 將 home_ipv6 目錄下的 .gitconfig 中明確列出改版者的身分, 其中包括: git config --global user.name \"提交者的 github 帳號名稱\" git config --global user.email \"提交者在 github 所登錄的 email address\" 使用者也可以利用 git version 查詢目前所使用的 git 版本. git status 通常用來查核目前近端的改版狀況, 例如: 是否與遠端倉儲同步, 或者遠端倉儲已經有了新版本. 若遠端倉儲已經有新的版本, 則在 git push 之前, 必須設法取下遠端資料進行合併後, 才能再提交新的版本並推送到遠端. git pull = git fetch + git merge 由於要將各組員的 wcm2024 設定為各分組倉儲的子模組, 因此必須利用 git submodule add 以各組員的學號作為子目錄名稱, 利用下列指令, 將組員倉儲新增為分組倉儲的子模組: git submodule add 倉儲網址 子目錄 若只要取下倉儲的主要內容, 可以使用下列指令: git clone 倉儲網址_協定.git 指定目錄與否 若要取下帶有子模組的倉儲, 且可能該子模組還有設定其他子模組, 則必須要加上 --recurse-submodules: git clone --recurse-submodules 倉儲網址_協定.git 指定目錄與否 心得 W3的課程學習到關於建立分組網站的操作以及利用上次所講的Codespaces來做分組網站的維護，建造分組網站後，需學習如何讓每個人都有權限去做帳號及內容管理，還有在程式中關於git的各種不同涵義的指令，在日後的內容新增及上傳的作用非常大。","tags":"w3","url":"https://github.io/41223106/wcm2024/blog/2024-Spring-w3.-blog-tutorial.html"},{"title":"WCM2024 W2課程內容","text":"WCM2024第二週課程,利用 Github Codespaces 維護個人與分組網站. 確認已建立個人網站 1.登入 Github 2.利用此連結https://github.com/mdecycu/cmsimde_site \"Create a new repository\" 建立名稱為WCM2024的倉儲。 3.在倉儲WCM2024的設定頁面中，點選Pages 中的 Branch 分支區域, 選擇將 main 分支存為網頁的 root 根目錄。 4.等 wcm2024 的倉儲 Github Pages 轉檔完成後, 可以看到 commits 提交區的綠色勾勾, 就完成網址為 https://CYA41223106.github.io/wcm2024 的個人課程網站 利用Replit修改個人網站標題 在 Replit 檢視動態網站或網誌推送到 Github 之前的內容, 必須要在動態與靜態模式中擇一使用. 1.登入Replit 2.進入個人網頁後,log in,將cmsimde_site選取後點擊Config更改標題,名稱為wcm2024 CYA41223106 利用 Codespaces 維護網站 使用 Github Codespaces 維護網站的好處是提供多終端機與多 ports 開啟功能 能夠同時開啟靜態網站與動態網站 心得 W2的課程讓我學到很多新的東西以及複習舊知識 新:能夠再Github中使用Codespace直接將動態網站上編輯好的東西push到靜態網站上，使用Codespace能夠同時查看到動態與靜態的變化，使我更加方便。 舊:更改個人網站標題，在之前上學期的課程中有學習過","tags":"w2","url":"https://github.io/41223106/wcm2024/blog/2024-Spring-w2.-blog-tutorial.html"},{"title":"WCM2024 W6課程內容","text":"wcm2024第六週課，說明如何透過與 ChatGPT 的對話, 了解有關 git 在不同專業領域的應用方法 Git 歷史與希望解決的問題 問題:A1 請簡述一下 Git 的發展歷史, 以及當時的背景如何?A2 Git 想要解決甚麼問題? A1:Git 的發展歷史可以追溯到2005年，由Linux之父Linus Torvalds開始開發。當時的背景是開源軟體社群中版本控制系統的需求日益迫切。 背景: 在2005年之前，許多開源專案使用的主流版本控制系統是「BitKeeper」。然而，由於一些爭議和授權問題，Linux內核開發社群失去了對BitKeeper的免費使用權。這迫使Linux社群尋找一個新的、自由開源的版本控制系統來替代BitKeeper，這也促成了Git的誕生。 A2:Git 的解決問題： 1.分散式版本控制： Git 的主要目標是解決分散團隊協作的版本控制問題。傳統的中央化版本控制系統（如CVS和Subversion）需要依賴單一的中央伺服器來管理代碼版本，這對於全球分佈的開發團隊來說效率可能不高，而且伺服器單點故障也會影響所有人的工作。 2.速度和效能： Git 被設計成非常快速和高效。它使用了一些先進的技術，如對象存儲、分支管理和快照機制，使得大型項目的版本控制操作變得更加高效和可靠。 3.強大的分支支持： Git 提供了強大的分支管理功能，這使得開發者可以輕鬆地創建、合併和管理分支。這對於同時進行多個功能開發、修復問題和測試新想法的開發團隊來說至關重要。 4.本地化操作： Git 讓每個開發者都擁有完整的倉庫歷史記錄的副本，這意味著可以在離線狀態下進行操作。這樣的本地化操作使得開發者在不同地點、時間和網路環境下都能夠持續工作。 總的來說，Git 的誕生不僅是為了滿足Linux內核開發的具體需求，也因為它解決了當時許多開發團隊普遍面臨的版本控制問題，並且提供了更先進、更靈活和更高效的解決方案，這使得它迅速成為了全球開發者社群的首選版本控制系統。 Git 如何解決產品設計問題 Git 在產品設計領域的應用可以幫助解決多個問題，主要集中在版本控制、協作和追蹤變更等方面： 1.版本控制： 在產品設計中，通常涉及多個版本和修訂。Git 提供了強大的版本控制功能，可以跟蹤和管理設計文檔、原型、測試文檔等的各個版本。這使得設計師和工程師可以隨時回溯到先前的版本，查看和比較修改，從而更好地管理設計的進展和變更。 2.分支管理： 設計過程中常常需要同時進行多個功能性和版本間的開發。Git 的分支管理能力讓團隊可以同時進行多個獨立的工作流程，每個分支可以專注於不同的設計方向或功能，而不會互相干擾。這使得設計團隊可以更靈活地進行實驗、測試新功能和快速迭代。 3.協作和共享： Git 提供了有效的協作機制，團隊成員可以同時編輯和修改設計文檔，Git 能夠管理並合併這些修改，從而避免了不同版本之間的衝突和混亂。此外，Git 的分佈式特性使得每個團隊成員都能夠在本地操作和提交變更，而不依賴於單一的中央伺服器，這在多地點和跨地域的團隊合作中尤其重要。 4.追蹤和管理變更： Git 讓設計團隊能夠清楚地追蹤每個變更的來源和原因，每一個提交都可以 準確記錄誰做了什麼修改，這樣可以在需要時輕鬆回溯和解決問題。這種細緻的變更追蹤和管理有助於保持設計文檔的整潔和準確性，同時提升團隊的工作效率和協作品質。 總結來說，Git 在產品設計中的應用不僅使得版本控制更加靈活和高效，還能夠有效管理多人協作、追蹤變更，從而提升整個設計過程的效率和品質。 從 git init 到 git push 啟動近端可攜程式系統 更換目錄至 y:\\tmp 分別建立 gitproject\\repository 與 gitserver\\repository 目錄 利用以下指令, 設定之後的 git init 將採用 main 作為內定主分支 在 Y:\\tmp\\gitproject> git config --global init.defaultBranch main 進入 gitproject\\repository 目錄, 新增一個目錄名稱為 repo1, 進入 repo1 後執行 git init 進入 gitserver\\repository 目錄, 新增一個目錄名稱為 repo1, 進入 repo1 後執行 git init --bare 之後在 Y:\\tmp\\gitproject\\repo1 目錄操作, 建立新檔案 README.md: echo \"Hello, World!\" > README.md git add README.md git commit -m \"Initial commit\" git remote add origin y:\\tmp\\gitserver\\repository\\repo1 git push -u origin main 如此, 就可以將 Y:\\tmp\\gitproject\\repo1 中的倉儲內容送到 Y:\\tmp\\gitserver\\repository\\repo1 目錄中. 之後請在 C:\\tmp\\repository> 執行 git clone Y:\\tmp\\gitserver\\repository\\repo1, 由於沒有特別指令倉儲 clone 後的目錄名稱, 因此 git 會將 Y:\\tmp\\gitserver\\repository\\repo1 倉儲內容複製一份放入 C:\\tmp\\repository\\repo1 目錄中. 表示目前 Y:\\tmp\\gitserver\\repository\\repo1 伺服器中的 repo1, 已經分別存入 Y:\\tmp\\gitproject\\repo1 與 C:\\tmp\\repository\\repo1 目錄中, 使用者可以分別在這兩個倉儲中進行改版後, 在各自的倉儲資料中進行提交, 隨後再設法將改版內容 push 到 Y:\\tmp\\gitserver\\repository\\repo1 中進行合併. 最後, 若要讓使用者跨網路存取 Windows 操作系統上的倉儲, 可以根據這裡的說明, 啟動伺服器: git daemon --reuseaddr --base-path=. --export-all --verbose 然後利用 C:\\tmp\\repository>git clone git://localhost/repo1 repo002 取下倉儲內容, 其中的 localhost 可以使用外部 IP 或對應的網路符號名稱. 若要在 Windows 環境打造一個類似 Github 的網際環境, 可以採用 https://github.com/gogs/gogs, 其中包括網際資料庫 PostgreSQL 伺服器或 SQLite 的應用","tags":"w6","url":"https://github.io/41223106/wcm2024/blog/2024-Spring-w6.-blog-tutorial.html"},{"title":"WCM2024 W5課程內容","text":"wcm2024第五週課網路詢答整理(對 ChatGPT 提問) 精密機械專業的實習，可能需要準備以下資料和文件： 1.履歷（Resume/CV）： 確保履歷中包含你的基本資料、教育背景、技能、實習或工作經驗（如果有的話）、專業興趣和獎項等相關資訊。 2.求職信（Cover Letter）： 一封針對該實習職位的求職信，介紹你的動機、適合該職位的理由、相關技能和專業背景。 3.學歷證明文件： 包括最近的學校成績單、畢業證書或在讀證明（如果還在學）等文件。 4.作品集（Portfolio）： 如果你有相關的作品，例如設計圖、技術報告、研究論文或專案成果，可以製作一個作品集以展示你的能力和成就。 6.證書和執照： 如果有相關的證書或執照（例如安全執照），也準備好副本以備查詢。 這些文件和資料的準備可以幫助你在申請過程中展示你的專業素養、技能和對該實習機會的熱忱，提升你成功獲得實習機會的機會。 以目前台灣的產業情況而言, 比較有永續的精密機械產業有哪些? 目前台灣的產業情況下，有幾個精密機械產業特別注重永續發展： 半導體製造設備： 台灣在半導體製造設備領域有著相當強大的地位，尤其在製程設備和檢測設備方面。這些設備需要高精度和高效能，以支持半導體產業的技術進步和製造效率提升，因此具有長期的永續性需求。 精密工具機： 台灣的精密工具機產業在全球市場上佔有一席之地，不僅應用於製造業中，還廣泛用於半導體、光學、航太等高科技產業。隨著全球對高精度、高效能機械設備的需求增加，這個產業的永續性也相對較高。 光學及精密元件製造： 台灣在光學元件及精密元件製造方面有相當成熟的產業鏈，包括鏡頭、光學檢測設備、精密機械零件等。這些產品不僅應用於半導體設備、醫療設備，還涉及到科學研究和航太等領域，因此具有長遠的發展潛力。 綠能製造設備： 台灣的綠能產業，特別是太陽能和風能的相關設備製造，也是一個具有永續發展潛力的領域。這些設備的製造和檢測需要高精度的精密機械技術支持，並且隨著全球對可再生能源需求的增加，相應的市場需求也會持續擴大。 這些精密機械產業不僅在技術層面具有挑戰性和高要求，而且在全球市場上有穩定的需求，因此對於台灣的產業而言，這些領域都是長期發展和永續性的重要支柱。 現代年輕人, 應該如何學習運用電腦與網路? 現代年輕人學習運用電腦與網路是非常重要的，這些技能不僅能提高生活和工作效率，還能開拓更多的學習和職業機會。以下是幾個建議： 基礎操作技能： 從基礎開始，學習如何操作電腦和各種常用軟體，例如操作系統（Windows、macOS）、文字處理軟體（Microsoft Word、Google Docs）、試算表軟體（Microsoft Excel、Google Sheets）等。這些技能是日常生活和工作中必不可少的。 網路安全意識： 學習如何保護個人資料和隱私，理解常見的網路詐騙手法，如何建立強固的密碼，以及如何使用防病毒軟體和防火牆來保護電腦安全。 網路資源利用： 學習如何有效地使用網路資源來查找資訊、學習新知識、觀看教育視頻、參與線上課程等。網路提供了無限的學習機會，懂得如何有效利用這些資源對個人成長非常有幫助。 程式設計和數位技能： 如果有興趣，可以學習一些基本的程式設計語言（例如Python、JavaScript），這對於理解電腦運作的原理和解決問題能力非常有幫助。此外，理解數位媒體創作、網頁設計等技能也是很有用的。 線上協作與溝通： 學習如何在線上協作和溝通，包括使用電子郵件、即時通訊工具（如Slack、Microsoft Teams、Zoom）、社交媒體等，這對於現代職場和學習環境中的團隊合作至關重要。 持續學習和更新技能： 電腦和網路技術不斷進步，因此要有持續學習的意識，隨時更新自己的技能和知識。可以通過參加線上課程、觀看教學視頻、閱讀科技博客等方式來保持競爭力。 總之，學習運用電腦與網路是一個持續進步的過程，不僅能增強個人的實用能力，還能打開更多的學習和職業機會，為未來的發展奠定良好的基礎。 以目前 AI 的發展趨勢來看, 會對學校教育有哪些重大影響? 隨著人工智慧（AI）的發展，對學校教育的影響將逐步顯現出來，主要的影響包括以下幾個方面： 1.個性化學習： AI 技術可以根據學生的學習表現、興趣和學習風格，提供個性化的學習內容和進度安排。這樣的個性化學習系統能夠更有效地滿足不同學生的需求，提高學習效果。 2.智能化教學輔助工具： 學校可以利用AI開發智能教學輔助工具，如智能數學解題系統、語言學習應用程式、自動化評估和反饋系統等，這些工具能夠幫助教師更好地設計教學活動，並提供即時的學習支持。 教學資源的個性化推薦： 3.AI 可以根據學生的學習情況和興趣，推薦適合的教學資源，包括電子書、教學影片、線上課程等。這樣能夠幫助學生更有效率地進行自主學習。 自動化評估和反饋： 4.AI 可以用於自動化評估學生的學習成果，從而提供即時的反饋和建議。這不僅能幫助教師更快速地了解學生的學習進度，還能夠讓學生及早發現和解決問題。 5.教育管理和預測分析： AI 技術可以分析大量的教育數據，提供教育管理者更精確的學校運營分析和預測。這些分析可以用於改進教學質量、學校管理和資源配置。 6.跨文化和跨語言學習： AI 技術有助於打破語言和文化障礙，提供多語言教學支持和跨文化交流機會，這對於全球化教育的發展至關重要。 總的來說，AI 的發展將使得教育更加靈活、個性化和高效。然而，同時也需要注意平衡技術應用與人文關懷，確保教育仍然能夠培養學生的創造力、批判思維和人際互動能力，這些都是AI無法完全取代的重要素養。 心得 透過Chat Gpt的回答才得以讓我了解這些，他回答的內容很多，但我必須透過自己篩選及判斷拿取對我來說有用的訊息，現代社會很多都是靠AI來做學習，這對我們來說不是一件壞事，但我們也必須有能夠判斷的能力，不能夠凡事都相信AI，否則自己會迷失方向。","tags":"w5","url":"https://github.io/41223106/wcm2024/blog/2024-Spring-w5.-blog-tutorial.html"},{"title":"WCM2024 W1課程內容","text":"wcm2024第一週課程,登入 MS Online, 建立個人 Github 帳號, 以及利用 cmsimde_site 作為 Template 建立個人課程網站. 登入 MS Online 上課時登入 MS Online, 目的是能在 MS Teams 中上課, 一邊觀看教學示範, 一邊自行操作. Github 帳號 自行建立 Github 帳號,用來建立並維護個人的課程倉儲與網站. 課後心得 第一堂的內容對我們來說不算太複雜，因為上學期剛上過，就當老師幫我們複習，當再一次聽課時就顯得相較簡單了，包刮Github及Replit的基本操作，以及創建網站。","tags":"w1","url":"https://github.io/41223106/wcm2024/blog/2024-Spring-w1.-blog-tutorial.html"},{"title":"WCM2024 W4課程內容","text":"wcm2024第四週課程,複習前三週的課程內容, 並且介紹 git 與 cmsimde 的相關用法 Replit 靜態網站檢視 main2.py 與 static.py, 只要在 Shell 執行 python3 main2.py 就可以執行倉儲內的靜態網站檢視. 另一方面, 若要取消先前執行 python3 main2.py, 只需要在 Shell 頁面按下 ctrl + c, c 代表 cancle 也就是取消,然後若要執行動態網站，可以在 Shell 執行 python3 main.py 或者使用 Replit 的 Run 按鍵. Replit 建立分組倉儲權限 由於 Replit 上的免費帳號僅允許與一個 Github 帳號對應, 因此若將分組網站 import 到 Replit, 必須自行在 /home/runner/.ssh 目錄下建立 id_rsa 與 config 而 Host 的設定與 Windows putty 中的 session 名稱相同, 配合使用的 ssh 連線指令將會是: git clone --recurse-submodules git@github.com:mdewcm2024/ag5.git 當使用者完成 /home/runner/.ssh 目錄中的 id_rsa 與 config 建立後,使用者必須將此兩個檔案存至隨身碟, 並在需要對分組倉儲改版時, 啟動分組倉儲的動態網站, 將隨身碟中的 id_rsa 與 config 檔案, upload 到分組倉儲的 downloads 目錄後, 再利用 ssh.py 的執行, 將 id_rsa 與 config 移動到 /home/runner/.ssh 目錄中. 也就是執行:python3 ssh.py Replit, Codespaces 與 Gitpod 執行動態與靜態網站 說明如何在 Replit, Codespaces 與 Gitpod 維護並檢視網頁內容 課後心得 這週w5的學習內容開始變多，但很多東西都是前一堂課老師有先幫我們預習下一次要講的內容，所以才不會那麼吃力，操作內容也慢慢變多，希望下次我能跟得上，透過分組網站，讓我和我的同學一起思考，解決方法，感覺真好。","tags":"w4","url":"https://github.io/41223106/wcm2024/blog/2024-Spring-w4.-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w1","url":"https://github.io/41223106/wcm2024/blog/2024-Spring-w1-blog-tutorial.html"}]};