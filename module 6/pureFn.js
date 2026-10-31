// let start with a impure function

var a= 4

 function add(x){
    console.log(x+a)
    a++
}
add(6)
add(4)
add(6)


// pure function

function addPure (x,a){
    console.log(x+a)
}
addPure(3,4)



 add(5,3)




 // a pure function, given the same input alwalys produce a same output

// impure function
var a=5 //external input
function add(x){
    console.log(x+a**2)
}
add(4)
add(3) // the external input change the output


// pure function


 function add(x,a){
      console.log(x+a)
  }
 add(4,3)
 add(5,3)
