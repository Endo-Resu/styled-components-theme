import React, {useEffect, useState} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Controls from "./components/Controls/Controls";
import {ALL_COUNTRIES} from "./axios/config";
import axios from "axios";
import List from "./components/List/List";
import Card from "./components/Card/Card";

interface ICountry {
    name: string;
    flag: string;
    population: string;
    capital: string;
    region: string;
}

function App() {
    const [countries, setCountries] = useState<ICountry[]>([]);

    useEffect(() => {
        fetchCountries()
    }, [])

    async function fetchCountries() {
        try {
            await axios.get<ICountry[]>(ALL_COUNTRIES)
                .then(({data}) => setCountries(data))
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <Header/>
            <Main>
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
                            />
                        ))
                    }
                </List>
            </Main>
        </>
    );
}

export default App;
