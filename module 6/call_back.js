//js, functions are objects, fn can passed as an arguments

// normal function

function firstName (x){
    console.log(x)
}
firstName("Lochana")


function lastName (y){
    console.log(y)
}
lastName("T")


// call back function


function firstName (x,cb){
    console.log(x)
    cb("T")
}
firstName("Lochana",lastName)


function lastName (y){
    console.log(y)
}




