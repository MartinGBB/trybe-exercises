import { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    // const { name, password } = this.props;
    // console.log(name, password)
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/users/:id' render={((props) => <Users { ...props } greetingsMessage="Good Morning" />)} />
          <Route path='/about' component={ About } />
          <Route exact path='/' component={ Home } />
          <Route
            path='/stict-access'
            render={((props) => <StrictAccess { ...props }
              user={ { username: 'Joao', password: '1234'} } />)}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
