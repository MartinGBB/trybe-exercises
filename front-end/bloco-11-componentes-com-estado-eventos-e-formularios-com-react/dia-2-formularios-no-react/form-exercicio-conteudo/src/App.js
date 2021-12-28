import React from 'react'
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      vaiComparecer: false,
      description: '',
    };
  };
  
    handleChange = (event) => {
      this.setState({
        nome: event.target.value,
        vaiComparecer: event.target.value,
        description: event.target.value,
      });
    };

  render() {
    const { name, vaiComparecer, description } = this.state;

    return (
      <div className="App">
        <h1>Formulario de pratica</h1>
        <form>

          <label>
          Seleccione estado
            <select>
            <option>seleccione</option>
              <option>Minas Gerais</option>
              <option>Santa Catarina</option>
            </select>
          </label>

          <label>
            nome
            <input
              name="nome"
              type="text"
              value={ name }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            vou comparecer
            <input
            type="checkbox"
            name="vaiComparecer"
            value={ vaiComparecer }
            onChange={ this.handleChange }
            />
          </label>

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

export default App;
