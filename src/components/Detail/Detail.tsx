import React, {FC, useEffect, useState} from 'react';
import * as S from './style'
import axios from "axios";
import {filterByCode} from "../../axios/config";
import {ICountryDetail, ICurrency, ILanguage} from "../../types/types";
import {useNavigate} from "react-router-dom";

interface DetailProps {
    name: string;
    nativeName: string;
    flag: string;
    capital: string;
    population: number;
    region: string;
    subRegion: string;
    topLevelDomain: string[];
    languages: ILanguage[];
    currencies: ICurrency[];
    borders: string[];
}

const DetailComponent: FC<DetailProps> = ({
                                              name, flag, nativeName,
                                              population, capital, region, subRegion,
                                              topLevelDomain, languages, currencies, borders
                                          }) => {

    const [neighbours, setNeighbours] = useState<string[] | []>([]);

    async function fetchBorderCountries() {
        if (borders && borders.length > 0) {
            try {
                await axios.get<ICountryDetail[]>(filterByCode(borders))
                    .then(({data}) => setNeighbours(data.map(country => country.name)))
            } catch (e) {
                alert(e)
            }
        }
    }

    useEffect(() => {
        fetchBorderCountries();
    }, [borders])

    const navigate = useNavigate();

    return (
        <S.Wrapper>
            <S.Image src={flag} alt={name}/>
            <S.Content>
                <S.Title>
                    {name}
                </S.Title>
                <S.ListGroup>
                    <S.List>
                        <S.Item>
                            <b>Native Name:</b> {nativeName}
                        </S.Item>
                        <S.Item>
                            <b>Population:</b> {population}
                        </S.Item>
                        <S.Item>
                            <b>Region:</b> {region}
                        </S.Item>
                        <S.Item>
                            <b>Subregion:</b> {subRegion}
                        </S.Item>
                        <S.Item>
                            <b>Capital:</b> {capital}
                        </S.Item>
                    </S.List>
                    <S.List>
                        <S.Item>
                            <b>Top Level Domain:</b> {topLevelDomain.map((item) => (
                            <span key={item}>
                                {item}
                            </span>
                        ))}
                        </S.Item>
                        <S.Item>
                            <b>Currencies:</b> {currencies.map((item) => (
                            <span key={item.name}>
                                {item.name}
                            </span>
                        ))}
                        </S.Item>
                        <S.Item>
                            <b>Languages:</b> {languages.map((item) => (
                            <span key={item.name}>
                                {item.name}
                            </span>
                        ))}
                        </S.Item>
                    </S.List>
                </S.ListGroup>
                {borders && borders.length > 0 && (
                    <S.Meta>
                        <b>Border Countries:</b>
                        <S.TagGroup>
                            {neighbours.map(neighbour => (
                                <S.Tag
                                    key={neighbour}
                                    onClick={() => navigate(`/country/${neighbour}`)}
                                >
                                    {neighbour}
                                </S.Tag>
                            ))}
                        </S.TagGroup>
                    </S.Meta>
                )}
            </S.Content>
        </S.Wrapper>
    );
};

export default DetailComponent;
