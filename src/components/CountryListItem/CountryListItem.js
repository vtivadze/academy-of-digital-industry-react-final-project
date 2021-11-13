export const CountryListItem = ({country}) => {
  return (
    <div className="country-list-item">
      <div>{country.name.official}</div>
    </div>
  );
}