// reference data type


let firstName={
    name:'lochana',
    agr:21
}

let secondName=firstName

firstName.name="mugi" // it may stored in the heap memory

console.log(firstName)
console.log(secondName)

// it affect both the variable name because it is mutable