console.log("EX 1");

function min(a, b){
    let min = (a < b)? a : b;
    return min;
}


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10