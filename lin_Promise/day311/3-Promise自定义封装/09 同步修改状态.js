/* 
    -09 同步修改状态then方法返回结果
*/

function Promise(exector){
    
    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const self = this;

    // 接收多个回调函数
    this.callbacks = [];

    function resolve(data){
        if(self.PromiseState !== 'pending') return;

        self.PromiseState = 'fulfilled';
        self.PromiseResult = data

        self.callbacks.forEach(item => {
            item.onResolved(data);
        })
    }

    function reject(data){
        if(self.PromiseState !== 'pending') return;

        self.PromiseState = 'rejected';
        self.PromiseResult = data;

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

Promise.prototype.then = function(onResolved, onRejected){

    // 09 then方法返回的是一个promise对象
    return new Promise((resolve, reject) => {

        if (this.PromiseState === 'fulfilled') {
            try {
                let result = onResolved(this.PromiseResult);
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v);
                    }, r => {
                        reject(r);
                    })
                }else{
                    resolve(result);
                }
            } catch (e) {
                reject(e)
            }
        }
    
        if (this.PromiseState === 'rejected') {
            onRejected(this.PromiseResult);
        }
    
        if (this.PromiseState === 'pending') {
            this.callbacks.push({
                onResolved: onResolved,
                onRejected: onRejected
            });
        }
    });
}