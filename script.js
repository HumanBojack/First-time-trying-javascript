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
// const entrepreneurs = [
//   { first: 'Steve', last: 'Jobs', year: 1955 },
//   { first: 'Oprah', last: 'Winfrey', year: 1954 },
//   { first: 'Bill', last: 'Gates', year: 1955 },
//   { first: 'Sheryl', last: 'Sandberg', year: 1969 },
//   { first: 'Mark', last: 'Zuckerberg', year: 1984 },
//   { first: 'Beyonce', last: 'Knowles', year: 1981 },
//   { first: 'Jeff', last: 'Bezos', year: 1964 },
//   { first: 'Diane', last: 'Hendricks', year: 1947 },
//   { first: 'Elon', last: 'Musk', year: 1971 },
//   { first: 'Marissa', last: 'Mayer', year: 1975 },
//   { first: 'Walt', last: 'Disney', year: 1901 },
//   { first: 'Larry', last: 'Page', year: 1973 },
//   { first: 'Jack', last: 'Dorsey', year: 1976 },
//   { first: 'Evan', last: 'Spiegel', year: 1990 },
//   { first: 'Brian', last: 'Chesky', year: 1981 },
//   { first: 'Travis', last: 'Kalanick', year: 1976 },
//   { first: 'Marc', last: 'Andreessen', year: 1971 },
//   { first: 'Peter', last: 'Thiel', year: 1967 }
// ];

// console.log(entrepreneurs[0].year);

// console.log("#### Les entrepreneurs nés dans les années 70 : ");
// entrepreneurs.forEach( entrepreneur => {
// 	if (entrepreneur.year >= 1970 && entrepreneur.year < 1980){
// 		console.log(`- ${entrepreneur.first} ${entrepreneur.last}, né(e) en ${entrepreneur.year}`);
// 	}
// })

// console.log("#### Voici les identitées des enetrepreneurs");
// let identities = new Array();
// entrepreneurs.forEach( entrepreneur => {
// 	identities.push(entrepreneur.first + " " + entrepreneur.last);
// })
// console.log(identities);

// console.log("#### Voici l'age qu'ont (/qu'auraient) les entrepreneurs aujourd'hui");
// entrepreneurs.forEach( entrepreneur =>{
// 	console.log(`${entrepreneur.first + " " + entrepreneur.last} à (aurait eu) aujourd'hui ${2021 - entrepreneur.year} ans `)
// })

// sortedUsers = entrepreneurs.sort(function(a, b) {
// 	if (a.last < b.last) {
// 		return -1;
// 	} else if (a.last > b.last){
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// });
// console.log(sortedUsers) 


// 3.2 Books statistics
// const books = [
//   { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
//   { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
//   { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
//   { title: 'Les frères Karamazov', id: 450911, rented: 55 },
//   { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
//   { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
//   { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
//   { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
//   { title: 'La disparition', id: 364445, rented: 33 },
//   { title: 'La lune seule le sait', id: 63541, rented: 43 },
//   { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
//   { title: 'Guerre et Paix', id: 748147, rented: 19 }
// ];

// console.log("#### Est ce que tous les livres ont été loués au moins une fois ?");
// neverRentedBook = false
// books.forEach( book => { if (book.rented === 0){ neverRentedBook = true }});

// if (neverRentedBook === true){
// 	console.log("Tous les livres n'ont pas été loués au moins une fois");
// } else {
// 	console.log("Chacun des livres a été loué au moins une fois");
// }

// console.log("#### Quel est le livre le plus emprunté ?");
// maxRents = books[0]
// books.forEach( book => { if (book.rented >= maxRents.rented ){maxRents = book}});
// console.log(maxRents);

// console.log("#### Quel est le livre le moins emprunté ?");
// minRents = books[0];
// books.forEach( book => { if (book.rented <= minRents.rented ){minRents = book}});
// console.log(minRents);

// console.log("#### Trouve le livre avec l'id 873495");
// console.log(books.filter(book => book.id === 873495)[0])

// console.log("#### Supprime le livre à l'id 133712")
// updatedBooks = books.filter(book => book.id != 133712);
// console.log(updatedBooks);

// console.log("#### Triez les livres par ordre alphabétique")
// sortedBooks = updatedBooks.sort(function(a, b) {
// 	if (a.title < b.title) {
// 		return -1;
// 	} else if (a.title > b.title) {
// 		return 1;
// 	} else {
// 		return 0;
// 	}
// });
// console.log(sortedBooks);

// 4.1 ARN decoder
// composition = new Array
// let arn = "CCUCGCCGGUACUUCUCG"
// arn = arn.match(/.../g)

// arn.forEach(code => {
// switch (code) {
// 	case "UCU":
// 	case "UCC":
// 	case "UCA":
// 	case "UCG":
// 	case "AGU":
// 	case "AGC":
// 		composition.push("Sérine");
// 		break;
// 	case "CCU":
// 	case "CCC":
// 	case "CCA":
// 	case "CCG":
// 		composition.push("Proline");
// 		break;
// 	case "UUA":
// 	case "UUG":
// 		composition.push("Leucine");
// 		break;
// 	case "UUU":
// 	case "UUC":
// 		composition.push("Phénylalanine");
// 		break;
// 	case "CGU":
// 	case "CGC":
// 	case "CGA":
// 	case "CGG":
// 	case "AGA":
// 	case "AGG":
// 		composition.push("Arginine");
// 		break;
// 	case "UAU":
// 	case "UAC":
// 		composition.push("Tyrosine");
// 		break;


// 	default:
// 		console.log("Entrée non reconnue");
// 		break;
// }})

// console.log(composition.join("-"))

// 4.2 Teenager bot

// message = prompt("Tu veux quoi ?")

// if (message.slice(-1) === "?"){
// 	console.log("Ouais ouais ...");
// } else if (message.length === 0 ){
// 	console.log("Eh j'ai juré réveille toi");
// } else if (message === message.toUpperCase()){
// 	console.log("Calme toi boloss jrigole pas avec toi");
// } else if (message.indexOf("fortnite") != -1){
// 	console.log("Ptite game là ?");
// } else {
// 	console.log("Balek")
// }









