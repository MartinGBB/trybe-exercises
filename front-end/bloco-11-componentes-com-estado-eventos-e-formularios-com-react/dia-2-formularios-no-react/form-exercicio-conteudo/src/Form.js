import React from 'react'
// import './App.css';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';

class Form extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estado: 'Seleccione',
      name: '',
      vaiComparecer: false,
      description: '',
    };
  };
  
    handleChange = ({ target }) => {
      const { name } = target
      const value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({
        [name]: value,
      });
    };

  render() {
    const { estado, name, vaiComparecer, description } = this.state;

    return (
      <div className="App">
        <h1>Formulario de pratica</h1>
        <form>

            <Select
              labelText="Seleccione estado"
              name="estado"
              value={ estado }
              handleChange={ this.handleChange }
            />

            <Input
              labelText="Nome"
              name="name"
              type="text"
              value={ name }
              handleChange={ this.handleChange }
            />

            <Input
              labelText="Vou compadecer"
              type="checkbox"
              name="vaiComparecer"
              value={ vaiComparecer }
              handleChange={ this.handleChange }
            />

            <Textarea
            labelText="de uma descripção de você:"
            name="description"
            value={ description }
            handleChange={ this.handleChange }
            />
        </form>
      </div>
    );
  }
};

export default Form;
