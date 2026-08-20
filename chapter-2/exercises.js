/* console.log("EX 1");
let string = "";

for(let i = 1; i < 8; i++){
    string = string + "#";
    console.log(string);
}

//Book solution
for(let string = "#"; string.length < 8; string += "#"){
    console.log(string);
}






console.log("EX 2");
for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FIZZBUZZ");
    }else if(i % 3 === 0){ 
        console.log("FIZZ");
    }else if(i % 5 === 0){
        console.log("BUZZ");
    }else{
        console.log(i);
    }
}

//Book Solution
for(let i = 1; i <= 100; i++){
    let output = "";
    if (i % 3 === 0) output += "FIZZ";
    if (i % 5 === 0) output += "BUZZ";
    console.log(output || i);
} */





console.log("EX 3");

const size = 4;
for(let i = 0; i < size; i++){
    let string = "";
    for(let j = 0; j < size; j++){
        if((i+j) % 2 == 0){ 
            string += "#";
        }else{
            string += " ";
        }
    }
    console.log(string);
}

//Book solution
//let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);