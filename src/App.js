import './App.css';
import Data from './components/vaccinData';
import { VaccinProvider } from './providers/VaccinContext';

function App() {
  return (
    <VaccinProvider>
      <div className="App">
        <Data />
      </div>
    </VaccinProvider>
  );
}

export default App;
