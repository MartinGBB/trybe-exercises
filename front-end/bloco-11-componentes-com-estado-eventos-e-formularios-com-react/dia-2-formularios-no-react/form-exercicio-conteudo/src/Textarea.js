import React from "react";
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { name, value, handleChange, labelText } = this.props;
    return (
      <div>
        <label>
          { labelText }
          <textarea
            name={ name }
            value={ value }
            onChange={ handleChange }
            />
        </label>
      </div>
    );
  };
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Textarea;