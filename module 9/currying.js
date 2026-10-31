// normal code


let sum=function(a,b){
    console.log(a+b)
}

sum(3,9)

// using currying


// if number of parameters are 
// passed in one arugument may confussed. 
// to over come this use crrying method


let add=function(x){
    return function(y){
        console.log(x+y)
    }
}

let addition=add(2)

addition(8)