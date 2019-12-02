// const person = {
//   age: 32,
//   skills: ['English', 'Russian']
// };

// const person2 = { ...person };
// person2.skills.push('Polish');
// person2.age = 34;
// console.log(person2);
// interesting
// console.log(person);
// interesting
// spread operator
const person = {
  age: 32,
  skills: ['English', 'Russian']
};

const person2 = { ...person, skills: [...person.skills] };
person2.skills.push('Polish');
person2.age = 34;
console.log(person2);
console.log(person);
// interesting// interesting// interesting// interesting// interesting// interesting

// desturturing
const personwithassign = Object.assign({}, person);
console.log(personwithassign);
const { age, skills } = person;
const { age: ageperson, } = person;
const [skill1, skill2] = skills;
console.log(skill2);
console.log(ageperson);
console.log(age); // this will give error after this sturcute const { age: ageperson, skills } = person;

// if ('age' in person) {
//   const { age: ageperson } = person;
//   console.log(ageperson);
// }
