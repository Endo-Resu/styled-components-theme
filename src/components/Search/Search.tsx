import React, {Dispatch, FC, SetStateAction} from 'react';
import {IoSearch} from "react-icons/io5";
import * as S from './style';

interface SearchProps {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>,
}

const Search: FC<SearchProps> = ({search, setSearch}) => {

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <S.InputContainer>
            <IoSearch />
            <S.Input
                value={search}
                onChange={handleSearch}
            />
        </S.InputContainer>
    );
};

export default Search;