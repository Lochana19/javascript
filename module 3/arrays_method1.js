// array 1
 
let fruits=['apples','banana','pomogranet','mango']

//array 2

let vegetabels=['onion','tomato','brinjal','beans']

//array 3

let places=['anakaputhur','pallavaram','pammal','kundrathur']

//array 4

let things=['table','chair','stool','glass']

//array 5

let colours=['white','black','yellow','pink','blue']

//array 6

let subjets=['tamil','english','maths','social','science']

//arrays 7

let names=['lochana','indumathy','thirulogachander','mugilan']

// arrays 8

let domains=['javascript','java','python','angular']

// using push() method

fruits.push('dragon_fruit');
console.log("after push method:",fruits)

//using pop() method

vegetabels.pop( );
console.log("after pop method:",vegetabels)

// using unshift() method


places.unshift('lemon');
console.log("after unshift method:",places)

// using shift() mehtod

things.shift( );
console.log("after shift method:",things)

// using indexOf() method

let colours1= colours.indexOf('banana');
console.log("after indexof method:",colours1)

// using includes() method

let subjets2 = subjets.includes('apple');
console.log("apple is their",subjets2)

// using sort() method

names.sort( );
console.log("after sort method:",names)

// using reverse() method

domains.reverse( );
console.log("after reverse method:",domains)

// using slice() method

let newfruits= fruits.slice(1,3)
console.log("after slice method:",newfruits)

