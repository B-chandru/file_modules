# file_modules
 here we are going to learn about filemodules in node.js</br>
  *first we need to install node.js in our system.</br>
  *after installing node.js, create a folder.</br>
  *in the created folder create a .js file.</br>
  *then write this code to read a file using filemodules in node.js</br>
  
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
