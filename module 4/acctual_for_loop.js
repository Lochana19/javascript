//here we square tha all numbers in the list

var arr=[1,2,3,4,5,6,7,8,9]

square_arr=[] //empty array

for(i=0;i<arr.length;i++){
    square_arr.push(arr[i]*arr[i])
}

console.log("square numbers:",square_arr)
