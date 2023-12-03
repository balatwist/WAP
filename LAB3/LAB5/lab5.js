
"use strict";

// 1. max()
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(5, 8));

// 2. maxOfThree()
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}
console.log(maxOfThree(12, 6, 9));

// 3. isVowel()
function isVowel(char) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

// 4. sum() and multiply()
function sum(numbers) {
  let result = 0;
  for (let num of numbers) {
    result += num;
  }
  return result;
  
}
console.log(sum([1, 2, 3, 4]));

function multiply(numbers) {
  let result = 1;
  for (let num of numbers) {
    result *= num;
  }
  return result;
}
console.log(multiply([1, 2, 3, 4]));

// 5. reverse()
function reverse(str) {
  return str.split('').reverse().join('');
}
console.log(reverse('jag testar'));

// 6. findLongestWordLength()
function findLongestWordLength(words) {
  let maxLength = 0;
  for (let word of words) {
    maxLength = max(maxLength, word.length);
  }
  return maxLength;
}
console.log(findLongestWordLength(['apple', 'banana', 'orange']));

// 7. filterLongWords()
function filterLongWords(words, i) {
  return words.filter(word => word.length > i);
}
console.log(filterLongWords(['apple', 'banana', 'orange'], 6));

// 8. computeSumOfSquares()
function computeSumOfSquares(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

console.log(computeSumOfSquares([1, 2, 3]));

// 9. printOddNumbersOnly()
function printOddNumbersOnly(numbers) {
  numbers.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
}
printOddNumbersOnly([1, 2, 3, 4, 5]); 

// 10. computeSumOfSquaresOfEvensOnly()
function computeSumOfSquaresOfEvensOnly(numbers) {
  return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num ** 2, 0);
}
console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

// 11. Using Array.reduce() for sum and multiply
function sumUsingReduce(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sumUsingReduce([1, 2, 3, 4]));

function multiplyUsingReduce(numbers) {
  return numbers.reduce((acc, num) => acc * num, 1);
}
console.log(multiplyUsingReduce([1, 2, 3, 4]));

// 12. printFibo()
function printFibo(n, a, b) {
  let fiboSeq = [a, b];
  while (fiboSeq.length < n) {
    fiboSeq.push(fiboSeq[fiboSeq.length - 1] + fiboSeq[fiboSeq.length - 2]);
  }
  console.log(fiboSeq.join(', '));
}
printFibo(6, 0, 1);

