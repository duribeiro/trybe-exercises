const appendPokemon = (pokemon) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');

  li.innerHTML = pokemon;

  ul.appendChild(li);
};

const fetchPokemon = () => {
  // appendPokemon('skirtle')
  // response não é a resposta final é apenas o "indice" do "livro maior" que é a promisse, são informações sobre o statos da requisão.
  const api = fetch('https://pokeapi.co/api/v2/pokemon/squirtle').then((response) => {
    console.log(response);
  } );
  console.log(api);
};

// window.onload vai chamar o fetchPokemon depois que tudo tiver carregado no meu html
window.onload = () => {
  fetchPokemon();
};