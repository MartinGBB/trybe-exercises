import React from "react";

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

export default Textarea;