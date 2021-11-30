import './App.css';
import { Filter } from './components/filter';
import { Legend } from './components/legend';
import { Towns } from './components/map'

function App() {
  return (
      <div className="App">
        <h1>Vaccinatiegraad per gemeente</h1>
        <section>
          <Towns />
          <div className='rightSide'>
          <Filter />
          <Legend />
          </div>
        </section>
      </div>
  );
}

export default App;
