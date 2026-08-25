console.log("EX 1");
let arrays = [[1, 2, 3], [4, 5], [6]];

let arr = arrays.reduce((acc, elt) => acc.concat(elt), []);
console.log(arr);

//BOOK SOLUTION
//same

// → [1, 2, 3, 4, 5, 6]






console.log("EX 2");

function loop(val, test, update, body){
    while(test(val)){
        body(val);
        val = update(val);
    }

    return;
}


//BOOK SOLUTION
/* function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
} */

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1








console.log("EX 3");


function every(array, test) {
    let total = array.length;
    let current = 0;

    for(let n of array){
        if(test(n)){
            current += 1;        
        }
    }

    return (total === current)? true : false;
}


function everySome(array, test){
    return (array.some(elt => !test(elt)))? false : true;
}


//BOOK SOLUTION
/* function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
} */

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log("\n");

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true








console.log("EX 4");

function dominantDirection(text) {
  return text;
}


//BOOK SOLUTION - not implemented, missing functions
/* function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
} */

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl