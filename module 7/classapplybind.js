// normal js code

let person1 ={
    name:'lochana',
    age:12,
    address:'anakaputhur'
    
}


let message= function(state){
        console.log(`hi,my name is ${this.name} and my age is ${this.age} and my state is ${state}`)
        
    }

let person2={
    name:'saru',
    age:20,
    address:'vadapalani'

}




// call method

message.call(person2,"london")


// apply method

message.apply(person2,["london"])

//bind method

let myFn=message.bind(person2)

console.log(myFn)

myFn()




