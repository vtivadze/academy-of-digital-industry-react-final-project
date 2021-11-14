import { CountryListItem } from '../components/CountryListItem';

export const Main = ({ countries }) => {
  console.log(countries[0]);
  return (
    <main className="main">
      {countries.map(country => (
        <CountryListItem country={country} key={country.cca2} />
      ))}
    </main>
  );
};
