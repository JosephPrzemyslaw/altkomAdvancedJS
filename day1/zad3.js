// w lini 5 dopisz kod, kt ory zapewni tworzenie obiektu w przypadku zawołania funkcji jako normalna funkcja (patrz linia 26)

function Person(age, name) {
    if (!new.target) {
        // throw new "Function can be called only as the constuctor";
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

const person1 = new Person(40, "Joseph");
const person2 = Person(30, "Zuza");
debugger