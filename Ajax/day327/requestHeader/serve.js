const express = require('express');
const app = express();
/* 
    -当requestHeader中设置了没有预定义的头部名字，则就需要将路由规则设置为
        all,就不管是get,post 还是别的什么请求，都可以
*/
app.all('/day327/requestHeader/serve', (req, res) => {
    // 设置响应头，允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 当设置了请求头部名字时，需要允许非预定义的名字也可以
    res.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    res.send('setrequestheader first');
});

app.listen(8000, () => {
    console.log('开启服务，开启8000端口!!!');
});