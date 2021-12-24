let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1
for (let i = 0; i < numbers.length; i += 1 ) { 
  console.log(numbers[i]);
}

// 2
for (let i = 0; 1 < numbers.length; i += 1) {
  let sum += numbers[i];
  console.log(sum);
}

// 3
for (let i = 0; 1 < numbers.length; i += 1) {
  let sum += numbers[i];
  let average = (sum / numbers.length);
  console.log(average);
}

// 4
for (let i = 0; 1 < numbers.length; i += 1) {
  let sum += numbers[i];
  let average = (sum / numbers.length);
  if (average > 20) {
    console.log('valor maior que 20');
  } else {
    console.log('valor menor ou igual a 20');
  }
}

// 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. 
//Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. 
//Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}
console.log(higherNumber);

// 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
}

if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
}

// 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. 
//Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. 
//Para resolver esse problema vamos iniciar a variavel com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1

let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  }
}
console.log(smallestNumber);

// 8
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}
console.log(numbers);

// 9
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};

// Bônus
// 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

// 2
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
console.log(numbers);

// 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}
console.log(newArray);