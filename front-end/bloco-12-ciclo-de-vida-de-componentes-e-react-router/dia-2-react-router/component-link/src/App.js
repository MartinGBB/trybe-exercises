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
        <switch>
          <Route path='/users/:id' render={((props) => <Users { ...props } greetingsMessage="Good Morning" />)} />
          <Route path='/about' component={ About } />
          <Route exact path='/' component={ Home } />
        </switch>
      </BrowserRouter>
    );
  }
}

export default App;
