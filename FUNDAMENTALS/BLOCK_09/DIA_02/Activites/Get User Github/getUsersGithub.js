// primeira coisa a fazer é o fetch na api
const API_GITHUB = 'https://api.github.com/users';

// agora preciso colocar eses usuários na tela
// fazer uma função que recebe o ítem
const showUsersInScreen = (user) => {
  const sectionUsers = document.querySelector('.users');

  const card = document.createElement('div');
  card.className = 'card';

  const nameText = document.createElement('div');
  const img = document.createElement('img');

  const btn = document.createElement('button');
  btn.className = 'btn-user';

  nameText.innerText = user.login
  img.src = user.avatar_url
  btn.innerText = 'Selecionar'

  card.appendChild(nameText);
  card.appendChild(img);
  card.appendChild(btn);
  sectionUsers.appendChild(card);

}

// const getUserGitHub = () => {
//   // o objetivo dessa função é apenas pegar os usuários fazendo o fetch
//   return fetch(`${API_GITHUB}`)
//     .then((response) => response.json())
//     .then((users) => users)
//     .catch((error) => error)
// }

const getUserGitHub = async () => {
  try {
    const response = await fetch(`${API_GITHUB}`);
    const data = await response.json();
    return data
  } catch(e) {
    return e
  }
}


window.onload = async () => {

  // getUserGitHub()
  //   .then((users) => users.forEach((user) => showUsersInScreen(user)))
  //   .catch((error) => console.log(`Deu um erro na api, o erro foi: ${error}`))

  try {
    const usuarios = await getUserGitHub();
    usuarios.forEach((user) => showUsersInScreen(user));
  } catch (error) {
    console.log(`Deu um erro na api, o erro foi: ${error}`);
  }
}