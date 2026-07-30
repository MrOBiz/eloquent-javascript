//Arrow functions can see the 'this' binding of the scope around them
//If some's argument was written using the 'function' keyword, it
//wouldn't work
let finder = {
    find(array){
        return array.some(val => val == this.value);
    },
    value: 5
};

console.log(finder.find([1, 2, 3, 4, 5])); // returns TRUE