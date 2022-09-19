const BASE_URL='https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flag,population,region';

export const searchByCountry = (name: string) => BASE_URL + 'name/' + name;

export const filterByCode = (codes: []) => BASE_URL + 'alpha?codes=' + codes.join(',');