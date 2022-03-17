/* 
    -注释代码多行是 Ctrl alt /
    -nodejs使用 require 引入外部模块（文件）

    -使用 require引入模块后，require是一个函数，该函数会自动返回一个对象，这个对象代表引入的那个模块
*/

// require("./01.js"); 可以定义 var 一个变量接受 require函数返回的 对象
/* 
var aa = require("./01")

console.log(aa.x); 
*/


var math = require("./01");
console.log(math.add(1,2));

// nodejs 自己带的fs文件包
var fs = require("fs");
console.log(fs);

console.log(__filename);
console.log(__dirname);