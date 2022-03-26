/* 
    -将私有方法封装到一个函数中，函数返回一个对象或者方法供外部使用，外部只有使用不能更改内部方法
        这样内部方法就很安全
*/
function model(){
    var a = 'libBAIhua';

    function toUpper(){                  //封装的私有方法
        document.write(a.toUpperCase());
    }
    function toLower(){                  //封装的私有方法
        document.write(a.toLowerCase());
    }

    return {                    //返回一个对象，对象中时封装的方法
        toUpper: toUpper(),
        toLower: toLower()
    };
}