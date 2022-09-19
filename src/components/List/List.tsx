import React, {FC} from 'react';
import * as S from './style';

interface ListProps {
    children?: React.ReactNode[]
}

const List: FC<ListProps> = ({children}) => {
    return (
        <S.Wrapper>
            {children}
        </S.Wrapper>
    );
};

export default List;
