import { Component } from 'react';
import { Link } from 'react-router-dom';
class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    return (
      <div>
        <p> { greetingsMessage }, My awesome Users component </p>
        <Link to='/'>voltar</Link>
      </div>
    );
  }
}

export default Users;
