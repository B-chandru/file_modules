var fs=require("fs");

var write=fs.createWriteStream("hello.txt");
write.write("hello how are you:)","utf-8");
write.end;
write.on("finish",()=>{
    console.log("completed")
})
