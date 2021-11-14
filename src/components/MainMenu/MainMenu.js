import { useState, useEffect } from 'react';
import { fetchRegionCountries } from '../../api/fetchRegionCountries';
import { MainMenuItem } from '../MainMenuItem';
import { Regions } from '../../data/Regions';
import { saveItem } from '../../helpers/localStorage';

export const MainMenu = ({ setCountries, setError }) => {
  const [region, setRegion] = useState('Europe');

  useEffect(() => {
    fetchRegionCountries(region)
      .then(countries => {
        saveItem('countries', countries);
        setCountries(countries)
      })
      .catch(error => setError(error.message));
  }, [region]);

  return (
    <nav className="main-menu">
      <ul className="mine-menu__container">
        {Regions.map(region => (
          <MainMenuItem key={region} region={region} setRegion={setRegion} />
        ))}
      </ul>
    </nav>
  );
};
