import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0,
    };

    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
    this.handleClickBtn2 = this.handleClickBtn2.bind(this);
  };

  handleClickBtn1 = () => (
    console.log('btn-1')
  );
  
  handleClickBtn2 = () => (
    console.log('btn-2')
  );
  
  handleClickBtn3 = () => (
    console.log('btn-3')
  );

  render() {
    return (
    <div>
      <button onClick={ this.handleClickBtn1 }>botão-1</button>
      <button onClick={ this.handleClickBtn2 }>botão-2</button>
      <button onClick={ this.handleClickBtn3 }>botão-3</button>
    </div>
    );
  };
};

export default App;
