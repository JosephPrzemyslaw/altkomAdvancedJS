const obj = {
	age: 40,
	name: "Joseph",
	present() {
		console.log(`Name: ${this.name}. Age: ${this.age}`);
	}
}

obj.present();

const show = obj.present;
show();

const display = obj.present.bind(obj);
display();

