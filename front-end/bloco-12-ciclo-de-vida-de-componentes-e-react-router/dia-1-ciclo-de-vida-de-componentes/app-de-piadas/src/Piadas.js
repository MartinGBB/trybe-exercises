import React from 'react';

class Piadas extends React.Component {
  render() {
    const { piada, key, loading, saveJoke, storedJoke } = this.props;
    return (
      <div>
        <h1>Jokes</h1>
        { storedJoke.map((joke, index) => <p key={ index }>{ joke }</p>) }
        <p>{ loading ? "Loading..." : '' }</p>
        <p key={ key }>{ piada }</p>
        <button type="button" onClick={ saveJoke }>Save jokes</button>
    </div>
    );
  };
};

export default Piadas;
