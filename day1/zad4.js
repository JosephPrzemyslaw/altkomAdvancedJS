// Dopisz do implementacji funkcję, która tworzy losowy obiekt Person. Wybiera jedno imię z John, Miriam, Alex oraz wiek 30, 35 lub 50 lat
function Person(age, name) {
    if (!new.target) {
        return new Person(age, name);
    }
    this.setAge = function(newAge) {
        this.age = newAge;
    }
    this.getAge = function() {
        return this.age;
    }
    this.setName = function(newName) {
        this.name = newName;
    }
    this.getName = function() {
        return this.name;
    }

    this.setAge(age);
    this.setName(name);
}

Person.createRandom = function () {
    const getRandindex = tab => Math.floor(Math.random() * tab.length);
     const names = ['John', 'Miriam', 'Alex'];
     const ages = [30, 35, 50];
     const age = ages[getRandindex(ages)];
     const name = names[getRandindex(names)];

     return new Person(age, name);
}

const person = Person.createRandom();
debugger;
