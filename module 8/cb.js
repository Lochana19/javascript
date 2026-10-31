//reading a file synchronously

const fs=require('fs')

console.log("first line")

let data =fs.readFileSync('f1.txt')
console.log("file 1 is->"+data)

let data2 =fs.readFileSync('f2.txt')
console.log("file 2 is->"+data2)

console.log("final line")



// reading a file asynchronously


const fs=require('fs')

console.log("first line")

fs.readFile("f1.txt",cb1)
function cb1 (err,data){
    if(err){
        console.log(err)
    }
    console.log("file 1 is ->"+data)
    
}


fs.readFile("f2.txt",cb2)
function cb2 (err,data){
    if(err){
        console.log(err)
    }
    console.log("file 2 is ->"+data)
    
}

console.log("final line")
