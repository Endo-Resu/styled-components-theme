import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import axios from "axios";
import {searchByCountry} from "../../axios/config";
import {GoBackButton} from "../../components/BorderCountryButton/BorderCountryButton";
import DetailComponent from "../../components/Detail/Detail";
import {ICountryDetail} from "../../types/types";


const Detail = () => {
    const [country, setCountry] = useState<ICountryDetail | null>(null);

    const {name} = useParams();
    const navigate = useNavigate();

    async function fetchCountry() {
        try {
            await axios.get<ICountryDetail[]>(searchByCountry(name))
                .then(({data}) => setCountry(data[0]))
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchCountry();
    }, [name])

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <GoBackButton onClick={goBack}>
                <IoArrowBack />
                <span>Back</span>
            </GoBackButton>
            {country && (
                <DetailComponent
                    flag={country.flag}
                    name={country.name}
                    nativeName={country.nativeName}
                    population={country.population}
                    region={country.region}
                    subRegion={country.subregion}
                    capital={country.capital}
                    topLevelDomain={country.topLevelDomain}
                    languages={country.languages}
                    currencies={country.currencies}
                    borders={country.borders}
                />
            )}
        </div>
    );
};

export default Detail;
