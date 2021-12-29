import { Component } from 'react';
import './App.css';
import { BrowserRouter } from  'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <p>Minha app</p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
