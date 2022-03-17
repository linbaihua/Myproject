
var fs = require("fs");

var ws = fs.createWriteStream("C:\\Users\\Administrator\\Desktop\\MyProject\\nodejs\\文件系统\\hello1.txt");

ws.once("open",function(){
    console.log("打开流");
});

ws.once("close",function(){
    console.log("关闭流");
});

ws.write("太阳当空照");
ws.write("花儿对我笑");

ws.end();
