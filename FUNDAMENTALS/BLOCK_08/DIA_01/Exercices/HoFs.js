// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .


const person = {
  nomeCompleto: 'edu',
  email: 'edu@trybe.com',
};

const dataObj = (obj, key, value) => {
  obj[key] = value;
  return obj;
}

dataObj(person, 'teste', 12)
dataObj(person, 'idade', 34)

delete thisIsObject.teste

console.log(dataObj(person, 'pais', 'Brasil'));

// const funPerson = (name, chave, valor) =>  {
//   name = {
//     nomeCompleto: name,
//     email: `${name}@trybe.com`,
//   };
//   name[chave] = valor;
//   return name;
// }

// const callback = (chave, valor) => {
//   name[chave] = valor;
// }

// // console.log(name.email);
// console.log(funPerson('edu', 'idade', 28));
// console.log(funPerson('oi', 'idade', 28));
// console.log(funPerson('oi', 'idade', 28));

// console.log(funPerson('edu', callback ('idade', 28)));


// callback('idade', 28);
// callback('país', 'Brasil');

// console.log(person);
// console.table(person);


// const newEmployees = () => {
//   const employees = {
//     id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };