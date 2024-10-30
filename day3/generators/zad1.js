// Przepisz używając generatora odpowiadający kod z katalogu 'iterators'

const test = new String("Agnieszka");

test[Symbol.iterator] = function* () {
    for(let i = this.length -1; i >= 0; i--) {
        yield this[i];
    }
}

for(let char of test) console.log(char);
