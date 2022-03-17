
var buf = Buffer.alloc(10);
buf[0] = 1;

var buf2 = Buffer.allocUnsafe(10);
buf2[0] = 2;

console.log(buf);
console.log(buf2);
/* 
    alloc 和 allocUnsafe 的区别就是 allocunsafe分配的可能是存有数据的空间
    而alloc 分配空间后会先清空空间，buffer得到一个干净的空间
    所以 allocunsafe 方法可能会泄露数据不安全
*/