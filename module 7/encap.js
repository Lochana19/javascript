//inside of the class cannot be modified on outside  
// hidding your data os call encapsulation


// normal code
function car(_name,_year,_model){
    this.name=_name
    this.year=_year
    this.model=_model
}

let carDetails1= new car ("hunda", 1999,"x1")


carDetails1.year=2000


console.log(carDetails1)

// encapsulation code

function car(_name,_year,_model){
    this.name=_name
    var year=_year
    this.model=_model

    this.getYear=function(){
        return year
    }
}

let carDetails1= new car ("hunda", 1999,"x1")

console.log(carDetails1.getYear())



carDetails1.year=2000 // this line is not work out of the function



