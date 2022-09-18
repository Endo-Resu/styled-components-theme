import React, {useState} from 'react';
import Search from "../Search/Search";

const Controls = () => {
    const [search, setSearch] = useState<string>('')

    return (
        <>
            <Search search={search} setSearch={setSearch}/>
        </>
    );
};

export default Controls;
