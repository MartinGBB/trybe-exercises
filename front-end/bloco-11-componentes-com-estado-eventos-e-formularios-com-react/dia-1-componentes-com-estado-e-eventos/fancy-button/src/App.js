import React from 'react'
import './App.css';

const handleClickBtn1 = () => (
  console.log('btn-1')
);

const handleClickBtn2 = () => (
  console.log('btn-2')
);

const handleClickBtn3 = () => (
  console.log('btn-3')
);

class App extends React.Component {
  render() {

    return (
    <div>
      <button onClick={ handleClickBtn1 }>botão-1</button>
      <button onClick={ handleClickBtn2 }>botão-2</button>
      <button onClick={ handleClickBtn3 }>botão-3</button>
    </div>
  );
  }
}

export default App;
