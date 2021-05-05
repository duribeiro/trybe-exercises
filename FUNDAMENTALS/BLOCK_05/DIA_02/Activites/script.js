// 1. Acesse o elemento elementoOndeVoceEsta .
const elementHere = document.getElementById('elementoOndeVoceEsta')

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elementHere.parentNode.style.color = 'red'
console.log(elementHere.parentNode.style.color);