
import './App.css';
// import { ApiContext } from './contexts/ApiProvider';
// import { useContext } from 'react';
import { ApiSearchForm } from './components/ApiSearchForm';
import PokemonTeamDisplay from './components/PokemonTeamDisplay';

function App() {
  //-- using hook to get data
  
  // let apiUrl = useContext(ApiContext);

  return (
    <div className="App">

      {/* <h1>{apiUrl}</h1> */}
      <ApiSearchForm />

      <PokemonTeamDisplay />
    </div>
  );
}

export default App;
