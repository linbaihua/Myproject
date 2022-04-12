// 引入fs模块
const fs = require('fs');
// new promise实例
const p = new Promise((resolve, reject) => {

    // 调用fs.readFile方法
    fs.readFile(__dirname + '/content.txt', (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data);
        }
    });
});
// 调用promise.then方法处理回调
p.then(
    (value) => {
        console.log(value.toString());
    },
    (reason) => {
        console.log(reason);
    }
);