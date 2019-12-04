// Arrays methods
const numbers = [3, 5, 'five', 'six', 7];
let rv;
const returnedValue = rv;
// const returnedValue = numbers.push('six');return the lengths of array
// const returnedValue = numbers.unshift(1); return the lengths of array
// const returnedValue = numbers.shift(); return the  which shiffted of array
// const returnedValue = numbers.pop(); return the which poped of array
// const returnedValue = numbers.splice(0, 2); // return the deleted in array, delete from 0 index 2 elements [3,5]
// rv = numbers.splice(0, 2, 'four', 'three', 'three'); //return the deleted in array, other params is added in the array
// rv = numbers.slice(0, 2); //return coppied array
// rv = numbers.slice(); //return coppied array, in this case whole array
rv = numbers.slice(); //return coppied new array, in this case whole array
rv = numbers.concat(['ten', 'eleven']); //return new array,and add array's elements as an element to main array

console.log(numbers);
console.log(rv);
