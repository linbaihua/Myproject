
/* 
    -使用nodejs中的util模块中的 promisify方法封装promise
        -返回一个包含promise对象的函数
*/
// import util
const util = require('util');
// import fs
const fs = require('fs');
// call util.promisify to packaging
let myReadFile1 = util.promisify(fs.readFile);
/* 
    -上面这条封装语句就是代替下面的手动封装

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
*/

myReadFile1(__dirname + '/content.txt').then(
    (value) => {
        console.log(value.toString());
    },
    (reason) => {
        console.log(reason);
    }
);

