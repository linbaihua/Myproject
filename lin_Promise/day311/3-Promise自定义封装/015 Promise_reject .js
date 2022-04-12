/* 
    -015 添加Promise.reject方法
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

    // 异步回调函数是直接被调用的不指向当前对象，所以先保存当前对象
    const self = this;

    // 013 异常穿透
    if (typeof onRejected !== 'function') {
        onRejected = reason => {
            throw reason;
        }
    }
    if (typeof onResolved !== 'function') {
        onResolved = value => value;
    }

    // 09 then方法返回的是一个promise对象
    return new Promise((resolve, reject) => {

        // 012 then方法封装
        function callback(type) {
            try {
                let result = type(self.PromiseResult);
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

        // resolve
        if (this.PromiseState === 'fulfilled') {
            callback(onResolved);
        }

        // rejected
        if (this.PromiseState === 'rejected') {
            callback(onRejected);
        }

        if (this.PromiseState === 'pending') {
            // 010 异步修改状态
            this.callbacks.push({
                onResolved: function () {
                    callback(onResolved);
                },
                onRejected: function () {
                    callback(onRejected);
                }
            });
        }
    });
}

//  013 添加catch方法
Promise.prototype.catch = function (onRejected) {
    return this.then(undefined, onRejected);
}

// 014 添加 Promise_resolve 方法
Promise.resolve = function(value){
    return new Promise((resolve, reject) => {
        if (value instanceof Promise) {
            value.then(v => {
                resolve(v);
            }, r => {
                reject(r);
            });
        }else{
            resolve(value);
        }
    });
}

// 015 添加 Promise.reject 方法
Promise.reject = function(reason){
    return new Promise((resolve, reject) => {
        reject(reason);
    });
}