# file_modules
 here we are going to learn about filemodules in node.js
  *first we need to install node.js in our system.
  *after installing node.js, create a folder.
  *in the created folder create a .js file.
  *then write this code to read a file using filemodules in node.js
  
  ## code
  <pre>
  <code>
  var fs=require("fs")
  
  fs.readFile("in.txt",(err,data)=>{
    if(err){
              console.log(err);
           }else{
                console.log(data.toString());
           }  

})
  </code></pre>
