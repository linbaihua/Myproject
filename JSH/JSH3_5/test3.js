

window.color = "red";
var o = {color : "blue"};

function sayColor(){
    console.log(this.color);
}

sayColor();
// o.saycolor: 意味着定义一个变量，现在将saycolor指针传给这个变量，现在o.saycolor变成了一个指针
o.sayColor = sayColor;
// o,saycolor不加 () 是一个指针，加（）就是函数
o.sayColor();

o.aa = sayColor;
o.aa();