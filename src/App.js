import './App.css';
import CounterClass from './CounterClass'
import CounterFunctional from './CounterFunctional'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CounterClass/>
        <CounterFunctional/>
      </header>
    </div>
  );
}

export default App;
