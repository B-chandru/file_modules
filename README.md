# file_modules
 Here we are going to learn about filemodules in node.js</br>
<ul>
  <li>first we need to install node.js in our system.</li>
  <li>after installing node.js, create a folder.</li>
 <li>in the created folder create a .js file.</li>
  <li>then write this code to read a file using filemodules in node.js</li>
  </ul>
# code
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
