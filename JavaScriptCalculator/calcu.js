/*
功能:
    限制數字才能輸入
    不允許: 多次輸入
    清除結構
*/

/*
TODO:
    Limit number input
    Disallow . from being entered multiple times
    Clean up structure
*/
( function() {
    
    "use strict";
    // 用捷徑取得元素
    var el =function(element) {
        if (element.charAt(0) === "#") { // if passed an ID... 如果傳送 這個 ID
            return document.querySelector(element); // ... returns single element
            // 返回單一元素
            }
        
        return document.querySelectorAll(element); // otherwise, returns a nodelosist
        // 反之 返回節點表
        
        // Variables
        // 變數宣告
    }
        var viewer = el("#viewer"), // Calculator screen where result is displayer
            // 顯示結果在螢幕上
            equals = el("#equals"), // Equal buttom
            //等號按鈕
            nums = el(".num"), // List of number
            // 數字的列表
            ops = el(".ops"), //List of operators
            // 運算子列表
            theNum = "", // Current number
            // 當前數字
            oldNum = "", // First number
            // 第一數字
            resultNum, // Result
            // 結果
            
            operator, // Batman
            // 蝙蝠俠
            
            // When: Number is clicked. Get the current number selected
            // 當數字被選，取得目前選到的數字
            
             setNum = function() {
                if(resultNum) { // If a result was displayed, reset number
                    // 如果結果顯示，重置這個數字
                    theNum = this.getAttribute("data-num");
                    resultNum ="";
                }
                
                else { // Otherwise, add digit to  previous number (this is a string )
                    // 反之，加上這個數字到當前的數字 (這是字串)
                    theNum += this.getAttribute("data-num");
                }
                
                viewer.innerHTML = theNum // Display current number
                // 顯示目前數字
            };
                
                // When: Operator is clicked. Pass number to oldNum and save operator
                // 當運算子 被選。 傳遞數字給 oldNum 然後存運算子
                
                var moveNum = function(){
                    oldNum = theNum;
                    theNum = "";
                    operator = this.getAttribute("data-ops");
                    
                    equals.setAttribute("data-resulte", ""); // Reset result in attr
                    // 重置結果的屬性
                };
                
                // When: Equals is clicked. Calculator result
                // 當 等號 被點選 計算結果
                
                var displayNum = function() {
                    // Convret string input to number
                    // 轉換 成數字
                    oldNum = parseFloat(oldNum);
                    theNum = parseFloat(theNum);
                    
                    // Perform operation
                    // 行駛運算
                    
                    switch (operator) {
                        case "plus":
                            resultNum = oldNum + theNum ;
                            break;
                            
                        case "minus":
                            resultNum = oldNum - theNum;
                            break;
                            
                        case "times":
                            resultNum = oldNum * theNum;
                            break;
                            
                        case "divided by":
                            resultNum = oldNum / theNum;
                            break;
                            
                            // if equal is pressed without an operator, keep number and coutinus
                            
                        default:
                            resultNum = theNum;
                            
                    }
                    
                    // if NaN or Infinity returned
                    // 如果 沒值 或是無窮大 回傳
                    if (!isFinite(resultNum)) {
                        if (isNaN(resultNum)) { // if result is not a number;set off by, eg, double-clicking operators
                            // 如果結果不是個數字 列如 雙點擊運算子
                            
                            resultNum = "You bloke it!";
                        } else { // if result is infinity, set off by  dividing by zero
                            // 如果結果是無限大 列如 除於 0 
                            resultNum = "Look at what you've done";
                            
                            el('#calcultator').calssList.add("broken"); // Break calculator
                            // 停止 計算機
                            el('#reset').classList.add("show"); // and show reset button
                            //然後秀出重設按鈕
                            
                        }
                    }
                    
                    // Display result, finally! 
                    // 顯示結果 最後
                    viewer.innerHTML = resultNum;
                    equals.setAttribute("data-result", resultNum);
                    
                    // Now reset oldNum & keep result
                    // 現在重設置 oldNum 然後 保持結果
                    oldNum = 0;
                    theNum = resultNum;
                    
                };
                
                
                // When: clear button is pressed. Clear everything
                // 當清除建被按的時候，清除一切
                
                var clearAll = function() {
                    oldNum = "";
                    theNum = "";
                    viewer.innerHTML = "0";
                    resultNum ="";
                    equals.setAttribute("data-result", resultNum);
            };
                
                /* The click events */
                /* 按鍵事件 */
                
                // Add click event to numbers
                // 為數字增加按鍵事件
                
                for (var i = 0, l = nums.length; i < l; i++ ) {
                    nums[i].onclick = setNum;
                    
                }
                
                
                // Add click event to operators
                // 運算子的按鍵事件
                
                for (var i = 0, l = ops.length; i < l ; i++) {
                    ops[i].onclick = moveNum;
                    
                }
                
                // Add click event to equal sign
                // 等號事件
                
                equals.onclick = displayNum ;
                
                // Add click event to clear button 
                // 清除事件
                el("#clear").onclick = clearAll;
                
                // Add click event to reset button
                // 重置事件
                
                el("#reset").onclick = function() {
                    window.location = window.location;
                };
    
    
}());

    