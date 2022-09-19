import React from 'react';
import {useParams} from "react-router-dom";

const Detail = () => {
    const params = useParams()

    return (
        <div>
            <span>123 {params.name}</span>
        </div>
    );
};

export default Detail;
