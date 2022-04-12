
// nodejs每次运行都是从nodejs的安装所在路径开始运行，路径是绝对路径

// 引入fs模块
const fs = require('fs');
// 引入path模块
const path = require('path');
// 返回nodejs的运行目录
console.log(process.execPath); //C:\Program Files\nodejs\node.exe
// 返回当前所在目录（绝对路径）
console.log(__dirname); //e:\Documents\学习\前端\MyProject\lin_Promise\day311
// 返回当前所在文件（绝对路径）
console.log(__filename); //e:\Documents\学习\前端\MyProject\lin_Promise\day311\04 noejs_path.js
// path.join() 连接目录，可以回退
const path1 = path.join(__dirname, '..', 'repeat_practic');
console.log(path1);

/* 
    -问题：怎么获取上一级目录下的某个文件？
        1 使用绝对路径（很麻烦）
        2 使用 path.join方法
    
    -现在在 repeat_practic 中有个一个content1.txt,去读取它
*/
// fs读取是一个异步操作，使用promise
const p = new Promise((resolve, reject) => {

    // 调用path.join方法去回退以及目录
    const path2 = path.join(__dirname, '..', 'repeat_practice', 'content1.txt');

    fs.readFile(path2, (err, data) => {
        if (err) {
            reject(err);
        }else{
            resolve(data);
        }
    });

});

p.then(
    (reason) => {
        console.log(reason.toString());
    },
    (value) => {
        console.log(value);
    }
);