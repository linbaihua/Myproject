/* 


    -对邮件进行检测
    -abc                         .abc        @   abc123          .com             .cn
    任意字母数字下划线(3w位以上)   .任意字母下划线  @   任意字母数字    .任意字母(2-5位)  .任意字母(2-5位)
                            (可有可无)
    \w{3，}                  (\.\w+)*       @     [A-z0-9]+      (\.[A-z]{2,5}){1,2}

    -别忘了加上开头结尾
 */

var email = "171599@qq.com";
var reg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
console.log(reg.test(email));

var reg1 = /[A-z0-9]/;
console.log(reg1.test("a1"));

/* 
    -正则表达式写法
        -范围+量词  范围（表达式+元字符）

*/