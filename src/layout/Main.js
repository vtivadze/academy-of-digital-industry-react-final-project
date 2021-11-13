import { CountryListItem } from '../components/CountryListItem';

export const Main = ({ countries }) => {
  
  return (
    <main className="main">
      {countries.map(country => (
        <CountryListItem country={country} key={country.cca2} />
      ))}
    </main>
  );
};
