import './App.css';
import { Towns } from './components/map'

function App() {
  return (
      <div className="App">
        <h1>Vaccinatiegraad per gemeente</h1>
        <Towns />
      </div>
  );
}

export default App;
