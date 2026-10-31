// this is a method inheritance


//we can also inherit one method
//from one class to anoter class


class person{
    constructor(_name,_age,_regno){
        this.name=_name
        this.age=_age
        this.regno=_regno
        }
        message( ) {
            console.log(`\n hi, my name is ${this.name} 
and i am in ${this.age}, 
my register number is ${this.regno}`)
    }
}

class teacher extends person{
    constructor(_name,_age,_regno,_subname){
        super(_name,_age,_regno)
        super.message()
        this.subname=_subname
    }
}
class student extends person{
    constructor(_name,_age,_regno,_class){
        super(_name,_age,_regno)
        super.message()
        this.class=_class
    }
}

let teacher1=new teacher('kalyani',23,345,'tamil')
let student1=new student('lochana',13,3126263205017,'A3')
let teacher3=new teacher('mari',33,375,'english')

console.log(teacher1)
console.log(teacher3)
console.log(student1)
