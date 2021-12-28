import React from 'react';
import Piadas from './Piadas';

class ListPiadas extends React.Component {
  constructor() {
    super()
    this.state = {
      piada: undefined,
      savePiada: [],
      loading: false,
    };
  };

  async fetchJoke() {
    this.setState(
      { loading: true },
      async () => {
        const url = 'https://icanhazdadjoke.com/';
        const requestHeaders = { headers: { Accept: 'application/json' } }
        const requestReturn = await fetch((url), requestHeaders);
        const requestObj = await requestReturn.json();
        const { joke, id } = requestObj;
        this.setState({
          piada: joke, id,
          loading: false
        });
      }
    )
  };
  
  componentDidMount() {
    this.fetchJoke();
  }
  render() {
    const { piada, id, loading } = this.state;

    return (
      <div>
        <Piadas piada={ piada } id={ id } loading={ loading } />
      </div>
    );
  };
};

export default ListPiadas;
