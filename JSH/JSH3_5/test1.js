
function test1(){
    // 字面量创建对象，不同属性之间用，
    var person1={
        toString : function(){
            return "tostring1";
        },
        toLocaleString : function(){
            return "tolocalestring1";
        }
    };

    var person2 = {
        toString : function(){
            return "tostring2";
        },
        toLocaleString : function(){
            return "tolocalestring2";
        }
    };

    // 字面量创建数组
    var people = [person1,person2];
    // alert people默认输出数组得tostring
    alert(people);
    alert(people.toString());
    alert(people.toLocaleString());

    // 字面量创建数组
    var colors = ["red","blue","black"];
    alert(colors);
    alert(colors.join("|"));
}

window.onload = test1;