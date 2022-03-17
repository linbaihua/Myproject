
var fs =  require("fs");

fs.readFile("C:\\Users\\Administrator\\Desktop\\MyProject\\nodejs\\文件系统\\简单文件读取\\IMG_3229.JPG",function(err,data){
    if (!err) {
        console.log("读取成功");
        // writefile  可以起到一个替换的作用，就是将一个文件替换到指定路径上的同类型文件
        fs.writeFile("C:/Users/Administrator/Desktop/Myproject/nodejs/hello.jpg",data,function(err){
             if (!err) {
                console.log("文件写入成功");
            }
        })
    }
});