
// 声明 promise函数
function Promise(execte){
    // 声明resolve函数
    function resolve(data){

    }
    // 声明reject函数
    function reject(data){

    }
    execte(resolve, reject);
}

// 添加then方法
Promise.prototype.then = function(onResolved, onRejected){
    
}
