// Napisz iteator obiketu string, ktory generuje literki od konca

const test = new String("Agnieszka");

// for(let char of test) console.log(char);

test[Symbol.iterator] = function () {
    // this odnosi sie do stringa
    const length = this.length;
    let counter = this.length - 1;
    let that = this;

    return {
        next: function() {
            return {
                value: that[counter],
                done: counter-- === -1
            }
        }
    }
}

for(let char of test) console.log(char);