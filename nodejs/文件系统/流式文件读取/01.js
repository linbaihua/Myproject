
var fs = require("fs");

var rs = fs.createReadStream("要读取的文件路径，一般用绝对路径")

var ws = fs.createWriteStream("要写入的文件路径")

// pipe 方法，将rs中的文件数据写入到 ws指定的文件中
rs.pipe(ws);