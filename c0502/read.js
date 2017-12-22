var fs = require("fs");
var path = require("path");

fs.readdir("./lib",(err,files)=>{
    files.forEach((filename)=>{
        var file = path.join(__dirname,"lib", filename);
        var stats = fs.statSync(file);
        if (stats.isFile() && filename !== ".DS_Store"){
            fs.readFile(file,"UTF-8",(err, contents)=>{
                console.log(contents);
            });
        }
    });
});
console.log("Reading files");