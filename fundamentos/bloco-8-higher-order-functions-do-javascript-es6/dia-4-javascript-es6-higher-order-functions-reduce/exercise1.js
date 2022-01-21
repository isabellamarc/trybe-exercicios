const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
//return arrays.reduce((array, indice) => `[${arrays[0]},${arrays[1]},${arrays[2]}]` );
  return arrays.reduce((acc, array) => acc.concat(array), []);
}
console.log(flatten(arrays));