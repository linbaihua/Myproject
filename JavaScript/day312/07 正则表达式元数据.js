
/* 
    -. 
        -查找任意字符，除了换行和行结束符，只要有字符就可以查找到 
*/

var reg = /./;
console.log(reg.test("how are you"));
console.log(reg.test(123));

/* 
    -所以如果要匹配单纯的点，使用转义字符 \
*/
var reg1 = /\./;
console.log(reg1.test("today"));
console.log(reg1.test("a.b"));

/* 
    -匹配斜杠也是需要转义字符转义
    -字符串中 \ 表示转义字符，所以如果要显示这个 \ 需要自己转义自己 \\
*/
var reg2 = /\\/;
console.log(reg2.test("a\\b"));
console.log("a\b");
console.log("a\\b");
var reg3 = /\//;
console.log(reg3.test("a/b"));

/* 
    -\w
        -匹配任意字母数字下划线
*/
var reg4 = /\w/;
console.log("reg4:"+reg4.test("av12_"));

/* 
    -\W(大写)
        -除了字母数字下划线只要有就返回true 
*/
var reg5 = /\W/;
console.log("reg5:"+reg5.test("jing.,"));

/* 
    -\d 查找数字。 
    -\D 查找非数字字符。
*/
var reg6 = /\d/;
var reg7 = /\D/;
console.log("reg6:"+reg6.test("abc12"));
console.log("reg7:"+reg7.test("abc12"));
console.log("reg7:"+reg7.test("123"));

/* 
    -\s 查找空格字符。 
    -\S 查找非空格字符 
*/
var reg8 = /\s/;
var reg9 = /\S/;
console.log("reg8:"+reg8.test("hello world"));
console.log("reg9:"+reg9.test("   "));

/* 
    -\b -匹配单词边界。 
    -\B 匹配非单词边界
        -加入oo之间没有边界（一个字符），那么 /o/就匹配不到，现在/\Bo/给它
            边界去掉，就可以匹配到了（不知道对不对，暂时理解）
        -就感觉和没写一样，因为字符与字符之间都有边界，空格都有边界
*/
var reg10 = /\bworld\b/;
var reg11 = /\Boo/;
console.log("reg10:"+reg10.test("hello world"));
console.log("reg10:"+reg10.test("helloworld"));
console.log("reg11:"+reg11.test(""));

/* 
    -问题：假设接受一个键盘输入，去掉字符串前后的空格，不去字符串中间的空格
    -思路：
        -使用 \s 查找到空格然后用空字符串代替
*/
var str = prompt("请输入文本:");
//会将字符串中的空格也去掉
console.log(str.replace(/\s/g,""));
/* 
    -^ 匹配开头 \s 空格，*无数个,|或
*/
console.log(str.replace(/^\s*|\s*$/g,""));


