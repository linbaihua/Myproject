const express = require('express');
const app = express();
// 第一个参数只要和html中一样就行了，不一定非要是文件路径
app.all('/json-serve', (req, res) => {
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    // 允许自己设置头部名字
    res.setHeader('Access-Control-Allow-Headers', '*')
    // 创建一个数据用于返回响应体
    const data = {
        name: 'linbaihua-liqiang-lin' 
    };
    // 对data转换成json格式
    var str = JSON.stringify(data);
    // 发送请求响应   
    res.send(str);
});

app.all('/delay', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        // 设置响应体
        res.send('延时响应');
    }, 3000);
});

app.listen(8000, () => {
    console.log('开启服务，8000端口已经开启****');
})