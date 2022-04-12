
/* 
    -封装一个函数 myReadFile 读取文件内容
    -参数 path 文件路径
    -返回 promise 对象
*/
// const path = require('path');
// const fs = require('fs');

function myReadFile(path){
    return new Promise((resolve, reject) => {
        // read file
        require('fs').readFile(path, (err, data) => {
            if (err) {
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

myReadFile(__dirname + '/content.txt').then(
    (value) => {
        console.log(value.toString());
    },
    (reason) => {
        
        console.log(reason);
    }
);