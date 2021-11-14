import { CountryDataItem } from '../CountryDataItem/CountryDataItem';
import { getContinents, getCurrencies } from '../../helpers/functions';
import style from './CountryListItem.module.css';

export const CountryListItem = ({ country }) => {
  return (
    <section className={`${style.countryListItem}`}>
      <div
        className={`${style.countryFlag}`}
        style={{ backgroundImage: `url(${country.flags.svg})` }}>
      </div>
      <div className={`${style.countryData}`}>
        <h1><a href="#" title={country.name.official}>{country.name.official}</a></h1>
        <div className={`${style.countryDataContainer}`}>
          <CountryDataItem
            description="Continent:"
            value={getContinents(country.continents)}
          />
          <CountryDataItem description="Capital:" value={country.capital} />
          <CountryDataItem description="Area:" value={`${country.area} km2`} />
          <CountryDataItem
            description="Currencies:"
            value={getCurrencies(country.currencies)}
          />
          <CountryDataItem description="Country code:" value={country.cca3} />
        </div>
        </div>
    </section>
  );
};
