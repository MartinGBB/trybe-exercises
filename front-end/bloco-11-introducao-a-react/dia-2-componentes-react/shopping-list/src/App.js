import React from 'react'
import './App.css';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const list = shoppingList.map((item, index) => (
      <li key={ index }>{ item }</li>
    ));
  return (
    <div>
      <h1>Lista de compras</h1>
      <ul>
        { list }
      </ul>
    </div>
  );
  }
}

export default App;
