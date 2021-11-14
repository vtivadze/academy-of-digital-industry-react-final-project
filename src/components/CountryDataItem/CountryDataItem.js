import style from './CountryDataItem.module.css';

export const CountryDataItem = ({description, value}) => {
  return (
    <div className={`${style.countryDataItem}`}>
      <span className={`${style.description}`}>{description}</span>
      <span className={`${style.value}`} title={value}>{value}</span>
    </div>
  );
}