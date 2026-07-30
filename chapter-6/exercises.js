// Your code here.
class Vec {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }
    plus(vector){
        let sumX = this.x + vector.x;
        let sumY = this.y + vector.y;
        return new Vec(sumX, sumY);
    }
    minus(vector){
        let diffX = this.x - vector.x;
        let diffY = this.y - vector.y;
        return new Vec(diffX, diffY); 
    }
    get length(){
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5