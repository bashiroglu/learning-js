// function sayName(name) {
//   return 'name:' + name;
// }
// sayName('Abdulla')
// Abdulla is an argument
// name is parametr

// we use rest parametrs we we don't know how many parametr we will need

// const someUp = numbers => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(someUp([1,4,5]));

// rest parametrs it creates array instantly
// const someUp = (...numbers) => {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// };
// console.log(someUp(1, 4, 5));
// we
// const someUp = (...numbers) => {
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// };
// console.log(someUp(1, 4, 5,6)); // result is 16
// const someUp2 = (a, b, ...numbers) => { // first 2 element will
//     // be used for other perpuses that is why result is 11
//     let sum = 0;
//     for (const num of numbers) {
//         sum += num;
//     }
//     return sum;
// };
// console.log(someUp2(1, 4, 5,6));
//   // //   // //   // //   // //   // //   // //   // //   // //   //
//   //
//   //
//   // //   // //   // //   //
// old method we don't use
// it is obligatory to use function keyword and
//   // //   // //   // //   // //   // //   //
// const someUp = function() {
//     let sum = 0;
//     for (const num of arguments) {// don't use outdated
//         sum += num;
//     }
//     return sum;
// };
// // console.log(someUp(1, 4, 5,6));
// let a = 'da' + 2;
// if (!isNaN(a) || a > 3) {
//   // //   // //   // //   // //   // //   // //   // //   // //   //
//   // because left side is first what you write first does matter
//   // //   // //   // //   // //   // //   // //   // //   // //   //

//   console.log('done');
// }
//   // //   // //   // //   // //   // //   //
//   // //   // //   // //   // //   // //   //

// try to use const values if you will check that in future if statement and refere to that one not to string
//   // //   // //   // //   // //   // //   //

// for  loop
const a = [1, 2, 3, 6, 7, 8];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }
let i = 9;
// while (i < a.length ) {
//   console.log(a[i]);
//   i++;
// }
// do {
//   console.log(a[4]);
//   i++;
// } while (i < a.length);

// let car = { type: 'Fiat', model: '500', color: 'white' };

// for (const key in car) {
//   console.log(`${key} ${car[key]}`);
// }
// for of loop
// for (const element of a) {
//   console.log(element);
// }
let sum = 0;
for (let i = 2; i <= 6; i++) {
  sum = sum + i;
  console.log(i);
  console.log(sum);
}
// console.log(sum);
