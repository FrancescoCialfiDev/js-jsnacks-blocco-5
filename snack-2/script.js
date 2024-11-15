const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

const names = people.filter(element => console.log(element.name));
// Avremmo potuto anche utilizzare un for each considerando che ci viene chiseto solo di stampare i nomi in console. Se avessimodovuto stampare un nuovo array filter sarebbe stata la soluzione migliore ma ponendo element a .name otteniamo lo stesso risultato.