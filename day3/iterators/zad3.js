// Zaimplementuj metodę odpowiadającą Symbol.iterator obiektu wbudowangeo Number tak aby pęlta for of drukowała kolejne cyfry liczby

// [...1234] -> [4, 3, 2, 1]
// [...0] -> [0]
// [...40] -. [4, 0]

const num = new Number(0);

num[Symbol.iterator] = function () {
    let num = this.valueOf();
    let isFirstRunZero = true;

    function isZeroCaseAndFristRun() {
        return this.valueOf() && isFirstRunZero;
    }

    return {
        next: function () {
            const digit = num % 10;
            num =  Math.floor(num / 10);
            const done = num === 0 && digit === 0 && !isZeroCaseAndFristRun();
            isFirstRunZero = false;

            return {
                done, // done: done
                value: digit,
            }
        }
    }
}

console.log([...num])