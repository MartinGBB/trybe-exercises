import React from "react";

class Select extends React.Component {
  render() {
    const { name, value, handleChange, labelText } = this.props;
    const estados = ['Minas Gerais', 'São Paulo', 'Roraima', 'Santa Catarina']
    return (
      <div>
        <label htmlFor="select">
          { labelText }
          <select
              name={ name }
              value={ value }
              onChange={ handleChange }
              id= "select"
          > 
          <option value={ value }>{ value }</option>
            {
            estados.map((estado, index) => (
              <option key={ index } value={ estado }>{ estado }</option>
              ))
            }
          </select>
        </label>
      </div>
    );
  };
};

export default Select;