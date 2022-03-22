
// 检查是否有该class
function hasClass(obj, cn){
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}

// 添加class
function addClass(obj, cn){
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn + " ";
    }
}

// 删除一个class
function removeClass(obj, cn){
    var reg = new RegExp("\\b" + cn + "\\b");
    obj.className = obj.className.replace(reg, "");
}

// 检测是否有class，有就删除，没有级添加
function toggleClass(obj, cn){
    if (hasClass(obj, cn)) {
        removeClass(obj, cn);
    }else{
        addClass(obj, cn);
    }
}

// 切换样式
function switchClass(obj, cn){
    if (!hasClass(obj, cn)) {
        obj.className = cn;
    }
}