import React, {FC} from 'react';
import * as S from './style';
import * as G from '../styles/Global/Container';

interface MainProps {
    children?: React.ReactNode
}

const Main: FC<MainProps> = ({children}) => {
    return (
        <S.Wrapper>
            <G.Container>
                {children}
            </G.Container>
        </S.Wrapper>
    );
};

export default Main;
