import React, {useEffect, useState} from 'react';
import * as S from './style';
import * as G from '../styles/Global/Container';
import {IoMoon, IoMoonOutline} from "react-icons/io5";

const Header = () => {
    const [theme, setTheme] = useState<string>('light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <S.Header>
            <G.Container>
                <S.Wrapper>
                    <S.Title>
                        <a href="/">Where is the world?</a>
                    </S.Title>
                    <S.ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? (<IoMoonOutline/>) : (<IoMoon />)}
                    </S.ModeSwitcher>
                </S.Wrapper>
            </G.Container>
        </S.Header>
    );
};

export default Header;
