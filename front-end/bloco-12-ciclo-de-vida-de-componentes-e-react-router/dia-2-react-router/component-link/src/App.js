import { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from  'react-router-dom';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={ Home } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
