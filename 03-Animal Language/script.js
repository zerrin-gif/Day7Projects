//Convert any text to whale language! 
let input = 'a whale of a deal!'
console.log(input.length)
let vowelArr = ['a','e','i','o','u'];
let resultArray = [];
for(let i = 0; i < input.length; i++){
  for(let j = 0; j < vowelArr.length; j++){
    if (input[i] === vowelArr[j] ) {
      resultArray.push(input[i]);
    }
    }
  if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join('').toUpperCase());

// compare the input letter to every letter in the vowels array.
// resultArray.push(input[i]+j);