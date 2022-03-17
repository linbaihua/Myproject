
function compare(a,b){
    return a-b;
}

function test2(){
    var numbers = [2,4,3,1,6];
    console.log(numbers.sort(compare));
}

var sum = function(num1,num2){
    return num1+num2;
};//如果时声明变量新建一个函数，别忘了分号

// 函数名只是一个指针
var sum2 = sum;
alert(sum2(10,10));

// 函数声明正确
alert(sum3(10,10));
function sum(num1,num2){
    return num1+num2;
}

// 函数表达式错误
alert(sum4(10,10));
var sum4 = function(num1,num2){
    return num1+num2;
};

// 实用函数
function add(num){
    return num+10;
}
// 封装实用函数，下次用实用函数只需要传入实用函数名和参数
function useSomeFunction(someFunction,parameter){
    return someFunction(parameter);
}
// 调用封装函数，实用函数作为参数传入
var result = useSomeFunction(add,10);
alert(result);

window.onload = test2;