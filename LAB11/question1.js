function getEvenNumbers(arr) {
    return arr.filter((num) => num % 2 === 0);
}

function getOddNumbers(arr) {
    return arr.filter((num) => num % 2 !== 0);
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(getEvenNumbers(numbers)); 
console.log(getOddNumbers(numbers));  
