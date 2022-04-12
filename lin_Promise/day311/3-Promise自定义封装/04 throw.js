
function Promise(exector){

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const self = this;

    function resolve(data){
        self.PromiseState = 'fulfilled';
        self.PromiseResult = data;
    }

    function reject(data){
        self.PromiseState = 'rejected';
        self.PromiseResult = data;
    }

    // 抛出异常
    try {
        exector(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onResolved, onRejected){

}