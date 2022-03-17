
function getNewContent(){
    var request=getHTTPPObject();
    if (request) {
        // XMLHTTPRequest 对象最有用的方法 open
        // get 请求与中间的文件参数
        request.open("GET","DOM_7_4.txt",true);
        // 处理函数，服务器给 XMLHTTPRequest 送回对象时响应触发事件
        request.onreadystatechange=function(){
            if (request.readyState==4) {
                var para=document.createElement("p");
                var txt=document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else{
        alert('sorry, your browse doesn\'t suppot XMLHTTORequest');
    }
}

addLoadEvent(getNewContent);