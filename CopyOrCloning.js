
// let arr1 = [10,20,30,40,50] // arr1 = address(1000)


// let arr2 = arr1 // address(1000) // shallow copy

// // arr1[0] = 100

// arr2[4] = 500


// console.log("arr1",arr1)
// console.log("arr2",arr2)



// let a = 10
// b = a  // 10 

// a = 50 

// console.log("a",a) // 50
// console.log("b",b) // 10


// shallow copy 

// let arr1 = [10,20,30,40,50] // arr1 = address(1000)


// let arr2 = [...arr1] 

// // for(let i = 0; i<arr1.length; i++){
// //     // arr1[i] => number
// //     arr2[i] = arr1[i] // numbers are gettting copied

// // }

// arr1[0] = 100

// console.log("arr1",arr1)
// console.log("arr2",arr2)



// let arr1 = [10,20,30,[40,50], 60,70,80] // arr1 = address(1000)

// let arr2=[]
// for(let i = 0; i<arr1.length; i++){
//     // arr1[i] => 10,20,30,[40,50], 60,70,80
//     // console.log("arr1[i]",arr1[i], typeof arr1[i])
//     // arr2[i] = arr1[i] // numbers are gettting copied
//     arr2[i] = arr1[i]

// }

// arr1[3][0] = 1000

// console.log("arr1",arr1)
// console.log("arr2",arr2)


// 1st way: 
// structuredClone => It doesnot work on version below 17.2


let arr1 = [10,[20,[30,40],50], [60,70],80]

let arr2 = structuredClone(arr1) 

arr1[1][1][0] = 1000

console.log("arr1",arr1)
console.log("arr2",arr2)