const acordando = () => "Acordando!!";
const cafe = () => "Bora toma café!!";
const dormir = () => "Partiu dormir!!";
const doingThings = (func) => console.log(func);

doingThings(acordando());
doingThings(cafe());
doingThings(dormir());

let teste = {
  tes: "te",
  name: "edu",
};
console.log(teste);
delete teste.tes
console.log(teste);
