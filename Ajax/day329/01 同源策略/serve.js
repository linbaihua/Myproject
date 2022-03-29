const express = require('express');

const app = express();

/* 
    -这里必须从 127.0.0.1:9000/home 进入
    -因为这样index.html 才会和 服务器端一个域，如果从index直接打开
        就会显示跨域错误
    -得再当前也买打开页面获取数据才不算跨域，从别的页面打开获取此页面数据就是跨域
*/
app.get('/home', (req, res) => {

    // 响应一个页面
    // __dirname 是nodejs中的，代表当前文件所在的目录
    // 因为sendFile 需要传入完整的路径，serve.js和 index.html在同一个目录下
    // __filename是当前包含当前文件名的完整目录
    res.sendFile(__dirname + '/index.html');
});

app.get('/data', (req, res) => {
    res.send('用户数据');
});

app.listen(9000, () => {
    console.log('开启服务，9000端口已开启....');
})