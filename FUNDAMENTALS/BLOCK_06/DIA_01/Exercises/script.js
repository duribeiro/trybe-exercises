const selectState= document.querySelector('#select-state');
const arrayState = ['Amazonas', 'Amapá']

for (let index = 0; index < arrayState.length; index +=1) {
  const optionState= document.createElement('option');
  selectState.appendChild(optionState);
  optionState.innerText = arrayState[index];
}


console.log(optionState);
console.log(selectState);