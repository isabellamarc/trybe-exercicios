// SPREAD OPERATOR
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maçã', 'banana', 'melão'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['melancia', 'goiaba', 'damasco'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additionalItens];
};

console.log(fruitSalad(specialFruit, additionalItens));

// REST
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

// OBJECT DESTRUCTURING

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};
// 1
const trappisEnterprise = { ...user, ...jobInfos};

console.log(trappisEnterprise);
// 2
const output = `Hi, my name is ${user.name}, I'm ${user.age} years old and I'm ${user.nationality}. I work as a ${jobInfos.profession} and my squad is ${jobInfos.squadInitials}-${jobInfos.squad}.`;
console.log(output);

// ARRAY DESTRUCTURING
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá
// Produza o mesmo resultado acima, porém utilizando array destructuring
// 1
const [saudacao1, saudacao0] = saudacoes;
console.log(saudacao0(saudacao));
// 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
const likeThings = [comida, animal, bebida];
console.log(likeThings);

// 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo
[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

// DEFAULT DESTRUCTURING
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
//console.log(getNationality(person));
//const { nationality = 'Brazilian' } = person;
console.log(getNationality(person));

// OBJECT PROPERTY SHORTHAND
//const getPosition = (latitude, longitude) => ({
  //latitude: latitude,
  //longitude: longitude});

//console.log(getPosition(-19.8157, -43.9542));

const getPosition = (latitude, longitude) => {
  return {
    latitude,
    longitude,
  };
};
console.log(getPosition(-19.8157, -43.9542));

// DEFAULT PARAMETERS
const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8));