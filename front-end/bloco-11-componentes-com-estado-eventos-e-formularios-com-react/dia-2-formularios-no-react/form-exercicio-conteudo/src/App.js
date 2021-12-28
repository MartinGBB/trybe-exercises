import React from 'react'
import './App.css';

class App extends React.Component {


  render() {

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
            />
          </label>

          <label>
            vou comparecer
            <input
            type="checkbox"
            name="vaiComparecer"
            />
          </label>

          <label>
            de uma descripção de você:
            <textarea
            name="description"
            />
          </label>
        </form>
      </div>
    );
  }
};

export default App;
