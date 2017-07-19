/*获得页面宽度后动态修改html上的fontsize
* 320为iphone5设计稿下的页面宽度，如下设置后页面的页面在iphone5等宽屏幕上html
* 的font-size会变为20px，即 1rem = 20px    1px=0.05rem
* 所以设置元素尺寸的时候，如果测量设计稿 15px  则需设置尺寸为 (0.05*15)rem = 0.75rem   
*/


!(function(doc, win) {
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            var width = docEle.clientWidth;
            width && (docEle.style.fontSize = 20 * (width / 320) + "px");
        };
     
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));