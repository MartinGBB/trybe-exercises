import { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    const { username, password } = user;
    if (username !== "Joao" || password !== '1234') {
      alert('Access denied');
      return <Redirect to='/'/>
    }

      return (
      <div>
        <p> {`Welcome, ${username}!`} </p>
        <Link to='/'>voltar</Link>
      </div>
    );
  }
};

export default StrictAccess;
