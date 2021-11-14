import { useState } from 'react';
import { Header, Sidebar, Content, Footer } from './layout';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  return (
    <div className="app">
      <Header setCountries={setCountries} />
      <main className="main">
        <Sidebar setCountries={setCountries} />
        <Content countries={countries}  />
      </main>
      <Footer />
    </div>
  );
}

export default App;
