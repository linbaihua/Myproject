
/* 
    -7 实现异步的调用回调函数
        -有异步调用的时候，比如说settimeout，那么pormisestate = pending，
        所以需要再then方法中判断如果promisestate = pending怎么做？
        -传一个回调函数给promise，封装onresolve,onrejected方法
        -resolve和reject函数接收这两个方法
*/
function Promise(exector){

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const self = this;

    // 声明callback接收回调
    this.callback = {};

    function resolve(data){
        if(self.PromiseState !== 'pending') return;
        self.PromiseState = 'fulfilled';
        self.PromiseResult = data;
    }

    function reject(data){
        if(self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected';
        self.PromiseResult = data;
    }

    try {
        exector(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onResolved, onRejected){

    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult);
    }

    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }

    // 如果异步操作，promise状态为pending
    if (this.PromiseState === 'pending') {
        this.callback = {
            onResolved: onResolved,
            onRejected: onRejected
        }
    }


}