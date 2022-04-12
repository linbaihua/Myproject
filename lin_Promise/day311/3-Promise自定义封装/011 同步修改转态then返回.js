/* 
    -011 同步修改转态pending->rejected then方法返回结果
*/

function Promise(exector) {

    this.PromiseState = 'pending';
    this.PromiseResult = null;
    const self = this;

    // 接收多个回调函数
    this.callbacks = [];

    function resolve(data) {
        if (self.PromiseState !== 'pending') return;

        self.PromiseState = 'fulfilled';
        self.PromiseResult = data

        self.callbacks.forEach(item => {
            item.onResolved(data);
        })
    }

    function reject(data) {
        if (self.PromiseState !== 'pending') return;

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

Promise.prototype.then = function (onResolved, onRejected) {

    // 09 then方法返回的是一个promise对象
    return new Promise((resolve, reject) => {

        // resolve
        if (this.PromiseState === 'fulfilled') {
            try {
                let result = onResolved(this.PromiseResult);
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v);
                    }, r => {
                        reject(r);
                    })
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e)
            }
        }

        // rejected
        if (this.PromiseState === 'rejected') {
            try {
                let result = onRejected(this.PromiseResult);
                if (result instanceof Promise) {
                    result.then(v => {
                        resolve(v);
                    }, r => {
                        reject(r);
                    })
                } else {
                    resolve(result);
                }
            } catch (e) {
                reject(e)
            }
        }

        // 异步回调函数是直接被调用的不指向当前对象，所以先保存当前对象
        const self = this;
        if (this.PromiseState === 'pending') {
            // 010 异步修改状态
            this.callbacks.push({
                onResolved: function () {
                    try {
                        let result = onResolved(self.PromiseResult);
                        if (result instanceof Promise) {
                            result.then(v => {
                                resolve(v);
                            }, r => {
                                reject(r);
                            });
                        } else {
                            resolve(result);
                        }
                    } catch (e) {
                        reject(e)
                    }
                },
                onRejected: function () {
                    try {
                        let result = onRejected(self.PromiseResult);
                        if (result instanceof Promise) {
                            result.then(v => {
                                resolve(v);
                            }, r => {
                                reject(r);
                            });
                        } else {
                            resolve(result);
                        }
                    } catch (e) {
                        reject(e);
                    }
                }
            });
        }
    });
}