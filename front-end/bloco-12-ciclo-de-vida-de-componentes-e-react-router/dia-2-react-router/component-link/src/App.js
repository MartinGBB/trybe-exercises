import { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from  'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={ Home } />
          <Route path='/about' component={ About } />
          <Route path='/users' component={ Users } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
