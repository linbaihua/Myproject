
// window.onload 函数
addLoadEvent(prepareGallery);

// 占位符图片和描述替换函数
function showPic(whichpic) {
    if (! document.getElementById("placeholder")) {
        return false;
    }

    // 占位符href被替换
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);

    // 描述图片文本内容替换
    if (document.getElementById("description")) {
        var text=whichpic.getAttribute("title");
        var description=document.getElementById("description");
        description.firstChild.nodeValue=text;
    }
     return true;
}


function prepareGallery(){

    // 平稳退化处理
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementsByTagName) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }

    // 将事件处理函数放到js中
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick=function(){
          if (showPic(this)) {
              return false;
          }else{
              return true;
          }
        }
        // 键盘触发，不过好像没啥用，onclik就可以
        // links[i].onkeyup=links[i].onclick;
    }
}

// onload 共享事件
function addLoadEvent(func){
    var onLoad=window.onload;
    if (typeof window.onload !='function') {
        window.onload=func;
    }
    else{
        window.onload=function(){
            onLoad();
            func();
        }
    }
}