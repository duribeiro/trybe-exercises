import React from "react";

const people = (firstName, lastName) => `${firstName} ${lastName}`;

const fullName = people('Eduardo', 'Ribeiro')

console.log(fullName);

// const textJSX = 'Hello, JSX';
// const element = <h1>Hello, {textJSX}</h1>;

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

const textJSX = <h2>Hello, JSX</h2>;


class myComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, I'm {fullName}</h1>
        {textJSX}
        <p>Sou apaixonado por tecnologia e meu maior sonho é usar a tecnologia e educação para transformar a vida das pessoas.</p>
        <p>Sou apaixonado por tecnologia e meu maior sonho é usar a tecnologia e educação para transformar a vida das pessoas.</p>
      </div>
    )
  }
}

export default myComponent
