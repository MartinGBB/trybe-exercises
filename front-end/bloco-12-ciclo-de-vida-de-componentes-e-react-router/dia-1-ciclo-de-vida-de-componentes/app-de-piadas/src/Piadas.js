import React from 'react';

class Piadas extends React.Component {
  render() {
    const { piada, key, loading } = this.props;
    if (loading) return <p>Loading</p>
    return (
      <div>
        <h1>Piadas</h1>
        <p key={ key }>{ piada }</p>
        <button>seguinte piada</button>
    </div>
    );
  };
};

export default Piadas;
