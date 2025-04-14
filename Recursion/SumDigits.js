/**
 * @param {int} number
 * @return {int}
 */
const sumDigits = (number) => {
    // Your solution here
    
    if(number <=0 ) return 0;

    console.log("===>",number % 10, Math.floor(number/10))

    return (number % 10 ) + sumDigits(Math.floor(number/10))
  }

console.log(sumDigits(11)) // 1 + 1 = 2
console.log(sumDigits(123)) // 1 + 2 + 3 = 6
console.log(sumDigits(5510)) // 5 + 5 + 1 + 0 = 11