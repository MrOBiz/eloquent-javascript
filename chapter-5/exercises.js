let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
let arr = arrays.concat(arrays[0], arrays[1], arrays[2]);

function putTogether(arr){
    let array;
    for(let element of arr){
        array.push(element);
    }
    return array;
}
console.log(arr);


// → [1, 2, 3, 4, 5, 6]