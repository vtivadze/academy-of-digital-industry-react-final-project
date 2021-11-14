export function getContinents(continents) {
  return continents.join(', ');
}

export function getCurrencies(currencies) {
  return Object.keys(currencies).join(', ');
}