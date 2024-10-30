// Przepisz używając generatora odpowiadający kod z katalogu 'iterators'

const test = new String("The quick brown fox jumps over lazy dog");
test[Symbol.iterator] = function* () {
    const words = this.trim().split(" ");
    for(let word of words) yield word;
}
for(let char of test) console.log(char);
