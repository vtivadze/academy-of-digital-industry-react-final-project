import { useState } from 'react';
import { Header, Main } from './layout';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState();

  return (
    <div className="App">
      <Header setCountries={setCountries} setError={setError} />
      <Main countries={countries} error={error} />
    </div>
  );
}

export default App;
