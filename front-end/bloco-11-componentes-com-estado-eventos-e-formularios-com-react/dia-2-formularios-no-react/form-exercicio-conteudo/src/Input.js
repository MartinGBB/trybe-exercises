import React from "react";

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

export default Input;