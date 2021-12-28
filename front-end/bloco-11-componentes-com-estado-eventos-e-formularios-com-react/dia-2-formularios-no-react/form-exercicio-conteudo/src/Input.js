import React from "react";
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { type, name, value, handleChange, labelText } = this.props;
    return (
      <div>
        <label>
          { labelText }
          <input
            type={ type }
            name={ name }
            value={ value }
            onChange={ handleChange }
            />
        </label>
      </div>
    );
  };
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.node,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Input;