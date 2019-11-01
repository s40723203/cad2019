var tipuesearch = {"pages": [{'title': 'week', 'text': '', 'tags': '', 'url': 'week.html'}, {'title': 'week2-5', 'text': 'week2 \n 1.下載2019Fall可攜套件.7z並解壓縮 \n 2.建立個人的cad2019倉儲和網站 \n 3.影片網址:\xa0 https://youtu.be/FY6wF9zFf1g \n \n \n week3 \n solvespace編譯 \n 1.先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n 2.查驗 git 版本為git 2.13 版本以上, 可以使用下列 git clone\xa0 --recurse-submodules 取得所有子模組資料 \n 3.將713、714行的開頭加上# \n 4.手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中 \n 5.回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行 \n 6.影片網址:  https://youtu.be/yQTFYy3cLI0 \n \n \n week4 \n 完成前3週的進度並上傳完成 \n week5 \n 1.利用 Solvespace 繪製零組件，錄製影片並講解繪圖過程 \n 2.影片網址:  https://youtu.be/KC2Xj1ussfo \n \n', 'tags': '', 'url': 'week2-5.html'}, {'title': 'week6-9', 'text': 'week6 \n 1.利用 Solvespace 繪製雙輪車並組裝，錄製繪圖過程並講解後上字幕，傳至YOUTUBE \n \xa0 \xa0 *標題為: 機械設計工程系-電腦輔助設計實習 W6 任務一參數化零組件繪製 \n 影片網址:  https://youtu.be/LG42yt45jJw \n \n 2.利用 V-rep 3.6.1 rev4 與隨身程式執行系統, 完成網際 V-rep 模型控制 \n \xa0 \xa0 *標題為: 機械設計工程系-電腦輔助設計實習 W6 任務一網際 V-rep 模型控制 \n 影片網址:\xa0 https://youtu.be/RpGeZjzcwPk \n \n 3.新增兩個按鈕, 可以啟動或停止連線的 V-rep 模擬 \n \xa0 \xa0 *標題為: 機械設計工程系-電腦輔助設計實習 W6 任務一新增啟動與停止按鈕 \n 影片網址:  https://youtu.be/chIQEruwN4E \n \n week7 \n 1.在Solvespace的 Help->About 中, 編譯成 "This Solvespace is compiled by 學號" \n \xa0 \xa0 影片網址:\xa0 https://youtu.be/OUkvSXTmYSE \n \n 後半段影片: https://youtu.be/DnkpkX6UMDs \n \n 2.從零件網頁中選擇並 利用Solvespace繪出 \n \xa0 \xa0影片網址:\xa0 https://youtu.be/JJyDbIbfgv8 \n \n', 'tags': '', 'url': 'week6-9.html'}, {'title': 'week10-14', 'text': 'week10-11 \n', 'tags': '', 'url': 'week10-14.html'}, {'title': 'week15-18', 'text': '', 'tags': '', 'url': 'week15-18.html'}, {'title': 'note', 'text': '', 'tags': '', 'url': 'note.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};