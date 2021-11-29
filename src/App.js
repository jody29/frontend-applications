import './App.css';
import { useData } from './components/useData';
import { useWorldData } from './components/useWorldData';
import { Towns } from './components/map'
// import Data from './components/vaccinData';
// import { VaccinProvider } from './providers/VaccinContext';

function App() {
  const data = useData()

  return (
      <div className="App">
        <Towns />
      </div>
  );
}

export default App;
