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

    }
    
    add(){

    }

    delete(){

    }

    has(){

    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false