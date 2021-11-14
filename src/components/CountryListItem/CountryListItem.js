export const CountryListItem = ({country}) => {
  return (
    <div className="country-list-item">
      <div>
        <a href="#">{country.name.official}</a>
      </div>
    </div>
  );
}