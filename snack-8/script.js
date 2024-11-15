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

let student = [];
const studente = students.find((element) => {
  if (element.name === "Marco Lanci") {
    // student.push(element.class); 
    return true;
  }
})
console.log(student)

const classe = [students.find((element) => (element.name === "Marco Lanci")).class];
console.log(classe);


