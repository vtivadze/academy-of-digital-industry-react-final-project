import { useState, useEffect } from 'react';
import { fetchRegionCountries } from '../../api/fetchRegionCountries';
import { MainMenuItem } from '../MainMenuItem';
import { Regions } from '../../data/Regions';
import { saveItem } from '../../helpers/localStorage';
import style from './MainMenu.module.css';

export const MainMenu = ({ setCountries }) => {
  const [region, setRegion] = useState('Europe');

  useEffect(() => {
    fetchRegionCountries(region)
      .then(countries => {
        saveItem('countries', countries);
        setCountries(countries)
      })
      .catch(error => console.log(error));
  }, [region, setCountries]);

  return (
    <nav className={`${style.mainMenu}`}>
      <ul className={`${style.mainMenu__container}`}>
        {Regions.map(region => (
          <MainMenuItem key={region} region={region} setRegion={setRegion} />
        ))}
      </ul>
    </nav>
  );
};
