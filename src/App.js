import './App.css';
import { useVaccin } from './components/vaccinData';

const name = 'hello'

function App() {

  const vaccinData = useVaccin()

  return (
    <div className="App">
      <h1>Worldmap</h1>
      <h2>{name}</h2>
      <h2>{vaccinData}</h2>
    </div>
  );
}

export default App;
