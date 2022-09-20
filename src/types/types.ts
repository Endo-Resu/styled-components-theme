export interface ICurrency {
    name: string;
}

export interface ILanguage {
    name: string;
}

export interface ICountryDetail {
    name: string;
    nativeName: string;
    flag: string;
    capital: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];
    languages: ILanguage[];
    currencies: ICurrency[];
    borders: string[];
}