// Przepisz konstruktor w taki sposób aby odpowiadał klasie

// function Triangle(a, b, c) {
//     this.a = a;
//     this.b = b;
//     this.c = c;
// }

// Triangle.areSame(tr1, tr2) {
//     return tr1.a === tr2.a && tr1.b === tr2.b && tr1.c === tr2.c;
// }
// Triangle.prototype.getPerimeter = function() {
//     return this.a + this.b + this.c;
// }

// Triangle.prototype.getArea = function() {
//     const perim = this.getPerimeter() / 2;

//     return Math.sqrt(perim * (perim - this.a) * (perim - this.b) * (perim - this.c));
// }


class Triangle {
    static counter = 0;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.isPainted = false;
        this.paintingPhase = 0;
        Triangle.counter ++;
    }
    paint() {
        if(!this.isPainted) {
            //...
        }
    }
    getPerimeter () {
        return this.a + this.b + this.c;
    }
    
    getArea () {
        const perim = this.getPerimeter() / 2;
    
        return Math.sqrt(perim * (perim - this.a) * (perim - this.b) * (perim - this.c));
    }
    static areSame(tr1, tr2) {
        return tr1.a === tr2.a && tr1.b === tr2.b && tr1.c === tr2.c;
    }
    static getCounter() {
        return Triangle.counter;
    }
}

for (let i = 0;i < 1000; i++) {
    new Triangle(3, 4, 5);
}

// // triangle.js

// export function getPerimeter (a, b, c) {
//     return a + b + c;
// }

// export function getArea (a, b, c) {
//     const perim = getPerimeter(a, b, c) / 2;

//     return Math.sqrt(perim * (perim - this.a) * (perim - this.b) * (perim - this.c));
// }

// export function areSame(tr1, tr2) {
//     return tr1.a === tr2.a && tr1.b === tr2.b && tr1.c === tr2.c;
// }

// export function paint(a, b, c) {
//     //...
// }

// // figures.js

// import {getPerimeter} from "./triangle.js"

// const perim = getPerimeter(3,4,5);

// debugger
