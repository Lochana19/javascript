function placeOrder (drink){
    return new Promise (function(resolve,reject){
        if(drink=="coffee"){
            resolve("order for cofee is received")
        }
        else{
            reject("order is rejected")
        }
    })
}



function processOrder(order){
    return new Promise (function(resolve){
        console.log("order is being processed")
        resolve(`${order} is served`)
    })
}


placeOrder("coffee").then(function(orderPlace){
    console.log(orderPlace)
    let orderPlace=processOrder(orderPlace)
    return orderPlace

}).then(function(afterOrder){
    console.log(afterOrder)
})
 


// async await 

// this is a keywords. it always work with the function


async function servedOrder(){
    try {
        let orderPlace= await placeOrder("coffee")
    console.log(orderPlace)
    let orderProcess= await processOrder(orderPlace)
    console.log(orderProcess)
        
    } catch (error) {
        console.log(error)
        
    }
    
}