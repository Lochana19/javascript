// filter method
// it used for check the condition first

let num=[1,2,3,4,5,6,7,8,9]
let evenNum=num.filter(n=>{
    return n%2==0
})
console.log(evenNum)


//reduce method

//reduce method always return a single valuse. 
// it dosnt return the array


let nums=[1,2,3,4,5]
let add=nums.reduce((a,b)=>{
    let sum=a+b
    return sum
},0)
console.log(add)


//chaining method

//taking output from one method and
//passing that to another method in the same line

let arr =[
    {name:"A",age:10,gender:"M"},
    {name:"B",age:20,gender:"F"},
    {name:"C",age:30,gender:"M"},
    {name:"D",age:40,gender:"F"},
    {name:"E",age:50,gender:"M"}

]
let male=arr.filter(n=>{
    return n.gender=="M"
})

console.log(male)



let femaleAge=arr.filter(female=>{
    return female.gender=="F" && female.age>30
})
console.log(femaleAge)