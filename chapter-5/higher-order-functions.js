function repeat(n, action){ 
  for(let i = 0; i < n; i++){
    action(i);
  }
}

//repeat(3, console.log);

let labels = [];
repeat(5, i => labels.push("Unit " + (i + 1)));

console.log(labels);

//FACTORY-FUNCTION
let greaterThan = (n) => m => m > n;
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(4));

//functions that change other functions: 
// DECORATOR OR WRAPPER FACTORIES
function talk(f){
  return (...args) => {
    let result = f(...args);
    console.log("Call with ", args, ", returned ", result);
    return result;
  }
}

talk(Math.min)(3, 2, 5, -7, 1);

//Function that modify control flow:
//CONTROL-FLOW HELPER
function unless(test, then){
  if (!test) then();
}

repeat(3, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});