//Arrow functions can see the 'this' binding of the scope around them

let finder = {
    find(array){
        return array.some(val => val == this.value);
    },
    value: 5
};

console.log(finder.find([1, 2, 3, 4, 5])); // returns TRUE

console.log(Object.getPrototypeOf(finder) == Object.prototype);
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf(toString));


//Class was introduced in 2015, before all functions could be used to 
//define objects. For this reason, all non-arrow functions start with
//a prototype property holding an empty object
class Dog {
    constructor(type){
        this.type = type;
    }
    speak(line){
        console.log("WOof! " + line);
    }
}

let Spot = new Dog("Happy");
Spot.speak("Shut the F up");

//Private properties
class Secret {
    #getSecret(){
        return "I love marmite";
    }
    interrogate(){
        let doISayIt = this.#getSecret();
        return "never";
    }
}

console.log(new Secret().interrogate());

//We can pass null in Object.create() to make it so that the object 
//doesn't inherit from the Object prototype and can be used as a map

console.log("toString" in Object.create(null)); //FALSE

//Otherwise toString could be recognized a map key

let ages = new Map();
ages.set("Boris", 39);
ages.set("Chang", 13);
ages.set("Julia", 24);

console.log("Boris is " + ages.get("Boris"));
console.log("Unknown is " + ages.get("toString"));