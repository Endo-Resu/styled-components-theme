import React, {useState} from 'react';
import Search from "../Search/Search";
import {CustomSelect} from "../CustomSelect/CustomSelect";
import * as S from './style';

const OPTIONS = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

const Controls = () => {
    const [search, setSearch] = useState<string>('');
    const [region, setRegion] = useState('');

    return (
        <S.Wrapper>
            <Search
                search={search}
                setSearch={setSearch}
            />
            <CustomSelect
                options={OPTIONS}
                placeholder='Filter by region'
                isClearable
                isSearchable={false}
                value={region}
                // @ts-ignore
                onChange={setRegion}
            />
        </S.Wrapper>
    );
};

export default Controls;
