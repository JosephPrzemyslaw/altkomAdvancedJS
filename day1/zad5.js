// Zaproponuj funkcję dzięki której będziesz mógł stworzyć obiekt typu Triangle
// Udostępnij funkcje getPerimeter oraz getArea
// Możesz wykorzystać przykład konstruktora Person

// function Person(age, name) {
//     // this = {}
//     this.setAge(age);
//     this.setName(name);
// }

// Person.prototype.setAge = function(newAge) {
//     this.age = newAge;
// }
// Person.prototype.getAge = function() {
//     return this.age;
// }
// Person.prototype.setName = function(newName) {
//     this.name = newName;
// }
// Person.prototype.getName = function() {
//     return this.age;
// }

// const zuza = new Person(40, "zuza");

function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}

Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
}

Triangle.prototype.getArea = function() {
    const perim = this.getPerimeter() / 2;

    return Math.sqrt(perim * (perim - this.a) * (perim - this.b) * (perim - this.c));
}

const trArr = [];
for(let i = 0; i < 100; i++) {
    trArr.push(new Triangle(3 + i, 4 + i, 5 + i));
}
debugger