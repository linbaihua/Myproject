// 引入express
const express = require('express');

// 创建express对象
// express是个函数
const app = express();

// 调用express。get方法
// 创建路由规则
// req是请求，res是响应
app.get('/day327/serve', (req, res) => {
    // 设置响应头，设置允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    res.setHeader('Access-Control-Allow-Header', '*');
    // 设置响应
    res.send('hello day327 second');
});

// 开启监听窗口
app.listen(8000, () =>{
    console.log('服务已经开启，8000端口监听中。。。');
})
