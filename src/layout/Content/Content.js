import { CountryListItem } from '../../components/CountryListItem';
import style from './Content.module.css';

export const Content = ({ countries }) => {
  return (
    <div className={`${style.content}`}>
      {countries.map(country => (
        <CountryListItem country={country} key={country.cca2} />
      ))}
    </div>
  );
};
