// Przepisz odczyt pliku korzystający z callback API na promsie API

// const {readFile} = require("fs");
// function handleReadFile(err, data) {
//     if(err) {
//         console.error("Sth went wrong", err.message);
//     } else {
//         console.log(data);
//     }
// }

// const url = "godziny.txt";
// readFile(url, {encoding: "utf8"}, handleReadFile);

const {readFile} = require("fs");
const path = require("path");

function readFilePromise(url) {
    return new Promise((resolve, reject) => {
        function handleReadFile(err, data) {
            if(err) {
                reject(err.message);
            } else {
                resolve(data);
            }
        }
        
        readFile(url, {encoding: "utf8"}, handleReadFile);
    })
}

const filePath = path.join("day3", "test.txt");
readFilePromise(filePath)
    .then(data => console.log(data))
    .catch(err => console.error(err));
    // .then(data => console.log(data), err => console.error(err.message));

// try {
//     const out = await readFilePromise("godziny.txt");
//     console.log(out);
// } catch(err) {
//     console.error(err.message);
// }