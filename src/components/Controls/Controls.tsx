import React, {FC, useEffect, useState} from 'react';
import Search from "../Search/Search";
import {CustomSelect} from "../CustomSelect/CustomSelect";
import * as S from './style';
import search from "../Search/Search";

const OPTIONS = [
    {value: 'Africa', label: 'Africa'},
    {value: 'America', label: 'America'},
    {value: 'Asia', label: 'Asia'},
    {value: 'Europe', label: 'Europe'},
    {value: 'Oceania', label: 'Oceania'},
]

interface ControlProps {
    onSearch: (search?: string, region?: string) => void;
}

const Controls: FC<ControlProps> = ({onSearch}) => {
    const [search, setSearch] = useState<string>('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        // @ts-ignore
        const regionValue = region?.value || ''
        onSearch(search, regionValue)
    }, [search, region])

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
