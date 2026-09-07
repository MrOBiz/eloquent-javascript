console.log("EX 1");

class Vec {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(vec){
        let newX = this.x + vec.x;
        let newY = this.y + vec.y;

        return new Vec(newX, newY);
    }

    minus(vec){
        let newX = this.x - vec.x;
        let newY = this.y - vec.y;

        return new Vec(newX, newY);
    }

    get length(){
        let distance = 0;
        return distance = Math.sqrt(this.x**2 + this.y**2);
    }
} 


//common function version
function makeVec(x, y){
    let vec = {};
    vec.x = x;
    vec.y = y;

    return vec;
}
//review how to add methods to prototype 
//see prototype chain

//BOOK SOLUTION
//same as my class

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

console.log(makeVec(1, 2));










console.log("EX 2");

class Group {

    constructor(){
        this.group = new Array();
    }
    
    static from(arr){
        let group = new Group;
        for(let elt of arr){
            group.add(elt);
        }
        return group;
    }

    add(val){
        if(this.group.indexOf(val) === -1){ 
            this.group.push(val); 
        }
    }

    delete(val){
        this.group = this.group.filter(v => v !== val);
    }

    has(val){
        return this.group.includes(val);
    }
}


//BOOK SOLUTION
/* class Group {
  #members = [];

  add(value) {
    if (!this.has(value)) {
      this.#members.push(value);
    }
  }

  delete(value) {
    this.#members = this.#members.filter(v => v !== value);
  }

  has(value) {
    return this.#members.includes(value);
  }

  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
} */

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false









console.log("EX 3");






/* for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
} */
// → a
// → b
// → c









console.log("EX 4 — iterable Range");

// Make this work:
// for (let n of new Range(1, 4)) console.log(n);
// → 1
// → 2
// → 3
// → 4
// Inclusive: 1 and 4 both count.
// Empty: Range(3, 1) yields nothing.
// Keep the current number on the iterator, not on the Range.

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    // TODO: [Symbol.iterator]() { return a new RangeIterator for this range }
}

class RangeIterator {
    constructor(from, to) {
        this.current = from;
        this.to = to;
    }

    next() {
        if(this.current > this.to){
            return {done: true};
        }
        let value = this.current;
        this.current += 1;
        return {value, done: false};
    }
}

let finger = new RangeIterator(1, 4);
console.log(finger.next());
console.log(finger.next());
console.log(finger.next());
console.log(finger.next());
console.log(finger.next());


let range = new Range(1, 4);
// let it = range[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// for (let n of range) {
//     console.log(n);
// }
// console.log([...new Range(1, 4)]); // [1, 2, 3, 4]
// console.log([...new Range(5, 5)]); // [5]
// console.log([...new Range(3, 1)]); // []









console.log("EX 5 — iterable myTrip");

// myTrip is array-like AND a hiking route. Those two "length"s already
// coexist. Add a third interface: iterable, yielding waypoint NAMES only.
//
// for (let stop of myTrip) console.log(stop);
// → Lankwitz
// → Babelsberg
//
// Do not yield 21500. Do not change length / [length] / 0 / 1.

const length = Symbol("length");

let myTrip = {
    length: 2,
    0: "Lankwitz",
    1: "Babelsberg",
    [length]: 21500
    // TODO: you can put [Symbol.iterator]() { ... } in here (needs a comma above)
};

// TODO: or attach it after:
// myTrip[Symbol.iterator] = function() { ... };

console.log(myTrip.length);      // 2  (waypoint count, string key)
console.log(myTrip[length]);     // 21500  (meters, symbol key)

// let tripIt = myTrip[Symbol.iterator]();
// console.log(tripIt.next());
// console.log(tripIt.next());
// console.log(tripIt.next());
// for (let stop of myTrip) {
//     console.log(stop);
// }
// console.log([...myTrip]); // ["Lankwitz", "Babelsberg"]

// stretch: add a third stop without breaking the iterator
// myTrip[2] = "Potsdam";
// myTrip.length = 3;
// console.log([...myTrip]); // ["Lankwitz", "Babelsberg", "Potsdam"]