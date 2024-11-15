const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


const incremento = numbers.map((element) => copyArray = element + 1);
console.log(incremento);

//Oppure avremmo potuto scrivere 

// const incremento = numbers.map((element) => {
//     let copyArray = element + 1
//     return copyArray;
// });
// console.log(incremento);