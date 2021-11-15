import { useEffect, useState } from 'react';
import { getItem } from '../../helpers/localStorage';
import { FilterInput } from '../FilterInput/FilterIniput';
import style from './FilterForm.module.css';

export const FilterForm = ({ setCountries }) => {
  const [countryName, setCountryName] = useState('');
  const [capitalName, setCapitalName] = useState('');
  const [filters, setFilters] = useState({});

  function onChange(event, setter) {
    const filterName = event.target.name;
    const filterValue = event.target.value;
    setter(filterValue);
    setFilters(prevFilters => {
      if (!filterValue) {
        delete prevFilters[filterName];
        return {...prevFilters};
      }
      return {...prevFilters, [filterName]: filterValue};
    });
  }

  useEffect(() => {
    const countries = getItem('countries');
    let filteredCountries = [...countries];
  
    Object.entries(filters).forEach(([filterName, filterValue]) => {
      const searchItem = filterValue.toLowerCase();
      filteredCountries = filteredCountries.filter(country => {
        let filterItem;
        if (filterName === 'countryName') filterItem = country.name.official.toLowerCase();
        if (filterName === 'capitalName') filterItem = country.capital[0].toLowerCase();
        return filterItem.includes(searchItem)
      });
    });

    filteredCountries = Object.entries(filters).length ? filteredCountries : [...countries];
    setCountries(filteredCountries);
  }, [filters, setCountries]);

  return (
    <form className={`${style.filterForm}`}>
      <FilterInput
        label='Country'
        inputName='countryName'
        value={countryName}
        onChange={event => onChange(event, setCountryName)}
      />
      <FilterInput
        label='Capital'
        inputName='capitalName'
        value={capitalName}
        onChange={event => onChange(event, setCapitalName)}
      />
    </form>
  );
};
