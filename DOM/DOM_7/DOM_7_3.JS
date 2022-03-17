
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

    // 函数将一个新创建节点放到一个指定节点后
function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if (parent.lastChild==targetElement) {
        parent.appendChild(newElement);
    }else{
        parent.inserBefore(newElement,targetElement.nextSibling);
    }
}

// 创建新节点并插入到指定节点后面，调用 insertafter 函数
function preparePlaceholder(){
    if (!document.createElement) {
        return false;
    }
    if (!document.createTextNode) {
        return false;
    }
    if (!document.getElementById) {
        return false;
    }
    if (!document.getElementById("imagegallery")) {
        return false;
    }
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","");
    placeholder.setAttribute("alt","");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("choose a image");
    description.appendChild(desctext);
    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}

// 事件处理函数并调用 showpic 函数
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

// 占位符图片和描述替换函数
function showPic(whichpic) {
    if (! document.getElementById("placeholder")) {
        return true;
    }
    // 占位符href被替换
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    if (!document.getElementById("description")) {
        return false;
    }
    // 描述图片文本内容替换
    if (document.getElementById("description")) {
        var text=whichpic.getAttribute("title");
        var description=document.getElementById("description");
        description.firstChild.nodeValue=text;
    }
    return false;
}


// window.onload 函数
// 加载几个函数
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);