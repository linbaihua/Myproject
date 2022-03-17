// set img的值
var placeholder=document.createElement("img");
placeholder.setAttribute("id","placeholder");
placeholder.setAttribute("src","");
placeholder.setAttribute("alt","");

// 创建 p 节点
var description=document.createElement("p");
description.setAttribute("id","description");

// 创建文本节点并附加给　Ｐ
var desctext=document.createTextNode("CHOOSE A IMAGE");
description.appendChild(desctext);

// 将img　和　ｐ　节点附加到body
document.getElementsByTagName("body")[0].appendChild(placeholder);
document.getElementsByTagName("body")[0].appendChild(description);

// img and p 具体放到 body 中图片列表的前面
var gallery=document.getElementById("imagegallery");
gallery.parentNode.insertBefore(placeholder,gallery);
gallery.parentNode.insertBefore(description,gallery);

