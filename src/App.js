import logo from './logo.svg';
import './App.css';
import { ApiContext } from './contexts/ApiProvider';
import { useContext } from 'react';

function App() {
  //-- using hook to get data
  let apiUrl = useContext(ApiContext);

  return (
    <div className="App">

      <h1>{apiUrl}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
