/* 
    -如果这个文件被引入，则这个文件里面变量看似是global变量，其实是包装在一个函数中，是局部变量，不能被随便调用的

    -可以通过 exports 向外部暴露变量，这样这个文件被引入后就可以访问暴露的那个变量或方法
        -exports.设置名称 = 要导出的变量或方法
        -引入这个文件的访问 a 变量，也是调用 X，因为 a 是以 x 的名称导出的
*/

/* var a = 1;
var b = 2;
console.log("我是模块1");

exports.x = a; */

// 

exports.add = function(a,b){
    return a+b;
};
exports.math = function(a,b){
    return a-b;
};

