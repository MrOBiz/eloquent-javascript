let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((acc, current) => acc.concat(current, [])));


// → [1, 2, 3, 4, 5, 6]






// Your code here.
function loop(n, test, update, body){
    while(test(n)){
        body(n);
        n = update(n);
    }

    return body("Failed");
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1







function every(array, test) {
  // Your code here.
    let n = 0;                 
    for(let element of array){
            if(test(element)){
                n += 1
            }
    }

    return (n === array.length)? true : false; 

    //return !array.some(element => !test(element)); NOT RECOGNIZED
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


