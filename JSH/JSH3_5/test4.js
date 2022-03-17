
function sayName(name){
    console.log(name);
}

function sayHi(){
    alert('hi');
}

function sum(num1,num2){
    return num1+num2;
}

console.log(sayName.length);//1
console.log(sayHi.length);//0
console.log(sum.length);//2

window.onload = sayHi();

// 定义了一个父节点函数
function SuperType(){
    this.property = true;
}
// 给父节点函数以原型方式添加 getsupervalue方法
SuperType.prototype.getSuperValue = function(){
    return this.property;
};
// 定义了一个子节点函数
function SubType(){
    this.subproperty = false;
}
// 继承父节点
SubType.prototype = new SuperType();
// 子节点原型对象的父节点函数
SubType.prototype.getSubValue = function(){
    return this.subproperty;
};

var instanse = new SubType();
alert(instanse.getSuperValue());//true

function SuperType(){
    this.colors = ["red","blue","green"];
}
function SubType(){
    // 继承了supertype,这样subtype就有了自己的colors属性
    SuperType.call(this);
}
var aa = new SubType();
aa.colors.push("balack");
alert(aa.colors);//red,blue,green,black

var bb = new SubType();
alert(bb.colors);//red,blue,green

function SuperType(name){
    this.name = name;
}
function SubType(){
    // 继承了superType，同时还传递了参数
    SuperType.call(this,"linbaihua");

    // 实例属性
    this.age = 29;
}
var aa = new SubType();
alert(aa.name);  //linbaihua
alert(aa.age); //29

aa();
var aa = function(){
    alert("hello");
}

function aa(num){
    if(num<=1){
        return 1;
    }else{
        return num * arguments.callee(num-1);
    }
}

var aa = (function f(num){
    if(num<=1){
        return 1;
    }else{
        return num*f(num-1);
    }
});

function aa(propertyName){
    return function(object1,object2){
        var a1 = object1[propertyName];
        var a2 = object2[propertyName];

    if (a1<a2) {
        return -1;
    }else if(a1>a2){
        return 1;
    }else{
        return 0;
       }
    };  
}


function Aa(){
    // 定义私有变量和函数
    var aa=10;
    function bb(){
        return false;
    }
    // 特权方法
    this.cc = function(){
        aa++;
        return bb();
    }
}

function Person(name){
    this.getName = function(){
        return name;
    };
    this.setName = function(value){
        name = value;
    };
}

(function(){
    var a=10;
    function bb(){
        return false;
    }
    // 构造函数
    MyObject = function(){};
    // 公有方法
    MyObject.prototype.cc = function(){
        a++;
        return bb();
    }
})();

var aa=10;
window.bb=20;

delete aa;
delete bb;

alert(aa);
alert(window.bb);

window.aa=10;
delete aa;
alert(window.aa);
alert(aa);

var leftPos  = (typeof window.screenLeft == "number")? 
                window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number")?
                window.screenTop : window.screenY;
