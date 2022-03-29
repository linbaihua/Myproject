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

// 超时与网络请求
app.all('/delay', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(() => {
        // 设置响应体
        res.send('延时响应');
    }, 3000);
});

// axios服务
app.all('/axios-server', (req, res) => {
    // 设置响应头，允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*');
    //                               这里的Headers怎么写，html中的头部就怎么写，大小写一样
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name:'尚硅谷'};
    res.send(JSON.stringify(data));
});

app.all('/fetch', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    const data = {
        name: 'my name is linbaihua',
        age: 16
    };
    // 以json格式发送
    res.send(JSON.stringify(data));
});

app.listen(3000, () => {
    console.log('开启服务，3000端口已经开启****');
})