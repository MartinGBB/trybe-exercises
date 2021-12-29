import { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <p>Component About</p>
        <Link to='/'>voltar</Link>
      </div>
    );
  }
}

export default About;
