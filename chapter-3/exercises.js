console.log("EX 1");

function min(a, b){
    let min = (a < b)? a : b;
    return min;
}


console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10




console.log("EX 2");

const isEven = (x) => {
    if(x === 0) return true;
    else if(x === 1) return false;
    else if(x < 0) return isEven(-x);
    else return isEven(x - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??





console.log("EX 3");

/* function countBs(string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === "B") count += 1 ;
    }
    return count;
} */

function countChar(string, char){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === char) count += 1 ;
    }
    return count;
}


//Book solution
function countBs(string){
    return countChar(string, "B");
}


console.log(countBs("BOB"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4