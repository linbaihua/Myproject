
(function model(window){
    var a = 'libBAIhua';

    function toUpper(){                  
        document.write(a.toUpperCase());
    }
    function toLower(){                  
        document.write(a.toLowerCase());
    }

    window.model = {       //将闭包方法添加到window的属性，可以在全局使用
        toUpper:toUpper(),
        toLower:toLower()
    };
})(window)
/* 
    -给window添加属性就是直接添加就好了呀，window.a = 2
    -使用立即执行函数就不需要别人调用它，直接就添加到window中了
    -传入window的写法时为了压缩代码时压缩的更多，相同的window可以压缩成一个字母，只有一个window就不可以
*/