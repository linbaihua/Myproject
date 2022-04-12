
// 1 声明Promise构造函数
function Promise(exector){

    // 设置初始PromiseState，PromiseResult
    this.PromiseState = 'pending';
    this.PromiseResult = null;

    // 保存实例对象的this值
    // 因为resolve和reject函数是直接被调用的，所以this值指向window
    const self = this;

    //  声明resolve函数
    function resolve(data){
        // 修改对象的转态和结果值
        self.PromiseState = 'fullfilled';
        self.PromiseResult = data;
    }
    // 声明reject函数
    function reject(data){  
        self.PromiseState = 'rejected';
        self.PromiseResult = data;
    }
    // 3 执行器
    exector(resolve, reject);
}

// 2 添加then方法
Promise.prototype.then = function(onResolved, onRejected){

}