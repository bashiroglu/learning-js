// Arrays methods
// const numbers = [3, 5, 'five', 'six', 7];
const numbers2 = [3, 44, 5, 8, 7, 11];
const numbersAddedone = [];
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
// rv = numbers.slice(); //return coppied new array, in this case whole array
// rv = numbers.concat(['ten', 'eleven']); //return new array,and add array's elements as an element to main array
// rv = numbers.indexOf('five'); // return index of element which firstly find
// rv = numbers.indexOf('five', 3); // return index of elements if not find -1 and second param is define where start to search
// rv = numbers.lastIndexOf('five', 3); // return index of element which lastly find
// rv = numbers.lastIndexOf('five', 3); // return index of element which lastly find
// rv = numbers.find((num, i, numbers) => num === 3); // return index of element which lastly find
// rv = numbers.findIndex((num, i, numbers) => num === 3); // return index of element which lastly find
// rv = numbers.includes(3); // return boolean value based on exist or not
// rv = numbers.includes(3); // return index of element which lastly find
/* rv = numbers.forEach((num, i, numbers) => {
  numbersAddedone.push(num + 1);
}); // kind of for loop */

/* rv = numbers.map((num, i, numbers) => {
  return num + 1;
}); // kind of for loop should return something different from foreach */

/* rv = numbers2.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a == b) {
    return 0;
  } else {
    return -1;
  }
}); // return sorted array, also change the main array */
/* rv = numbers2.filter((num, i, numbers) => num > 9); 
// filter array based on condition, don't touch main array */
// rv = numbers2.reverse(); // reverse main array and  return the same

//  rv = numbers2.reduce((pv, cv, ci, ma) => {
//     return pv + cv;
//   }); hand function to get one value from array, this can be sum or etcdon't touch main array
/* const word = 'hello, my name is Abdulla';
rv = word.split(' '); // make array out of string */
/* 
const word = 'hello, my name is Abdulla';
rv = word.split(' '); // make array out of string
console.log(rv);
rv = rv.join(','); // make string out of array*/

console.log(numbers2);
console.log(rv);
