const appendPokemon = (pokemon) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');

  li.innerHTML = pokemon.name;
  ul.appendChild(li);

  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default;
  li.appendChild(img)


  console.log(pokemon.sprites.front_default);
};

const fetchPokemon = () => {
  // appendPokemon('skirtle')
  // response não é a resposta final é apenas o "indice" do "livro maior" que é a promisse, são informações sobre o statos da requisão.
  // É necessário chamar a função json() apartir de do response, o retorno dessa função é a promisse contendo os dado. Só então é que podemos aplicar o .then e ver os dados individuais, nesse caso o pokemon pesquisado
  fetch('https://pokeapi.co/api/v2/pokemon/squirtle').then((response) => {
    response.json().then((pokemon) => {
      appendPokemon(pokemon);

      fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
        response.json().then((pokemon) => {
          appendPokemon(pokemon);

        })
      });
    })
  });
};

// window.onload vai chamar o fetchPokemon depois que tudo tiver carregado no meu html
window.onload = () => {
  fetchPokemon();
};