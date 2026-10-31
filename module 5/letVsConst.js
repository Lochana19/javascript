

// we rectify the problems by using the let and const key word 
// instead of var keyword

let a= 40 
let a= 41

console.log(a)

// it through an error because let keyword is not allow 
// to redeclating a same variable

let a= 20

if(a===20){
   let b=30
    console.log(b)
}
console.log(b)

// the let keyword cannot allow to
//  call ourside 


//const not allow redeclaretion

const a= 5
let c= a=3

console.log(c)

let a= 6
let d= a+9
console.log(d)

// it throw an error because you cannot allow to
//assign a value to a const variable