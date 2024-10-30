// zaimplementuj deep freeze

const joseph = {
    name: "Joseph",
    age: 40,
    address: {
        city: "Warsaw",
        street: "Pamiatkowa",
        phone: {
            home: "123456789",
            mobile: "012345678",
        }
    }
}
// Object.freeze(joseph);
// Object.freeze(joseph.address)
// joseph.address.city = "Poznan"

function deepFreeze(obj) {
    const keys = Object.keys(obj);
    for(let key of keys) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    }
    Object.freeze(obj);
}

deepFreeze(joseph);

joseph.age = 100;
joseph.address.city = "Poznan";
joseph.address.phone.home = "ABC";

debugger