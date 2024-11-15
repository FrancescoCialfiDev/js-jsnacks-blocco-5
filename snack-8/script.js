const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

// Primo esempio
// let student = [];
// const studente = students.find((element) => {
//   if (element.name === "Marco Lanci") {
//     student.push(element.class);
//     return true;
//   }
// })
// console.log(student)


// Secondo esempio
// const classe = [students.find((element) => (element.name === "Marco Lanci"))?.class];
// console.log(classe);


// Terzo esempio
let classe = [];
const newArray = [...students].forEach((element) => (element.name === "Marco Lanci") ? classe.push(element.class) : null)
console.log(classe);

// PS
// [...students] crea un nuovo array e riporta tutti gli elementi contenuti nel primo.
// classe.push(...array) aggiunge / concatena gli elementi del primo array con il secondo.





