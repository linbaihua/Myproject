
function Promise(exector) {

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const self = this;

    function resolve(data) {
        // 保证promise的转态只能改变一次
        // 使用 !== 而不是 !=
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'fullfilled';
        self.PromiseResult = data;
    }

    function reject(data) {
        // 保证promise的转态只改变一次
        if (self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected';
        self.PromiseResult = data;
    }

    try {
        exector(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function (onResolved, onRejected) {

}