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

// 