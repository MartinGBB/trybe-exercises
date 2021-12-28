import { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
      loading: true
    };
  };

  async fetchApi() {
    this.setState(
      { loading: true },
      async () => {
      const url = 'https://rickandmortyapi.com/api/character';
      const requestFetch = await fetch(url);
      const requestResult = await requestFetch.json()
        this.setState({
          character: requestResult.character,
          loading: false
        });
    });
  };

  render() {
    const { character, loading } = this.state;
    if (loading) return <p>Loading...</p>
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
