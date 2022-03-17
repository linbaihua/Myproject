
var fs = require("fs");

fs.readdir(".",function(err,files){
    if (!err) {
        console.log(files);
    }
});