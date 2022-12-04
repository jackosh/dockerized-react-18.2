import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  // this runs only on `counter` State Updatte
  // Be aware of [counter] dependency
  useEffect(() => {
    console.log(counter)
  }, [counter]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React useState</h1>
      </header>
      <section>
        {counter}
        <button onClick={() => setCounter(counter + 1)} >Count</button>
      </section>
    </div>
  );
}

export default App;
