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
    this.setState((estadoAnterior, _props) => ({
      btn1: estadoAnterior.btn1 + 1,
    }))
  );
  
  handleClickBtn2 = () => (
    this.setState((estadoAnterior, _props) => ({
      btn2: estadoAnterior.btn2 + 1,
    }))
  );
  
  handleClickBtn3 = () => (
    this.setState((estadoAnterior, _props) => ({
      btn3: estadoAnterior.btn3 + 1,
    }))
  );

  changeColor = (num) => (
    num % 2 === 0 && num !== 0 ? 'green' : 'white'
  );

  render() {
    return (
    <div>
      <button 
        onClick={ this.handleClickBtn1 }
        style={{ backgroundColor: this.changeColor(this.state.btn1) }}
      >
        Button 1 | { this.state.btn1 }
      </button>

      <button
        onClick={ this.handleClickBtn2 }
        style={{ backgroundColor: this.changeColor(this.state.btn2) }}
      >
        Button 2 | { this.state.btn2 }
      </button>

      <button
        onClick={ this.handleClickBtn3 }
        style={{ backgroundColor: this.changeColor(this.state.btn3)}}
      >
        Button 3 | { this.state.btn3 }
      </button>
    </div>
    );
  };
};

export default App;
