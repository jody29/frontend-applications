import './App.css';
import { Provider } from './components/provider';
import { Legend } from './components/legend';
import { Towns } from './components/map'
import Filters from './components/filters';
import Progres from './components/progres';

const App = () => {
  return (
    <Provider>
      <div className="App">
        <h1>Vaccinatiegraad per gemeente</h1>
        <section>
          <Progres />
          <Towns />
          <div className='rightSide'>
          <Filters />
          <Legend />
          </div>
        </section>
      </div>
      </Provider>
  );
}

export default App;
