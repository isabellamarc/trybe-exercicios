// PRÁTICA EX 1
const emailGenerator = (name) => {
  const email = name.toLowerCase().split(' ').join('_');
  return { Nome: name, Email: `${email}@trybe.com` };
};

const newEmployees = (name) => {
  const employees = {
    id1: name('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: name('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: name('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(emailGenerator));

// EX 2
const randomNumber = (number) => {
  
};
const result = () => {};