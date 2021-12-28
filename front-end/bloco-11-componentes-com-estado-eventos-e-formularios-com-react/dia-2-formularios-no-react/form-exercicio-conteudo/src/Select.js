import React from "react";
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, value, handleChange, labelText } = this.props;
    const estados = ['Minas Gerais', 'São Paulo', 'Roraima', 'Santa Catarina']
    return (
      <div>
        <label>
          { labelText }
          <select
              name={ name }
              value={ value }
              onChange={ handleChange }
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

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Select;