import React from 'react';
import './App.css';


class App extends React.Component {

  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clickBtn1: 0,
      clickBtn2: 0,
      clickBtn3: 0,
    };
  };

  handleClick() {
    this.setState((prevenState) => ({
      clickBtn1: prevenState.clickBtn1 + 1,
    }));
  };
  
  handleClick2() {
    this.setState((prevenState) => ({
      clickBtn2: prevenState.clickBtn2 + 1,
    }))
  };
  
  handleClick3() {
    this.setState((prevenState) => ({
      clickBtn3: prevenState.clickBtn3 + 1,
    }))
  };

  render() {
    return (
      <div>
      <button onClick={ this.handleClick }>Primer buttom | NumClick = { this.state.clickBtn1 }</button>
      <button onClick={ this.handleClick2 }>Segundo buttom | NumClick= { this.state.clickBtn2 }</button>
      <button onClick={ this.handleClick3 }>Terceiro buttom | NumClick= { this.state.clickBtn3 }</button>
      </div>
    );
  }
}

export default App;
