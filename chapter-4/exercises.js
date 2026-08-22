console.log("EX 1");

function range(start, end, step){
    let arr = [];
    if(start < end){
        let i = start;
        while(i <= end){
            arr.push(i);
            i += (step ?? 1);
        }
    }else if(start > end){
        let i = start;
        while(i >= end){
            arr.push(i);
            i -= (-step ?? 1);
        }
    } 

    return arr;
}

function sum(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}


//BOOK SOLUTION
/* function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
} */


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

console.log(range(25, 2, -3));
console.log(sum(range(25, 2, -3)));
//added to tryout my solution


console.log("EX 2");

function reverseArray(arr){
    let newArray = new Array;
    for(let i = 0; i < arr.length; i++){
        newArray.push(arr[(arr.length -1) -i]);
    }

    return newArray;
}

function reverseArrayInPlace(arr){
    let newArray = new Array;
    for(let i = 0; i < Math.floor(arr.length/2); i++){
        let t = arr[i];
        arr[i] = arr[(arr.length -1) -i];
        arr[(arr.length -1) -i] = t;
    }
}

//BOOK SOLUTION: same with inverse loop for reverseArray()

let myArray = ["A", "B", "C", "D", "E"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]




console.log("EX 3");