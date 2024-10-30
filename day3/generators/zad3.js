// Przepisz używając generatora odpowiadający kod z katalogu 'iterators'

// Zaimplementuj metodę odpowiadającą Symbol.iterator obiektu wbudowangeo Number tak aby pęlta for of drukowała kolejne cyfry liczby

// [...1234] -> [4, 3, 2, 1]
// [...0] -> [0]
// [...40] -. [4, 0]

const num = new Number(0);

num[Symbol.iterator] = function* () {
    let num = this.valueOf();
    if (num === 0) {
        yield 0;
        return;
    }

    while(num !== 0) {
        const digit = num % 10;
        num =  Math.floor(num / 10);
        yield digit;
    }
}

console.log([...num])
