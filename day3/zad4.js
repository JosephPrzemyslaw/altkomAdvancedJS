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

// 1) copy key by key
const simple = {
    name: "Joseph",
    age: 40,
}

const simpleClone = {
    name: simple.name,
    age: simple.age,
}

// 2) spread
const simpleSpreadClone = {...simple};

// 3) Object.assign
const simpleAssignClone = Object.assign({}, simple)

// 4) JSON.stringify + JSON.parse

const simpleJSONclone = JSON.parse(JSON.stringify(simple))

// 5) structuredClone
const simpleStructuredClone = structuredClone(simple);
