import React from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

// Renderização da página usando classes

class App extends React.Component {
  render() {
    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      },
    ];

    return (
      <div>
        {users.map((user) =>
        <UserProfile user={user} />)}
      </div>
    );
  }
}

export default App;

// Renderização de página usando função
// -------------------------------------
// function hello2(name, lastName) {
//   return `Hello ${name} ${lastName}`;
// }

// console.log(hello2('Eduardo', 'Ribeiro'));

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name} {this.props.lastName}</h1>
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//       </header>
//       <div>
//         <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat starin" />
//       </div>
//       <div>
//         <Greeting name="Eduardo" lastName="Ribeiro" />
//       </div>
//     </div>
//   );
// }


