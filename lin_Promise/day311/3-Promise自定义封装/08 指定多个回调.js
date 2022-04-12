

/* 
    -8 执行多个回调
*/
function Promise(exector) {

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const self = this;

    // 声明callback接收回调
    // 设置为一个数组，可以接收多个回调
    this.callbacks = [];

    function resolve(data) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'fulfilled';
        self.PromiseResult = data;

        // 如果有多个回调就遍历多个回调
        self.callbacks.forEach(item => {
            item.onResolved(data);
        })
    }

    function reject(data) {
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected';
        self.PromiseResult = data;

        // 遍历多个回调
        self.callbacks.forEach(item => {
            item.onRejected(data);
        })
    }

    try {
        exector(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onResolved, onRejected) {

    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult);
    }

    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }

    // 如果异步操作，promise状态为pending
    if (this.PromiseState === 'pending') {
        this.callbacks.push({
            onResolved: onResolved,
            onRejected: onRejected
        });
    }
}