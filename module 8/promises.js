// promises has a 4 state 
// 1. pending state 
// 2. fullfilled state 
// 3. rejected state 
// 4. setteled



// how to produce a promise

let myPromise1 = new Promise(function(resolve,reject){
    const a= 4
    const b=5
    setTimeout(()=>{
        if(a==b){
            resolve()
        }
        else{
           reject()     
        }
    },2000)
    

})

console.log(myPromise1) // pending state


// fullfilled state


let myPromise = new Promise(function(resolve,reject){
    const a=5
    const b=5
    setTimeout(()=>{
        if(a==b){
            resolve('the values are equal')
        }
        else{
           reject(' the value were not equal')     
        }
    },2000)
    

})

myPromise.then(function(result){
    console.log(result)
})

myPromise.catch(function(err){
    console.log(err)
})

