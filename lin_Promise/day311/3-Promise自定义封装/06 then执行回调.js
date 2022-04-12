

function Promise(exector){

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const self = this;

    function resolve(data){
        if(self.PromiseState !== 'pending') return;
        self.PromiseState = 'fulfilled';
        self.PromiseResult = data;
    }

    function reject(data){  
        // return直接退出函数
        if(self.PromiseState !== 'pending') return;
        self.PromiseState = 'rejected';
        self.PromiseResult = data
    }
    try {
        exector(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

Promise.prototype.then = function(onResolved, onRejected){
    
    //调用回调函数
    // 是promise实例调用的，所以这里的this就指向promise实例
    if (this.PromiseState === 'fulfilled') {
        onResolved(this.PromiseResult);
    }

    if (this.PromiseState === 'rejected') {
        onRejected(this.PromiseResult);
    }
}