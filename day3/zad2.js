// wygeneruj unikatowe panstwa

const countryNameArr = ["USA", "Canada", "USA", "Mexico", "Canada", "USA", "Brazil", "Argentina", "Canada", "USA", "Mexico", "Brazil", "USA", "UK", "Canada", "Germany", "USA", "France", "Canada", "USA"];
const countrySet = new Set;

for(let country of countryNameArr) {
    countrySet.add(country);
}

