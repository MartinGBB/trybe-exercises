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
          character: requestResult.results,
          loading: false
        });
    });
  };

  componentDidMount() {
    this.fetchApi()
  }

  render() {
    const { character, loading } = this.state;
    if (loading) return <p>Loading...</p>
    return (
      <div className="App">
        {
          character.map(({ id, name, image, species, status }) => (
            <div className='container' key={ id }>
            <h1>{ name }</h1>
            <img src={ image } alt='images'/>
            <p>{ species }</p>
            <p>{ status }</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
