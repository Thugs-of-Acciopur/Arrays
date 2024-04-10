let arr = [10,20,30,40,50,60] // mutable

// arr[0] = 10000

// console.log(arr)

// for(i = 0 ; i<=arr.length-1; i++){
//      let sqaure = arr[i]**2
//      arr[i] = sqaure
// }

// console.log(arr)

let newArr = []

for(i = 0 ; i<=arr.length-1; i++){
     let sqaure = arr[i]**2
     newArr[i] = sqaure
}

console.log(newArr)