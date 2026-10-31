//non strict mode

//'this' with node.js

console.log(this) // gettimg empty object

// inside a function

function name(){
    console.log(this)
}
name()


//function inside the object

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
person.myFn( )


//function inside  another function inside the object


let person={
    name:'lochana',
    age:19,
    number:12345,
    address:'anakaputhur',
    myFn:function(n1){
        function n(n2){
            console.log(this.age)
        }
        n.call(this,10)
    }
}
person.myFn(this,10)