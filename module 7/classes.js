// classes are also works as a template

class car{
    constructor (_name,_year,_model){
        this.name=_name
        this.year=_year
        this.model=_model
    }
    
    
    message( ) {
    console.log(`\n hi,i am using the ${this.name} car thats amazing and
it is found in the year of ${this.year} 
the exact model name is ${this.model}`)
}

}

let carDetails1= new car ("hunda", 1999,"x1")
let carDetails2= new car ("royals", 1899,"x2")
let carDetails3= new car ("bmw", 1959,"x3")
let carDetails4= new car ("audi", 1997,"x4")

console.log(carDetails1)
console.log(carDetails2)
console.log(carDetails3)
console.log(carDetails4)

carDetails1.message()
carDetails2.message()
carDetails3.message()
carDetails4.message()

