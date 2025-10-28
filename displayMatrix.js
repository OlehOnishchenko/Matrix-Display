const numbers = [
  [5,8,7],
  [4,5,6],
  [7,4,2],
];

for (let row = 0; row < numbers.length; row++) {
  for (let col = 0; col < numbers[row].length; col++) {

    
    console.log(${row + 1} ${col + 1} = ${numbers[row][col]});
  }
}
