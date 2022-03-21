
function move(obj, attr, target, speed, callback){

    clearInterval(obj.timer)
    
    // 获取到元素的属性值
    // var getAttr = getComputedStyle(obj,null)[attr];

    // 对属性值进行取整数
    var currentPosition = parseInt(getStyle(obj,attr));

    // 使用中括号可以传入string类型，用点不行
    if (currentPosition > target) {
        speed = -speed;
    }

    obj.timer = setInterval(function(){

        // 因为current是实时变化的，而上面的currentPosition是不变的
        var current = parseInt(getStyle(obj,attr));
        var position =  current + speed;

        if ((speed<0 && position<target) || (speed>0 && position>target)) {
            position = target;
        }
        obj.style[attr] = position + "px";
        
        /* 
            -下面的回调函数可以做很多事情
        */
        if(position == target){
            clearInterval(obj.timer);
            callback && callback();
        }
    },30);
}

function getStyle(obj , name){
    return getComputedStyle(obj , null)[name];
}