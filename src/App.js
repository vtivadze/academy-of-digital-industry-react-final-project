import { useState } from 'react';
import { Header, Sidebar, Main } from './layout';

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState();

  return (
    <div className="App">
      <Header setCountries={setCountries} setError={setError} />
      <Sidebar setCountries={setCountries} />
      <Main countries={countries} error={error} />
    </div>
  );
}

export default App;
