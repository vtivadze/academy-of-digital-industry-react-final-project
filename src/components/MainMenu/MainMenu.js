import { useState, useEffect } from 'react';
import { fetchRegionCountries } from '../../api/fetchRegionCountries';
import { MainMenuItem } from "../MainMenuItem";

export const MainMenu = ({setCountries, setError}) => {
  const [region, setRegion] = useState('Europe');

  useEffect(() => {
    fetchRegionCountries(region)
      .then(countries => setCountries(countries))
      .catch(error => setError(error.message));
  }, [region]);

  return (
    <nav className="main-menu">
        <ul className="mine-menu__container">
          <MainMenuItem region="Africa" setRegion={setRegion} />
          <MainMenuItem region="Americas" setRegion={setRegion} />
          <MainMenuItem region="Asia" setRegion={setRegion} />
          <MainMenuItem region="Europe" setRegion={setRegion} />
          <MainMenuItem region="Oceania" setRegion={setRegion} />
        </ul>
      </nav>
  );
}