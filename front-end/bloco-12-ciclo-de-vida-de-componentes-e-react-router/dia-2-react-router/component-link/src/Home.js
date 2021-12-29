import { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <p>Component Home</p>
        <Link to='/stict-access'>login</Link>
        <Link to='/about'>About</Link>
        <Link to='/users'>Users</Link>
      </div>
    );
  }
} 

export default Home;
