function calcSum() {
    const MAX = 100_000; // ES2021 => https://github.com/tc39/proposal-numeric-separator const powers = [];
    const powers = [];
    const sums = [];

    function sum() {
        const sumOut = powers.reduce((acc, currVal) => acc += currVal, 0);
        return sumOut;
    }

    for (let i = 0; i < MAX; i++) {
        powers.push(i ** 2);
        sums.push(sum(powers));
    }

    result = sums.at(-1); // ES2022
    self.postMessage({
        result: result
    });
}

self.addEventListener('message', event => {
    const data = event.data;
    if(data.cmd === "calcSum") calcSum();
});
