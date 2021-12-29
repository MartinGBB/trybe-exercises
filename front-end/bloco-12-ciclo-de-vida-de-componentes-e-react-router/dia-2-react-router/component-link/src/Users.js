import { Component } from 'react';
import { Link } from 'react-router-dom';
class Users extends Component {
  render() {
    return (
      <div>
        <p>Component Users</p>
        <Link to='/'>voltar</Link>
      </div>
    );
  }
}

export default Users;
