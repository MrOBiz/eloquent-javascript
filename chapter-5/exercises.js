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