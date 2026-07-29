let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(arrays.reduce((flat, current) => flat.concat(current, [])));


// → [1, 2, 3, 4, 5, 6]


// Your code here.


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1