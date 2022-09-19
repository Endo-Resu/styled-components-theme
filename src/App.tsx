import React, {useState} from 'react';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import Detail from "./pages/Detail/Detail";

interface ICountry {
    name: string;
    flag: string;
    population: string;
    capital: string;
    region: string;
}

function App() {
    const [countries, setCountries] = useState<ICountry[]>([]);

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage countries={countries} setCountries={setCountries} />}
                    />
                    <Route
                        path="/country/:name"
                        element={<Detail />}
                    />
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Routes>
            </Main>
        </>
    );
}

export default App;
