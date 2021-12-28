import React from 'react'
// import './App.css';
import Input from './Input';

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

          <label>
          Seleccione estado
            <select
            name="estado"
            value={ estado }
            onChange={ this.handleChange }
            >
            <option>seleccione</option>
              <option>Minas Gerais</option>
              <option>Santa Catarina</option>
            </select>
          </label>

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
              nome="vaiComparecer"
              value={ vaiComparecer }
              handleChange={ this.handleChange }
            />

          <label>
            de uma descripção de você:
            <textarea
            name="description"
            value={ description }
            onChange={ this.handleChange }
            />
          </label>
        </form>
      </div>
    );
  }
};

export default Form;
