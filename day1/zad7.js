// Skorzystaj z konceptu prywatności danych aby zapobiec przypadkowemu nadpisywaniu a,b oraz c
class Triangle {
    static counter = 0;
    #a;
    #b;
    #c;
    constructor(a, b, c) {
        this.#a = a;
        this.#b = b;
        this.#c = c;
        Triangle.counter ++;
    }
    getPerimeter () {
        return this.#a + this.#b + this.#c;
    }
    
    getArea () {
        const perim = this.getPerimeter() / 2;
    
        return Math.sqrt(perim * (perim - this.#a) * (perim - this.#b) * (perim - this.#c));
    }
    static areSame(tr1, tr2) {
        return tr1.a === tr2.a && tr1.b === tr2.b && tr1.c === tr2.c;
    }
    static getCounter() {
        return Triangle.counter;
    }
}

const tr = new Triangle(3, 4, 5);
tr.#a = "antek"; // wygeneruje blad
const perim = tr.getPerimeter();
debugger