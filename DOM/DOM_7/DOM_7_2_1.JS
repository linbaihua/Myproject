
window.onload=function(){

    // 创建元素节点
    var elementP=document.createElement("p");
    var elementEM=document.createElement("em");

    var testdiv=document.getElementById("testdiv");

    // 创建文本节点
    var textA=document.createTextNode("this is");
    var textB=document.createTextNode("just");
    var textC=document.createTextNode("a test");

    // 附加子节点
    elementP.appendChild(textA);
    elementEM.appendChild(textB);
    elementP.appendChild(elementEM);
    elementP.appendChild(textC);
    testdiv.appendChild(elementP);

}