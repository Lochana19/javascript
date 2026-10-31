//arrays1
 
var person = {
    firstName:'lochana',
    secondName:'T',
    Address: 'Anakaputhur, chennai_70',
    age: 20,
    number: 1234567890,
    email_id:'lochana12345gmail.com',
    domain:'python,html,javascript,sql,php',
    language:'tamil,english,telugu'

};

// call a perticular element

a=person.age

console.log(a)

b=person.number

console.log(b)

// bracket notation

c= person['firstName']

console.log(c)

// change the existing property

person.number=0987654321

console.log("after cghange:",person)

// add a object

person.movies=['amaran','roja','oruvan']

console.log("after add a object;",person)

// delete a keyword

e= delete person.movies
 
console.log("after delete:",e)




