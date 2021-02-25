// 1.1- Hello world
// console.log("Hello world !")

// 1.2- Hello ~name~
// name = prompt("Entrez votre nom");
// console.log("Bonjour, " + name);

// 2.1- Factorielle
// let number = prompt("Entrez un nombre");
// let finalNumber = 0;
// for(let pas = 0; pas < number; pas ++ ){
// 	finalNumber += number * pas;
// }
// console.log(finalNumber);

// 2.2- Pyramide
// let height = prompt("Entrez la hauteur de la pyramide");

// for(let i = 1; i <= height; i ++ ){
// 	spaces = ""
// 	hashtags = ""
// 	for(let j = 0; j < height - i; j++){
// 		spaces += " "
// 	}
// 	for(let k = 0; k < i; k++){
// 		hashtags += "#"
// 	}
// 	console.log(spaces + hashtags);
// }

// 3.1- Analyse 1
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log(entrepreneurs[0].year);

console.log("#### Les entrepreneurs nés dans les années 70 : ");
entrepreneurs.forEach( entrepreneur => {
	if (entrepreneur.year >= 1970 && entrepreneur.year < 1980){
		console.log(`- ${entrepreneur.first} ${entrepreneur.last}, né(e) en ${entrepreneur.year}`);
	}
})

console.log("#### Voici les identitées des enetrepreneurs");
let identities = new Array();
entrepreneurs.forEach( entrepreneur => {
	identities.push(entrepreneur.first + " " + entrepreneur.last);
})
console.log(identities);

console.log("#### Voici l'age qu'ont (/qu'auraient) les entrepreneurs aujourd'hui");
entrepreneurs.forEach( entrepreneur =>{
	console.log(`${entrepreneur.first + " " + entrepreneur.last} à (aurait eu) aujourd'hui ${2021 - entrepreneur.year} ans `)
})












