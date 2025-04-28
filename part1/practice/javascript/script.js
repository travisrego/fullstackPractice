const pi = 3.14;
let varPi = 3.14; 

const areaOfCircle = (radius) => {
    return pi * radius * radius;
}

console.log(areaOfCircle(5));

const t = [1, 2, 3]
count = 1; 
console.log(t.pop()); 

t.push(4);
console.log(t.push(3));
console.log(t.concat([5, 6])); 
console.log(t);

t.forEach(element => {
    console.log(count++);
});

t.sort();

let t1 = t.concat([5, 6]);

const m1 = t1.map(element => element*element);
const m2 = t1.map(element => '<p>' + element + '</p>');
console.log(m2);

const [first, second, third, ...rest]= m1; 

const object1 = {
    name: 'Travis Rego', 
    age: 21,
    education: 'University',
    greet: () => {
        console.log('Hello, my name is ' + object1.name);
    }
}   

object1.greet();

object1.growOlder = () => {
    object1.age++;
}

console.log(object1.age);
object1.growOlder();
console.log(object1.age);

object1.address = '123 Ave'
object1['number'] = 123456789

console.log(object1)

const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

const calculator = {
    sum,
    subtract,
    multiply
}

class Person {
    constructor(name,age) {
        this.name = name; 
        this.age = age
    }
    greet() {
        console.log("Hello, my name is " + this.name);
        console.log("Age is " + this.age);
    }
}

const person1 = new Person('Travis Rego', 21);
person1.greet();