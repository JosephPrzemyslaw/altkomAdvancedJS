// Dodaj @@iterator dla pojedynczego obiektu String. W ten sposób nie popsujesz interfejsu String dla innych instancji.
// Zwracany iterator ma generować kolejne słowa występujące w tekście

const test = new String("The quick brown fox jumps over lazy dog");
test[Symbol.iterator] = function () {
    const word = this.trim().split(" ");
    let counter = 0;
    return {
        next: function() {
            return {
                value: word[counter],
                done: counter++ === word.length
            }
        }
    }
}
for(let char of test) console.log(char);
