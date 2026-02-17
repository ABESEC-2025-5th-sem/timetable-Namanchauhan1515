const fs=require('fs');
// fs.writeFile("./abes.txt","we are code",()=>{ });
// fs.readFile("./abes.txt","utf-8",(err,result)=>{
//     if(ierr){
//         console.log("Error",err)
//     }else{
//         console.log(result);
//     }
// });
// fs.appendFile("./abes.txt",`Naman`,()=>{});
fs.cpSync("./abes.txt","./a1.txt");