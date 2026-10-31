
// we provide a function name that 
// perticukar time it will execute whatever inside it


function greet(){
    console.log("i am lochana")
}

setTimeout(greet,2000)


// we actually setting a interval of time after this 
// perticular interval of your function will run again

function interval(){
    console.log("java script")
}
let timer=setInterval(interval,2000)


setTimeout(function(){
    clearInterval(timer)
},20000)
