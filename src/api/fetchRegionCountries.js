async function fetchRegionCountries(region) {
  const apiUrl = process.env.REACT_APP_REGION_COUNTRIES_API_URL;
  const url = `${apiUrl}/region/${region}`;
  console.log(url);
  
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return data;
  }

  throw new Error('Error while fetching region countries');
}

export { fetchRegionCountries };