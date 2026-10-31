// the lexical scope means that a fn defines inside a 
// fn will always have asses to outer scope

// closure


function test(){
    let a="a"
    function test1(){
        console.log(a)
    }
    return test1
}

let fun=test()
console.log(fun)

fun()



// closurewith nested fn


function greet(){
    let a="lochana"
    function displayName(){
        console.log("hi"+a)
        let age=21
        function displayAge(){
            console.log("mu age is"+age)
        }
        return displayAge
    }
    return displayName
}


let g1=greet()

let g2=g1()

g2()


