// hoe get a copy and that copy should not br mutable. 
// it is use to oveer come the problem of reference data type

//shallow copy

//it use the {...} spread oprerator

let firstName={
    name:'lochana',
    agr:21
}

let secondName={...firstName}

firstName.name="mugi" 
console.log(firstName)
console.log(secondName)

// but it cannot work in nested object


// deep copy

let firstPerson={
    name:'lochana',
    agr:21,
    address:{
        city:"chennai",
        area:"anakaputhur"
    }
}

let secondPerson=JSON.parse(JSON.stringify(firstPerson))
firstPerson.address.city="pallavaram" 

console.log(secondPerson)
console.log(firstPerson)
