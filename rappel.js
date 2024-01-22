// Exercice 1: Déclarer des variables et afficher leur type
let texte = "Hello";
let nombre = 10;
console.log(typeof texte); // "string"
console.log(typeof nombre); // "number"

// Saut de ligne
console.log("\n");

// Exercice 2: Calculer la somme, la soustraction, la multiplication et la division de deux nombres
let a = 5, b = 3;
console.log(a + b); // 8
console.log(a - b); // 2
console.log(a * b); // 15
console.log(a / b); // 1.666...


console.log("\n");

// Exercice 3: Comparer deux nombres et afficher le plus grand
let x = 15, y = 15;
if (x > y) {
    console.log(x);
} else if (x < y) {
    console.log(y);
} else {
    console.log("Les deux nombres sont égaux");
}


console.log("\n");

// Exercice 4: Utiliser une boucle for pour afficher les nombres de 1 à 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


console.log("\n");

// Exercice 5: Utiliser une boucle while pour afficher les nombres de 10 à 1
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}


console.log("\n");

// Exercice 6: Créer une fonction qui retourne la moyenne
function moyenne(a, b) {
    return (a + b) / 2;
}
console.log(moyenne(3, 7)); // Affichera 5


console.log("\n");

// Exercice 7: Créer un tableau de fruits et les afficher avec une boucle
let fruits = ["pomme", "banane", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


console.log("\n");

// Exercice 8: Créer un objet représentant une voiture et afficher ses propriétés
let voiture = {
    marque: "Opel",
    modele: "Astra",
    annee: 2020
};
console.log(`Marque: ${voiture.marque}, Modèle: ${voiture.modele}, Année: ${voiture.annee}`);


console.log("\n");

// Exercice 9: Déclarer une fonction anonyme et une fonction fléchée qui affiche "Bonjour"
let bonjourAnonyme = function() {
    console.log("Bonjour");
};
bonjourAnonyme();

let bonjourFlechee = () => console.log("Bonjour ");
bonjourFlechee();


console.log("\n");

// Exercice 10: Utiliser l'instruction switch pour afficher la couleur
let couleur = "rouge";

switch (couleur) {
    case "bleu":
        console.log("La couleur est bleu.");
        break;
    case "rouge":
        console.log("La couleur est rouge.");
        break;
    case "vert":
        console.log("La couleur est vert.");
        break;
    default:
        console.log("Couleur non reconnue.");
        break;
}
