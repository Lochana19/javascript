// higher order function that operate an other functions
// it receives a function as an argument or return the fn as output

// normal js code



let arr = [1,2,3,4,5,6,7]
let squareArr=[]
for (i=0;i<arr.length;i++){
    squareArr.push(arr[i]*arr[i])
}
console.log(squareArr)



// higher order function

// map method it is a built-in function



const arr = [1,2,3,4,5,6,7]
const squareArr=arr.map (function(n){
    return n*n
})

console.log(squareArr)



// for each method 

// for each it dosnt return into an array

const transaction=[20,30,40,50,60,70]
const doller=80
const transactionIntoDoller=transaction.map(function(n){
    console.log((n/doller).toFixed(0))
})
console.log(transactionIntoDoller)



//find method


//find is only used for filter. but it dosnt not return 
// every element that satisfied the condition 

const num=[1,2,3,4,-5,6,7,-8,9]
let firstNegative=num.find (n=>{
    return n<0
})
console.log(firstNegative)



// find index method
// it retun the index of the find method


const num=[1,2,3,4,-5,6,7,-8,9]
let firstNegativeIndex=num.findIndex (n=>{
    return n<0
})
console.log(firstNegativeIndex)



//some method 
//it return the boolean value based on the condition


const num=[1,2,3,4,-5,6,7,-8,9]
let firstNegative=num.some (n=>{
    return n<0
})
console.log(firstNegative)



//every
// it eork exactly like some method. but it check every element

const num=[1,2,3,4,-5,6,7,-8,9]
let firstNegative=num.every (n=>{
    return n<0
})
console.log(firstNegative)

