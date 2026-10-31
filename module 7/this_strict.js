'use strict'

console.log(this) // return empty parenthesis


function name(){
    console.log(this)
}
name()  // return undefined


let person={
    name:'lochana',
    age:19,
    number:12345,
    address:'anakaputhur',
    myFn:function(n){
        console.log(this.name)
        console.log(n)
    }
}
person.myFn( ) // return function itself



let person={
    name:'lochana',
    age:19,
    number:12345,
    address:'anakaputhur',
    myFn:function(n1){
        function n(n2){
            console.log(this.age)
        } 
        n(n2)
    }
}
person.myFn(n1) 