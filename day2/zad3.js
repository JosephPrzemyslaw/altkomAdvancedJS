// Sprawdz głębokość call stack'a

let counter = 0;
function test() {
    counter ++;
    try {
        test();
    } catch(err) {
        console.log(counter)
    }
}

test();