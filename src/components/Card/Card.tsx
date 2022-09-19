import React, {FC} from 'react';
import * as S from './style';

interface IInfo {
    title: string;
    description: string;
}

interface CardProps {
    img: string;
    name: string;
    info?: IInfo[];
    onClick?: () => void
}

const Card: FC<CardProps> = ({img, name, info, onClick}) => {
    return (
        <S.Wrapper onClick={onClick}>
            <S.Image src={img} alt={name}/>
            <S.Body>
                <S.Title>
                    {name}
                </S.Title>
                <S.List>
                    {info?.map(el => (
                        <S.Item key={el.title}>
                            <b>{el.title}:</b> <span>{el.description}</span>
                        </S.Item>
                    ))}
                </S.List>
            </S.Body>
        </S.Wrapper>
    );
};

export default Card;
