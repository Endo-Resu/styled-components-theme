import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import Controls from "../../components/Controls/Controls";
import List from "../../components/List/List";
import Card from "../../components/Card/Card";
import axios from "axios";
import {ALL_COUNTRIES} from "../../axios/config";
import {useNavigate} from "react-router-dom";

interface ICountry {
    name: string;
    flag: string;
    population: string;
    capital: string;
    region: string;
}

interface HomePageProps {
    countries: ICountry[];
    setCountries: Dispatch<SetStateAction<ICountry[]>>;
}

const HomePage: FC<HomePageProps> = ({countries, setCountries}) => {

    useEffect(() => {
        fetchCountries()
    }, [])

    async function fetchCountries() {
        if (!countries.length) {
            try {
                await axios.get<ICountry[]>(ALL_COUNTRIES)
                    .then(({data}) => setCountries(data))
            } catch (e) {
                alert(e)
            }
        }
    }

    let navigate = useNavigate();

    return (
        <>
            <Controls />
            <List>
                {
                    countries.map((country) => (
                        <Card
                            key={country.name}
                            img={country.flag}
                            name={country.name}
                            info={[
                                {
                                    title: 'Population',
                                    description: country.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: country.region,
                                },
                                {
                                    title: 'Capital',
                                    description: country.capital,
                                },
                            ]}
                            onClick={() => navigate(`/country/${country.name}`)}
                        />
                    ))
                }
            </List>
        </>
    );
};

export default HomePage;
