import { Component } from 'react';
import { Link } from 'react-router-dom';
class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    const { id } = this.props.match.params;
    return (
      <div>
        <p> { greetingsMessage }, My awesome Users component </p>
        <p>id: { id }</p>
        <Link to='/'>voltar</Link>
      </div>
    );
  }
}

export default Users;
