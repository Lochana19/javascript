
// throws empy and object prototype pre-built

let myObject={

}
console.log(myObject)


//customised object and prototype pre_built

let myObject1={
    name:'lochana',
    age:20

}
console.log(myObject)


//constructor function

function car(_name,_year,_model){
    this.name=_name
    this.year=_year
    this.model=_model

    
}

let carDetails1= new car ("hunda", 1999,"x1")

console.log(carDetails1)






