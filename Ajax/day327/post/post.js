// require express
const express = require('express');
// 2 创建express对象
const app = express();
// 3 设置post方法
app.post('/day327/post/post', (req, res) =>{
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 
    res.send('this is post request first');
});

// 设置监听端口
app.listen(8000, () => {
    console.log('开启服务，8000端口已经打开....');
});