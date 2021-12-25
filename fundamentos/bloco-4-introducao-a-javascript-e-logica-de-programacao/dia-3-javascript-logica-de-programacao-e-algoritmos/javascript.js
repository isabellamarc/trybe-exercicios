// 1
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);

// 2
let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
}

console.log(reverseWord);

// ou
let word = 'tryber';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord);

// 3
let array = ['java', 'javascript', 'python', 'html', 'css'];

let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  }
}

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  }
}

console.log(biggestWord);
console.log(smallestWord);

// 4
let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);

// Exercicio 1 Bônus
/*
let n=5;
let asterisco="*";
let linha="";
for (let i=0; i<n; i++){
  linha=linha+asterisco;
}
for (let i=0; i<n; i++){
  console.log(linha);
}
*/

// Exercicio 2
/*
let n=5;
let asterisco="*";
let linha="";
for (let i=0; i<=n; i++){
  console.log(linha);
  linha=linha+asterisco;
}
*/

// Exercicio 3
/*
let n=5;
let asterisco="*";
let linha="";
let posicao=n;
for (let i=0; i<n; i++){
  for(let coluna=0; coluna<=n; coluna++){
    if (coluna<posicao){
      linha=linha+" ";
    } else{
      linha=linha+asterisco;
    }
  }
  console.log(linha);
  linha="";
  posicao-=1;
}
*/

// Exercicio 4
/*
let n=5;
let linha="";
let asterisco="*";

let meio=(n+1)/2;
let esquerdo=meio;
let direito=meio;

for (let i=0; i<=meio; i++){
  for (let coluna=0; coluna<=n; coluna++){
    if (coluna>esquerdo && coluna <direito){
      linha=linha+asterisco;
    } else {
      linha=linha+" ";
    }
  }
  console.log(linha);
  linha="";
  direito+=1;
  esquerdo-=1;
}
*/

// exercicio 5
/*
let n = 7;
let meio = (n + 1) / 2;
let esquerdo = meio;
let direito = meio;
let asterisco = "*";
for (let linha = 1; linha <= meio; linha += 1) {
  let outputLinha = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == esquerdo || col == direito || linha == meio) {
      outputLinha += asterisco;
    } else {
      outputLinha += ' ';
    }
  }
  esquerdo -= 1;
  direito += 1;
  console.log(outputLinha);
}
*/

// exercicio 6
/*
let divisores = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisores += 1;
}

if (divisores === 2){
  console.log(numberToCheck + ' é primo');
} else {
  console.log(numberToCheck + ' não é primo');
}
*/