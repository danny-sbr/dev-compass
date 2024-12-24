# onScan.js

onScan.js 是一個與框架無關的 JavaScript 掃描事件處理工具，專門用於硬體條碼掃描器。

## 快速開始

1. 透過以下方式安裝：
   - `npm install onscan.js`
   - `bower install onscan-js`

2. 在你的程式碼中引入 `onscan.min.js`

3. 在頁面/視圖載入時加入以下初始化程式碼：

```javascript
// 為整個文件啟用掃描事件
onScan.attachTo(document);

// 註冊事件監聽器
document.addEventListener('scan', function(sScancode, iQuantity) {
    alert(iQuantity + 'x ' + sScancode); 
});
```

## 線上展示與測試

- [線上展示](未提供連結)
- 套件中也包含了展示頁面：只需在你的伺服器上載入 lib 資料夾中的 `index.html` 即可測試各種設定。

## 系統需求

- 硬體條碼掃描器，需符合以下其中一項：
  - 以鍵盤模式運作（通常稱為鍵盤介面模式）
  - 以剪貼簿模式貼上掃描的代碼
- 相對現代的瀏覽器（IE9+）

## 運作原理

onScan.js 透過測量輸入速度、檢查特定的前綴和後綴字元等方式，來區分一般輸入和掃描輸入。當偵測到掃描器時，它會在初始化時指定的 DOM 元素上觸發一個名為 `scan` 的自訂 JavaScript 事件。

此工具提供了許多選項來微調特定掃描器型號的偵測。

同時也提供了一些實用的額外功能（部分需要特定硬體支援）：
- 傳遞掃描計數器
- 為內建掃描器的硬體按鈕新增長按功能

## 程式碼範例

```javascript
// 使用選項進行初始化
onScan.attachTo(document, {
    suffixKeyCodes: [13], // 預期掃描結束時有 enter 鍵
    reactToPaste: true, // 相容於剪貼簿模式的內建掃描器
    onScan: function(sCode, iQty) { // 替代 document.addEventListener('scan')
        console.log('掃描結果：' + iQty + 'x ' + sCode); 
    },
    onKeyDetect: function(iKeyCode){ // 輸出所有可能相關的按鍵事件 - 適合除錯！
        console.log('按下按鍵：' + iKeyCode);
    }
});

// 程式模擬掃描 - 例如用於測試事件處理
onScan.simulate(document, '1234567890123');

// 模擬原始按鍵代碼
onScan.simulate(document, [48,49,50]);

// 模擬按鍵事件
onScan.simulate(document, [ {keyCode:80, key:'P', shiftKey:true}, {keyCode:49,key:'1'} ]);

// 即時更改選項
onScan.setOptions(document, {
    singleScanQty: 5 // 將每次掃描的數量更改為 5
});

// 完全移除 DOM 元素上的 onScan.js
onScan.detachFrom(document);
```

## 參考資源

GitHub 專案連結：https://github.com/axenox/onscan.js/


