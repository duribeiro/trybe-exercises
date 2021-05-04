var paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

let newTitle = document.getElementById('page-title')
newTitle.innerText = 'Título dinâmico';

let newParagraph = document.getElementById('second-paragraph')
newParagraph.innerText = 'Aqui está meu parágrafo escrito de forma dinâmica com JS';
// paragraphs[0].style.backgroundColor = 'red'

let paragraphs = document.getElementsByClassName('paragraph')

// window.getComputedStyle(paragraphs[0]).backgroundColor = 'rgb(29, 100, 29)'

// window.getComputedStyle(paragraphs[0]).getPropertyValue('background-color') = 'rgb(029, 100, 029)'

console.log(window.getComputedStyle(paragraphs[0]).getPropertyValue('background-color'))

console.log(window.getComputedStyle(paragraphs[0]).backgroundColor)
